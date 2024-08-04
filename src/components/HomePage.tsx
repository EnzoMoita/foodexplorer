import Header from './Header';
import FeatureBanner from './FeatureBanner';

const HomePage = () => {
  return (
    <div className='bg-dark-blue min-h-screen'>
      <Header />
      <FeatureBanner />
      
      {/* Outros componentes da HomePage aqui */}
    </div>
  );
};

export default HomePage;
