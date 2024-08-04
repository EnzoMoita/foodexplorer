import React from 'react';
import ProductCard from './ProductCard';

import { Product } from '../../types/types';

interface ProductListProps {
  products: Product[]; // Apenas usando products passado como prop
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
      <div className="p-4 grid grid-cols-3 md:grid-cols-4 gap-8"> {/* Ajuste nas colunas e no gap */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
  export default ProductList;