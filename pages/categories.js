import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/category";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import styled from 'styled-components';

// Styled components for styling
const CategoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
`;

const CategoryButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const SelectedCategoryContainer = styled.div`
  margin-top: 20px;
`;

const CategoryPage = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (selectedCategory) {
      fetchCategoryProducts(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    router.push(`/products?category=${categoryId}`);
  };

  const fetchCategoryProducts = async (categoryId) => {
    try {
      await mongooseConnect();
      const categoryProducts = await Category.findById(categoryId).populate('products');
      setProducts(categoryProducts.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
  };

  return (
    <>
      <Header />
      <CategoryContainer>
        <Title>Categories</Title>
        <CategoryList>
          {categories.map(category => (
            <CategoryItem key={category._id}>
              <CategoryButton onClick={() => handleCategoryClick(category._id)}>
                {category.name}
              </CategoryButton>
            </CategoryItem>
          ))}
        </CategoryList>
        
        {/* Render selected category name */}
        {selectedCategory && (
          <SelectedCategoryContainer>
            <h3>Selected Category</h3>
            <p>{categories.find(cat => cat._id === selectedCategory)?.name}</p>
            <p>{categories.find(cat => cat._id === selectedCategory)?._id}</p>
          </SelectedCategoryContainer>
        )}
      </CategoryContainer>
      {/* Render products grid */}
      {/* <ProductsGrid products={products.category._id} /> */}
    </>
  );
};

export async function getServerSideProps() {
  try {
    await mongooseConnect();
    const categories = await Category.find({}, null, { sort: { '_id': -1 } });
    const parsedCategories = JSON.parse(JSON.stringify(categories));
    
    return {
      props: {
        categories: parsedCategories,
      },
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      props: {
        categories: [],
      },
    };
  }
}

export default CategoryPage;
