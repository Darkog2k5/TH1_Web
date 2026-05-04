import { useParams } from "react-router-dom";
import Product from "../components/Product/Product.jsx";
import { DUMMY_PRODUCTS } from "../data/products.js";

function CategoryPage({ onAddToCart }) {
  const { categorySlug } = useParams();
  const filteredProducts = DUMMY_PRODUCTS.filter(
    (product) => product.category === categorySlug,
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-center capitalize text-primary text-3xl font-bold mb-8">
        Danh mục: {categorySlug}
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Đang cập nhật sản phẩm cho danh mục này...
        </p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {filteredProducts.map((prod) => (
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
      )}
    </div>
  );
}

export default CategoryPage;
