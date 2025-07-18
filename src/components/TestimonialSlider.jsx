import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      backgroundImage: 'https://www.pngjewellers.com/cdn/shop/files/1800_x_500_Home_page_banner_desktop_ab0d655e-0219-414d-af47-f1d0706859dd.jpg?v=1751514882&width=2000', // Replace with actual image

    },
    {
      id: 2,
      backgroundImage: 'https://www.pngjewellers.com/cdn/shop/files/Thushi_Page_Home_Desktop_Banner.jpg?v=1750853009&width=2000',
      
    },
  ];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        className="w-full h-[500px]"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: `url(https://www.pngjewellers.com/cdn/shop/files/1800_x_500_Home_page_banner_desktop_ab0d655e-0219-414d-af47-f1d0706859dd.jpg?v=1751514882&width=2000)`,
              }}
            >
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
