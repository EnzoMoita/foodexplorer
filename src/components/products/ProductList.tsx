import React from 'react';
import ProductCard from './ProductCard';

import { Product } from '../../types/types';

interface ProductListProps {
  products: Product[]; // Apenas usando products passado como prop
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className=" p-4 grid grid-cols-5 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
