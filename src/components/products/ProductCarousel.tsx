import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Product } from '../../types/types';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  return (
    <div className="relative px-4 md:px-8 lg:px-16">
    <h1 className="text-3xl font-bold text-white my-4 text-center">Refeições</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10} // Menor espaço entre os slides
        slidesPerView={4} // Mudar para 4 slides visíveis de uma vez
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        loop={true}
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="prev absolute left-0 z-10 top-1/2 -translate-y-1/2 text-white bg-dark-blue hover:bg-gray-700 rounded-full p-2">
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button className="next absolute right-0 z-10 top-1/2 -translate-y-1/2 text-white bg-dark-blue hover:bg-gray-700 rounded-full p-2">
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
};

export default ProductCarousel;
