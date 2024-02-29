// pages/search.js

import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { useRouter } from 'next/router';

export default function SearchPage({ products }) {
  const router = useRouter();
  const searchQuery = router.query.query;

  return (
    <>
      <Header />
      <Center>
        <Title>Search Results for "{searchQuery}"</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps({ query }) {
  try {
    await mongooseConnect();
    
    const searchQuery = query.query || ""; // Get search query from query parameters
    
    let products;
    if (searchQuery) {
      // If search query is provided, search products based on title
      products = await Product.find({ title: { $regex: new RegExp(searchQuery, 'i') } }, null, { sort: { '_id': -1 } });
    } else {
      // If no search query provided, return an empty array
      products = [];
    }
    
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
