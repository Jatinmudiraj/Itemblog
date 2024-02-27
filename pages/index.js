import Header from "@/components/Header";
import Featured from "@/components/Featured";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const featuredProductId = '6549c30b03ea47afcd7406ef';
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
    
    return {
      props: {
        featuredProduct: featuredProduct ? JSON.parse(JSON.stringify(featuredProduct)) : null,
        newProducts: newProducts ? JSON.parse(JSON.stringify(newProducts)) : null,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        featuredProduct: null,
        newProducts: null,
      },
    };
  }
}
