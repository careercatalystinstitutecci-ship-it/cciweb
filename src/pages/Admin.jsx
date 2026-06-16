import React, { useEffect, useMemo, useState } from 'react'
import { FiLogOut, FiPlus, FiRefreshCw, FiSave, FiTrash2, FiUsers } from 'react-icons/fi'

const emptyCourse = {
  title: '',
  duration: '',
  modules: 1,
  icon: 'QA',
  imageUrl: '',
  price: '',
  features: ['']
}

const emptyService = {
  title: '',
  description: ''
}

const emptyPlacementItem = {
  title: '',
  description: ''
}

const emptySuccessStory = {
  name: '',
  role: '',
  company: '',
  achievement: '',
  content: '',
  imageUrl: ''
}

const emptyBlogPost = {
  title: '',
  excerpt: '',
  date: '',
  category: '',
  image: 'AR',
  imageUrl: '',
  href: '#'
}

const emptyFaq = {
  question: '',
  answer: ''
}

const Admin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [authHeader, setAuthHeader] = useState(() => localStorage.getItem('adminAuth') || '')
  const [activeTab, setActiveTab] = useState('content')
  const [submissions, setSubmissions] = useState([])
  const [siteContent, setSiteContent] = useState({ settings: {}, courses: [], services: [] })
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const stats = useMemo(() => {
    const today = new Date().toDateString()
    const todayCount = submissions.filter(item => new Date(item.created_at).toDateString() === today).length
    return {
      total: submissions.length,
      today: todayCount,
      latest: submissions[0]?.created_at ? new Date(submissions[0].created_at).toLocaleString() : 'No leads yet'
    }
  }, [submissions])

  const requestWithAuth = async (url, options = {}, header = authHeader) => {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: header
      }
    })

    if (response.status === 401) {
      localStorage.removeItem('adminAuth')
      setAuthHeader('')
      throw new Error('Please login again.')
    }

    return response
  }

  const loadDashboard = async (header = authHeader) => {
    if (!header) return

    setLoading(true)
    setError('')

    try {
      const [contentResponse, leadsResponse] = await Promise.all([
        requestWithAuth('/api/admin/site-content', {}, header),
        requestWithAuth('/api/admin/contact-submissions', {}, header)
      ])

      if (!contentResponse.ok) throw new Error('Could not load website content.')
      if (!leadsResponse.ok) throw new Error('Could not load contact submissions.')

      setSiteContent(await contentResponse.json())
      setSubmissions(await leadsResponse.json())
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadDashboard()
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    const header = `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        headers: { Authorization: header }
      })

      if (!response.ok) throw new Error('Invalid username or password.')

      localStorage.setItem('adminAuth', header)
      setAuthHeader(header)
      setCredentials({ username: '', password: '' })
      await loadDashboard(header)
    } catch (err) {
      setError(err.message || 'Login failed.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    setAuthHeader('')
    setSubmissions([])
    setSiteContent({ settings: {}, courses: [], services: [] })
  }

  const saveSiteContent = async () => {
    setSaving(true)
    setError('')
    setNotice('')

    try {
      const response = await requestWithAuth('/api/admin/site-content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: siteContent })
      })

      if (!response.ok) throw new Error('Could not save website content.')

      setSiteContent(await response.json())
      setNotice('Website content saved successfully.')
    } catch (err) {
      setError(err.message || 'Save failed.')
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteLead = async (id) => {
    const confirmed = window.confirm('Delete this lead?')
    if (!confirmed) return

    setError('')

    try {
      const response = await requestWithAuth(`/api/admin/contact-submissions/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) throw new Error('Could not delete this lead.')
      setSubmissions(prev => prev.filter(item => item.id !== id))
    } catch (err) {
      setError(err.message || 'Delete failed.')
    }
  }

  const updateSettings = (key, value) => {
    setSiteContent(prev => ({
      ...prev,
      settings: {
        ...(prev.settings || {}),
        [key]: value
      }
    }))
  }

  const updateCourse = (index, key, value) => {
    setSiteContent(prev => ({
      ...prev,
      courses: prev.courses.map((course, courseIndex) => (
        courseIndex === index ? { ...course, [key]: value } : course
      ))
    }))
  }

  const updateCourseFeature = (courseIndex, featureIndex, value) => {
    setSiteContent(prev => ({
      ...prev,
      courses: prev.courses.map((course, index) => {
        if (index !== courseIndex) return course
        const features = [...(course.features || [])]
        features[featureIndex] = value
        return { ...course, features }
      })
    }))
  }

  const addCourse = () => {
    setSiteContent(prev => ({
      ...prev,
      courses: [...(prev.courses || []), { ...emptyCourse }]
    }))
  }

  const removeCourse = (index) => {
    setSiteContent(prev => ({
      ...prev,
      courses: prev.courses.filter((_, courseIndex) => courseIndex !== index)
    }))
  }

  const addCourseFeature = (courseIndex) => {
    setSiteContent(prev => ({
      ...prev,
      courses: prev.courses.map((course, index) => (
        index === courseIndex
          ? { ...course, features: [...(course.features || []), ''] }
          : course
      ))
    }))
  }

  const removeCourseFeature = (courseIndex, featureIndex) => {
    setSiteContent(prev => ({
      ...prev,
      courses: prev.courses.map((course, index) => (
        index === courseIndex
          ? { ...course, features: (course.features || []).filter((_, itemIndex) => itemIndex !== featureIndex) }
          : course
      ))
    }))
  }

  const updateService = (index, key, value) => {
    setSiteContent(prev => ({
      ...prev,
      services: prev.services.map((service, serviceIndex) => (
        serviceIndex === index ? { ...service, [key]: value } : service
      ))
    }))
  }

  const addService = () => {
    setSiteContent(prev => ({
      ...prev,
      services: [...(prev.services || []), { ...emptyService }]
    }))
  }

  const removeService = (index) => {
    setSiteContent(prev => ({
      ...prev,
      services: prev.services.filter((_, serviceIndex) => serviceIndex !== index)
    }))
  }

  const updateNestedListItem = (section, listKey, index, key, value) => {
    setSiteContent(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] || {}),
        [listKey]: ((prev[section]?.[listKey]) || []).map((item, itemIndex) => (
          itemIndex === index ? { ...item, [key]: value } : item
        ))
      }
    }))
  }

  const addNestedListItem = (section, listKey, emptyItem) => {
    setSiteContent(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] || {}),
        [listKey]: [...((prev[section]?.[listKey]) || []), { ...emptyItem }]
      }
    }))
  }

  const removeNestedListItem = (section, listKey, index) => {
    setSiteContent(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] || {}),
        [listKey]: ((prev[section]?.[listKey]) || []).filter((_, itemIndex) => itemIndex !== index)
      }
    }))
  }

  const updateListItem = (listKey, index, key, value) => {
    setSiteContent(prev => ({
      ...prev,
      [listKey]: ((prev[listKey]) || []).map((item, itemIndex) => (
        itemIndex === index ? { ...item, [key]: value } : item
      ))
    }))
  }

  const addListItem = (listKey, emptyItem) => {
    setSiteContent(prev => ({
      ...prev,
      [listKey]: [...((prev[listKey]) || []), { ...emptyItem }]
    }))
  }

  const removeListItem = (listKey, index) => {
    setSiteContent(prev => ({
      ...prev,
      [listKey]: ((prev[listKey]) || []).filter((_, itemIndex) => itemIndex !== index)
    }))
  }

  const updateResourceCategory = (index, value) => {
    setSiteContent(prev => ({
      ...prev,
      resources: {
        ...(prev.resources || {}),
        categories: ((prev.resources?.categories) || []).map((category, categoryIndex) => (
          categoryIndex === index ? value : category
        ))
      }
    }))
  }

  const addResourceCategory = () => {
    setSiteContent(prev => ({
      ...prev,
      resources: {
        ...(prev.resources || {}),
        categories: [...((prev.resources?.categories) || []), 'New Category']
      }
    }))
  }

  const removeResourceCategory = (index) => {
    setSiteContent(prev => ({
      ...prev,
      resources: {
        ...(prev.resources || {}),
        categories: ((prev.resources?.categories) || []).filter((_, categoryIndex) => categoryIndex !== index)
      }
    }))
  }

  if (!authHeader) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container-custom max-w-md">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <h1 className="text-2xl font-bold text-dark dark:text-white mb-2">Admin Login</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Sign in to manage website content.</p>

            {error && <Alert type="error" message={error} />}

            <form onSubmit={handleLogin} className="space-y-4">
              <TextInput label="Username" value={credentials.username} onChange={(value) => setCredentials(prev => ({ ...prev, username: value }))} />
              <TextInput label="Password" type="password" value={credentials.password} onChange={(value) => setCredentials(prev => ({ ...prev, password: value }))} />
              <button type="submit" disabled={loading} className="w-full rounded-lg bg-gradient-primary px-4 py-3 font-semibold text-white disabled:opacity-70">
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container-custom">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-dark dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Update website content, courses, services, and enquiries.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => loadDashboard()} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
              <FiRefreshCw /> Refresh
            </button>
            <button onClick={saveSiteContent} disabled={saving} className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 font-semibold text-white disabled:opacity-70">
              <FiSave /> {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800">
              <FiLogOut /> Logout
            </button>
          </div>
        </div>

        {error && <Alert type="error" message={error} />}
        {notice && <Alert type="success" message={notice} />}

        <div className="mb-6 flex flex-wrap gap-2">
          {[
            ['content', 'Content'],
            ['courses', 'Courses'],
            ['services', 'Services'],
            ['placement', 'Placement'],
            ['stories', 'Success Stories'],
            ['resources', 'Resources'],
            ['faqs', 'FAQs'],
            ['contactFaqs', 'Contact FAQs'],
            ['leads', 'Leads']
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-lg px-4 py-2 font-semibold transition-colors ${activeTab === key ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'content' && (
          <Panel title="Website Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextInput label="Institute Name" value={siteContent.settings?.instituteName || ''} onChange={(value) => updateSettings('instituteName', value)} />
              <TextInput label="Brand Name" value={siteContent.settings?.brandName || ''} onChange={(value) => updateSettings('brandName', value)} />
              <TextInput label="Email" value={siteContent.settings?.email || ''} onChange={(value) => updateSettings('email', value)} />
              <TextInput label="Phone" value={siteContent.settings?.phone || ''} onChange={(value) => updateSettings('phone', value)} />
              <TextInput label="Location" value={siteContent.settings?.location || ''} onChange={(value) => updateSettings('location', value)} />
              <TextInput label="Support Hours" value={siteContent.settings?.supportHours || ''} onChange={(value) => updateSettings('supportHours', value)} />
              <TextInput label="Hero Title" value={siteContent.settings?.heroTitle || ''} onChange={(value) => updateSettings('heroTitle', value)} />
              <TextInput label="Hero Subtitle" value={siteContent.settings?.heroSubtitle || ''} onChange={(value) => updateSettings('heroSubtitle', value)} />
              <div className="md:col-span-2">
                <TextArea label="Hero Description" value={siteContent.settings?.heroDescription || ''} onChange={(value) => updateSettings('heroDescription', value)} />
              </div>
            </div>
          </Panel>
        )}

        {activeTab === 'courses' && (
          <Panel
            title="Courses"
            action={<button onClick={addCourse} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add Course</button>}
          >
            <div className="space-y-6">
              {(siteContent.courses || []).map((course, index) => (
                <div key={index} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="font-bold text-dark dark:text-white">Course {index + 1}</h3>
                    <button onClick={() => removeCourse(index)} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <TextInput label="Title" value={course.title || ''} onChange={(value) => updateCourse(index, 'title', value)} />
                    <TextInput label="Duration" value={course.duration || ''} onChange={(value) => updateCourse(index, 'duration', value)} />
                    <TextInput label="Modules" type="number" value={course.modules || 1} onChange={(value) => updateCourse(index, 'modules', Number(value))} />
                    <TextInput label="Icon/Text" value={course.icon || ''} onChange={(value) => updateCourse(index, 'icon', value)} />
                    <TextInput label="Price/Salary Text" value={course.price || ''} onChange={(value) => updateCourse(index, 'price', value)} />
                    <div className="md:col-span-2 lg:col-span-3">
                      <TextInput label="Course Image URL" value={course.imageUrl || ''} onChange={(value) => updateCourse(index, 'imageUrl', value)} />
                      {course.imageUrl && (
                        <div className="mt-3 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                          <img src={course.imageUrl} alt={`${course.title || 'Course'} preview`} className="h-44 w-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-dark dark:text-white">Features</p>
                      <button onClick={() => addCourseFeature(index)} className="text-sm font-semibold text-primary">Add Feature</button>
                    </div>
                    {(course.features || []).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex gap-2">
                        <input
                          value={feature}
                          onChange={(e) => updateCourseFeature(index, featureIndex, e.target.value)}
                          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                        />
                        <button onClick={() => removeCourseFeature(index, featureIndex)} className="rounded-lg px-3 py-2 text-red-600 hover:bg-red-50">
                          <FiTrash2 />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        )}

        {activeTab === 'services' && (
          <Panel
            title="Services / Home Feature Cards"
            action={<button onClick={addService} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add Service</button>}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(siteContent.services || []).map((service, index) => (
                <div key={index} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="font-bold text-dark dark:text-white">Service {index + 1}</h3>
                    <button onClick={() => removeService(index)} className="rounded-lg px-3 py-2 text-red-600 hover:bg-red-50">
                      <FiTrash2 />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <TextInput label="Title" value={service.title || ''} onChange={(value) => updateService(index, 'title', value)} />
                    <TextArea label="Description" value={service.description || ''} onChange={(value) => updateService(index, 'description', value)} />
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        )}

        {activeTab === 'placement' && (
          <div className="space-y-6">
            <Panel
              title="Placement Process"
              action={<button onClick={() => addNestedListItem('placement', 'process', emptyPlacementItem)} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add Step</button>}
            >
              <EditableCardGrid
                items={siteContent.placement?.process || []}
                onRemove={(index) => removeNestedListItem('placement', 'process', index)}
                renderItem={(item, index) => (
                  <div className="space-y-4">
                    <TextInput label="Title" value={item.title || ''} onChange={(value) => updateNestedListItem('placement', 'process', index, 'title', value)} />
                    <TextArea label="Description" value={item.description || ''} onChange={(value) => updateNestedListItem('placement', 'process', index, 'description', value)} />
                  </div>
                )}
              />
            </Panel>

            <Panel
              title="Placement Services"
              action={<button onClick={() => addNestedListItem('placement', 'services', emptyPlacementItem)} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add Service</button>}
            >
              <EditableCardGrid
                items={siteContent.placement?.services || []}
                onRemove={(index) => removeNestedListItem('placement', 'services', index)}
                renderItem={(item, index) => (
                  <div className="space-y-4">
                    <TextInput label="Title" value={item.title || ''} onChange={(value) => updateNestedListItem('placement', 'services', index, 'title', value)} />
                    <TextArea label="Description" value={item.description || ''} onChange={(value) => updateNestedListItem('placement', 'services', index, 'description', value)} />
                  </div>
                )}
              />
            </Panel>
          </div>
        )}

        {activeTab === 'stories' && (
          <Panel
            title="Success Stories"
            action={<button onClick={() => addListItem('successStories', emptySuccessStory)} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add Story</button>}
          >
            <EditableCardGrid
              items={siteContent.successStories || []}
              onRemove={(index) => removeListItem('successStories', index)}
              renderItem={(story, index) => (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextInput label="Name" value={story.name || ''} onChange={(value) => updateListItem('successStories', index, 'name', value)} />
                    <TextInput label="Role" value={story.role || ''} onChange={(value) => updateListItem('successStories', index, 'role', value)} />
                    <TextInput label="Company" value={story.company || ''} onChange={(value) => updateListItem('successStories', index, 'company', value)} />
                    <TextInput label="Achievement" value={story.achievement || ''} onChange={(value) => updateListItem('successStories', index, 'achievement', value)} />
                  </div>
                  <TextInput label="Image URL" value={story.imageUrl || ''} onChange={(value) => updateListItem('successStories', index, 'imageUrl', value)} />
                  {story.imageUrl && <img src={story.imageUrl} alt={story.name || 'Story preview'} className="h-40 w-full rounded-lg object-cover" />}
                  <TextArea label="Story" value={story.content || ''} onChange={(value) => updateListItem('successStories', index, 'content', value)} />
                </div>
              )}
            />
          </Panel>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-6">
            <Panel
              title="Resource Articles"
              action={<button onClick={() => addNestedListItem('resources', 'blogPosts', emptyBlogPost)} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add Article</button>}
            >
              <EditableCardGrid
                items={siteContent.resources?.blogPosts || []}
                onRemove={(index) => removeNestedListItem('resources', 'blogPosts', index)}
                renderItem={(post, index) => (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <TextInput label="Title" value={post.title || ''} onChange={(value) => updateNestedListItem('resources', 'blogPosts', index, 'title', value)} />
                      <TextInput label="Date" value={post.date || ''} onChange={(value) => updateNestedListItem('resources', 'blogPosts', index, 'date', value)} />
                      <TextInput label="Category" value={post.category || ''} onChange={(value) => updateNestedListItem('resources', 'blogPosts', index, 'category', value)} />
                      <TextInput label="Icon/Text" value={post.image || ''} onChange={(value) => updateNestedListItem('resources', 'blogPosts', index, 'image', value)} />
                      <TextInput label="Image URL" value={post.imageUrl || ''} onChange={(value) => updateNestedListItem('resources', 'blogPosts', index, 'imageUrl', value)} />
                      <TextInput label="Read More Link" value={post.href || '#'} onChange={(value) => updateNestedListItem('resources', 'blogPosts', index, 'href', value)} />
                    </div>
                    {post.imageUrl && <img src={post.imageUrl} alt={post.title || 'Article preview'} className="h-40 w-full rounded-lg object-cover" />}
                    <TextArea label="Excerpt" value={post.excerpt || ''} onChange={(value) => updateNestedListItem('resources', 'blogPosts', index, 'excerpt', value)} />
                  </div>
                )}
              />
            </Panel>

            <Panel
              title="Resource Categories"
              action={<button onClick={addResourceCategory} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add Category</button>}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(siteContent.resources?.categories || []).map((category, index) => (
                  <div key={index} className="flex gap-2">
                    <input value={category} onChange={(e) => updateResourceCategory(index, e.target.value)} className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
                    <button onClick={() => removeResourceCategory(index)} className="rounded-lg px-3 py-2 text-red-600 hover:bg-red-50"><FiTrash2 /></button>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        )}

        {activeTab === 'faqs' && (
          <Panel
            title="FAQ Page Questions"
            action={<button onClick={() => addListItem('faqs', emptyFaq)} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add FAQ</button>}
          >
            <FaqEditor items={siteContent.faqs || []} onUpdate={(index, key, value) => updateListItem('faqs', index, key, value)} onRemove={(index) => removeListItem('faqs', index)} />
          </Panel>
        )}

        {activeTab === 'contactFaqs' && (
          <Panel
            title="Contact Page Quick Answers"
            action={<button onClick={() => addListItem('contactFaqs', emptyFaq)} className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white"><FiPlus /> Add Answer</button>}
          >
            <FaqEditor items={siteContent.contactFaqs || []} onUpdate={(index, key, value) => updateListItem('contactFaqs', index, key, value)} onRemove={(index) => removeListItem('contactFaqs', index)} />
          </Panel>
        )}

        {activeTab === 'leads' && (
          <>
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <StatCard label="Total Leads" value={stats.total} icon={<FiUsers />} />
              <StatCard label="Today" value={stats.today} />
              <StatCard label="Latest Lead" value={stats.latest} />
            </div>
            <LeadsTable loading={loading} submissions={submissions} onDelete={handleDeleteLead} />
          </>
        )}
      </div>
    </main>
  )
}

const EditableCardGrid = ({ items, onRemove, renderItem }) => (
  <div className="grid grid-cols-1 gap-4">
    {items.map((item, index) => (
      <div key={index} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="font-bold text-dark dark:text-white">Item {index + 1}</h3>
          <button onClick={() => onRemove(index)} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">
            <FiTrash2 /> Remove
          </button>
        </div>
        {renderItem(item, index)}
      </div>
    ))}
  </div>
)

const FaqEditor = ({ items, onUpdate, onRemove }) => (
  <EditableCardGrid
    items={items}
    onRemove={onRemove}
    renderItem={(faq, index) => (
      <div className="space-y-4">
        <TextInput label="Question" value={faq.question || ''} onChange={(value) => onUpdate(index, 'question', value)} />
        <TextArea label="Answer" value={faq.answer || ''} onChange={(value) => onUpdate(index, 'answer', value)} />
      </div>
    )}
  />
)

const Alert = ({ type, message }) => (
  <div className={`mb-6 rounded-lg border px-4 py-3 text-sm ${type === 'success' ? 'border-green-300 bg-green-50 text-green-700' : 'border-red-300 bg-red-50 text-red-700'}`}>
    {message}
  </div>
)

const Panel = ({ title, action, children }) => (
  <section className="rounded-lg bg-white p-5 shadow border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-xl font-bold text-dark dark:text-white">{title}</h2>
      {action}
    </div>
    {children}
  </section>
)

const TextInput = ({ label, type = 'text', value, onChange }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-900 dark:text-white"
      required
    />
  </label>
)

const TextArea = ({ label, value, onChange }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-semibold text-dark dark:text-white">{label}</span>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows="4"
      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-900 dark:text-white"
    />
  </label>
)

const StatCard = ({ label, value, icon }) => (
  <div className="rounded-lg bg-white p-5 shadow border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
    {icon && <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>}
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
    <p className="mt-3 text-2xl font-bold text-dark dark:text-white">{value}</p>
  </div>
)

const LeadsTable = ({ loading, submissions, onDelete }) => (
  <div className="overflow-hidden rounded-lg bg-white shadow border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-900">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-bold uppercase text-gray-500">Name</th>
            <th className="px-4 py-3 text-left text-xs font-bold uppercase text-gray-500">Contact</th>
            <th className="px-4 py-3 text-left text-xs font-bold uppercase text-gray-500">Subject</th>
            <th className="px-4 py-3 text-left text-xs font-bold uppercase text-gray-500">Message</th>
            <th className="px-4 py-3 text-left text-xs font-bold uppercase text-gray-500">Date</th>
            <th className="px-4 py-3 text-right text-xs font-bold uppercase text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {loading && (
            <tr>
              <td colSpan="6" className="px-4 py-8 text-center text-gray-500">Loading...</td>
            </tr>
          )}
          {!loading && submissions.length === 0 && (
            <tr>
              <td colSpan="6" className="px-4 py-8 text-center text-gray-500">No leads found.</td>
            </tr>
          )}
          {!loading && submissions.map((item) => (
            <tr key={item.id} className="align-top">
              <td className="px-4 py-4 font-semibold text-dark dark:text-white">{item.name}</td>
              <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                <a href={`mailto:${item.email}`} className="block text-primary hover:underline">{item.email}</a>
                <a href={`tel:${item.phone}`} className="block hover:text-primary">{item.phone}</a>
              </td>
              <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">{item.subject || '-'}</td>
              <td className="max-w-sm px-4 py-4 text-sm text-gray-600 dark:text-gray-300">{item.message}</td>
              <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">{new Date(item.created_at).toLocaleString()}</td>
              <td className="px-4 py-4 text-right">
                <button onClick={() => onDelete(item.id)} className="inline-flex items-center justify-center rounded-lg p-2 text-red-600 hover:bg-red-50" title="Delete lead">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default Admin
