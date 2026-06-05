import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CourseCard from './CourseCard'

const PopularCourses = ({ courses = [] }) => {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">Our Popular Courses</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Industry-relevant training with guaranteed placement support</p>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
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
        </div>
      </div>
    </section>
  )
}

export default PopularCourses
