import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CourseCard from './CourseCard'

const PopularCourses = ({ courses = [] }) => {
  React.useEffect(() => {
    // Add styles for custom pagination
    const style = document.createElement('style')
    style.innerHTML = `
      .swiper-pagination-custom {
        position: static !important;
        margin-top: 3rem;
      }
      .swiper-pagination-custom .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #d1d5db;
        opacity: 1;
        border-radius: 50%;
        transition: all 0.3s ease;
      }
      .swiper-pagination-custom .swiper-pagination-bullet-active {
        background-color: #6366f1;
        transform: scale(1.2);
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">Our Popular Courses</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Industry-relevant training with guaranteed placement support</p>
          </div>
        </div>

        <div className="relative px-16 md:px-20">
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
              clickable: true,
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
              <SwiperSlide key={idx}>
                <div className="h-full">
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
          
          {/* Custom Navigation Arrows - Outside */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-primary hover:bg-accent text-white rounded-full flex items-center justify-center transition-all">
            ❮
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-primary hover:bg-accent text-white rounded-full flex items-center justify-center transition-all">
            ❯
          </button>
          
          {/* Custom Pagination - Below with spacing */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-12"></div>
        </div>
      </div>
    </section>
  )
}

export default PopularCourses
