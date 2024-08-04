import maskImage from '../images/mask.svg';

const FeatureImage = () => {
    return (
      <img src={maskImage} alt="Sabores inigualáveis" 
           className="absolute left-0 top-0 w-10/12 h-full object-cover" 
           style={{ marginLeft: '-15%' }} />
    );
  };

export default FeatureImage;
