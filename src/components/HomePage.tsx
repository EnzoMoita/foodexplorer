import Header from './Header';
import FeatureBanner from './FeatureBanner';
import ProductCarousel from './products/ProductCarousel';
import products from '../data/productsData';

const HomePage = () => {
  return (
    <div className='bg-dark-blue min-h-screen'>
      <Header />
      <FeatureBanner />
      {/* Aplicando estilo inline para reduzir a margem superior */}
      <div style={{ marginTop: '-40vh' }}> 
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};

export default HomePage;
