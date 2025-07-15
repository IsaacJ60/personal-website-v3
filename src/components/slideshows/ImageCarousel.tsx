import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageCarouselProps {
  images: string[];
  caption?: string;
  colors: {
    primary: { r: number; g: number; b: number };
    secondary: { r: number; g: number; b: number };
  };
  delay: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, caption, colors, delay }) => {

  const rgb = (color: { r: number; g: number; b: number }) =>
    `rgb(${color.r}, ${color.g}, ${color.b})`;

  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden">
      <Swiper
        style={{
          "--swiper-navigation-color": `rgb(${colors.primary.r},${colors.primary.g},${colors.primary.b})`,
          "--swiper-pagination-color": `rgb(${colors.secondary.r},${colors.secondary.g},${colors.secondary.b})`,
        } as React.CSSProperties}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: delay }}
        loop={true}
        className="rounded-xl w-full h-80" // 👈 Set fixed height here (adjust as needed)
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="w-full h-full">
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>


      {caption && (
        <p className="absolute top-2 left-2 text-white text-xs bg-black/60 px-2 py-1 rounded z-10">
          {caption}
        </p>
      )}
    </div>
  );
};

export default ImageCarousel;