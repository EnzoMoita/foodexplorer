import Header from './Header';
import FeatureBanner from './FeatureBanner';
import ProductCarousel from './products/ProductCarousel';
import products from '../data/productsData';

const HomePage = () => {
  return (
    <div className='bg-dark-blue min-h-screen'>
      <Header />
      <FeatureBanner />
      <ProductCarousel products={products} /> {/* Usando o carrossel de produtos aqui */}
    </div>
  );
};

export default HomePage;
