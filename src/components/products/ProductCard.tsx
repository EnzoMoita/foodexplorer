import React, { useState } from 'react';
// Importando a interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [count, setCount] = useState(1);
  
    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count > 1 ? count - 1 : 1);
  
    return (
        <div className="bg-dark-dark-200 rounded-lg p-3 text-white shadow-md hover:shadow-lg transition-shadow duration-300 max-w-96 h-auto"> {/* Ajuste para 'h-auto' e padding */}
          <div className="flex flex-col items-center p-4"> {/* Adicionado padding interno para todo o card */}
            <img src={product.image} alt={product.name} className="w-32 h-32 rounded-full object-cover mb-4" /> {/* Margin-bottom para separar a imagem do texto */}
            <div className="text-center mb-4"> {/* Margin-bottom para separar o texto dos botões */}
              <h3 className="text-md font-semibold">{product.name}</h3>
              <p className="text-sm">{product.description}</p>
              <div className="mt-2 mb-4"> {/* Margens para espaçar o preço */}
                <span className="text-4xl font-bold">{`R$ ${product.price.toFixed(2)}`}</span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">  {/* Margin-top para empurrar os controles para baixo */}
              <button onClick={decrement} className="text-xl bg-transparent px-2 py-1">-</button>
              <span className="text-xl px-2">{count}</span>
              <button onClick={increment} className="text-xl bg-transparent px-2 py-1">+</button>
              <button className="bg-tomato px-4 py-3 rounded text-white hover:bg-tomato-dark transition-colors duration-300 ml-2">Incluir</button>
            </div>
          </div>
        </div>
      );
    };

export default ProductCard;
