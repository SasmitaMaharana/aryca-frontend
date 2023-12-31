import Hero from "@/components/Hero";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Products from "@/components/Products";
import Collection from"@/components/Collection";
export default function Home({featuredProduct, newProducts, collectionProduct}) {
  return <>
  <Hero product = {featuredProduct}/>
  <hr class="my-1 h-px border-0 bg-gray-300" />

  <Products product = {newProducts}/>
  <hr class="my-1 h-px border-0 bg-gray-300" />

  <Collection product = {collectionProduct} />
  </>
}


export async function getServerSideProps(){
  await mongooseConnect();

  const featuredId = '658fb10b01982feed3bcd546';
  const collectionId = '658fb10b01982feed3bcd546';

  const featuredProduct = await Product.findById(featuredId);
  //adds the collection of product in home page you can change id to change collection product
  const collectionProduct = await Product.findById(collectionId);
  
  //product list in home page limit 5
  const newProducts = await Product.find({},null,{sort:{'_id':1}, limit:5});
  
  return {
    props: {
      featuredProduct : JSON.parse(JSON.stringify(featuredProduct)),
      newProducts : JSON.parse(JSON.stringify(newProducts)),
      collectionProduct : JSON.parse(JSON.stringify(collectionProduct)),
    }
  }


}