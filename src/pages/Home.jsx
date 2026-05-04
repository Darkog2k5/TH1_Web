import Product from "../components/Product/Product.jsx";
import { DUMMY_PRODUCTS } from "../data/products.js";

export default function Home({ onAddToCart }) {
  return (
    <>
      <section className="bg-[url('https://cdn.hstatic.net/products/200000722513/web__61_of_86__aea66174cf754130b266656c48778519_grande.jpg')] bg-no-repeat bg-center bg-cover p-12 text-white text-center max-w-[600px] mx-auto mt-4 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-2">Welcome to our store</h2>
        <p className="text-lg">Best products with best prices</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 justify-center">
        {DUMMY_PRODUCTS.map((prod) => (
          <Product
            key={prod.id}
            id={prod.id}
            src={prod.src}
            title={prod.title}
            price={prod.price}
            onAddToCart={onAddToCart}
          />
        ))}
      </section>
    </>
  );
}
