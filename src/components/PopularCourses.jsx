import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CourseCard from './CourseCard'

const PopularCourses = ({ courses = [] }) => {
  React.useEffect(() => {
    // Add styles for alignment and button positioning
    const style = document.createElement('style')
    style.innerHTML = `
      .popular-courses-swiper .swiper-pagination-custom {
        display: none !important;
      }
      .popular-courses-swiper .swiper-container-wrapper {
        position: relative;
      }
      .popular-courses-swiper .swiper-slide {
        height: auto !important;
        display: flex !important;
        align-items: stretch !important;
      }
      .popular-courses-swiper .swiper-slide > div {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
      }
      .popular-courses-swiper ul {
        display: block !important;
      }
      .popular-courses-swiper li {
        display: list-item !important;
      }
      .popular-courses-swiper .swiper-button-prev-custom,
      .popular-courses-swiper .swiper-button-next-custom {
        position: absolute !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 10 !important;
        width: 40px !important;
        height: 40px !important;
        background-color: #6366f1 !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        color: white !important;
        cursor: pointer !important;
        font-size: 18px !important;
        transition: all 0.3s ease !important;
        border: none !important;
        padding: 0 !important;
      }
      .popular-courses-swiper .swiper-button-prev-custom {
        left: -60px !important;
      }
      .popular-courses-swiper .swiper-button-next-custom {
        right: -60px !important;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900 popular-courses-swiper">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">Our Popular Courses</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Industry-relevant training with guaranteed placement support</p>
          </div>
        </div>

        <div className="relative px-16 md:px-20">
          <div className="swiper-container-wrapper relative">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom'
            }}
            pagination={{ 
              clickable: false,
              el: '.swiper-pagination-custom'
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
          >
            {courses.map((course, idx) => (
              <SwiperSlide key={idx} className="flex">
                <div className="w-full flex flex-col">
                  <CourseCard
                    title={course.title}
                    icon={course.icon}
                    duration={course.duration}
                    modules={course.modules}
                    features={course.features}
                    price={course.price}
                    delay={idx * 0.05}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
          
          {/* Custom Navigation Arrows - Centered */}
          <button className="swiper-button-prev-custom">
            ❮
          </button>
          <button className="swiper-button-next-custom">
            ❯
          </button>
        </div>
      </div>
    </section>
  )
}

export default PopularCourses
