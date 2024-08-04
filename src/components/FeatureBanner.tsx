import FeatureImage from './FeatureImage'; // Importando o novo componente

const FeatureBanner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ transform: 'translateY(-20%)' }}>
      <div className="bg-gradient-dark relative" style={{ width: '1120px', height: '260px' }}>
        <FeatureImage /> {/* Utilizando o componente de imagem separado */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right">
          <h1 className="text-4xl font-bold text-white">Sabores inigualáveis</h1>
          <p className="text-white">Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
