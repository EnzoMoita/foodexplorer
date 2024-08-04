import Header from './Header';
import FeatureBanner from './FeatureBanner';
import ProductList from './products/ProductList';
import products from '../data/productsData';  // Ajuste o caminho conforme necessário

const HomePage = () => {
  return (
    <div className='bg-dark-blue min-h-screen'>
      <Header />
      <FeatureBanner />
      <ProductList products={products} /> 
    </div>
  );
};

export default HomePage;
