import React, { useState } from 'react';
import Header from "@/components/Header";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/category";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";

export default function CategoryPage({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  const handleCategoryClick = async (categoryId) => {
    setSelectedCategory(categoryId);
    const categoryProducts = await fetchCategoryProducts(categoryId);
    setProducts(categoryProducts);
  };

  const fetchCategoryProducts = async (categoryId) => {
    await mongooseConnect();
    const category = await Category.findById(categoryId).populate('products');
    return category.products;
  };

  return (
    <>
      <Header />
      <Center>
        <Title>Categories</Title>
        <ul>
          {categories.map(category => (
            <li key={category._id}>
              <button onClick={() => handleCategoryClick(category._id)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
        {selectedCategory && (
          <>
            <Title>Products in {categories.find(cat => cat._id === selectedCategory)?.name}</Title>
            <ProductsGrid products={products} />
          </>
        )}
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const categories = await Category.find({}, null, { sort: { '_id': -1 } });
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    }
  };
}
