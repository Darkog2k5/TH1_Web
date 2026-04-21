import { useParams } from "react-router-dom";
import Product from "../Product/Product.jsx";
import { DUMMY_PRODUCTS } from "../../data/products.js";

function CategoryPage({ onAddToCart }) {
  // Lấy tham số categorySlug từ URL (ví dụ: "laptop", "pc")
  const { categorySlug } = useParams();

  // Lọc sản phẩm theo category
  const filteredProducts = DUMMY_PRODUCTS.filter(
    (product) => product.category === categorySlug,
  );

  return (
    <div className="category-page" style={{ padding: "20px" }}>
      {/* Hiển thị Tên danh mục (Viết hoa chữ cái đầu) */}
      <h2
        style={{
          textAlign: "center",
          textTransform: "capitalize",
          color: "#c30909",
        }}
      >
        Danh mục: {categorySlug}
      </h2>

      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          Đang cập nhật sản phẩm cho danh mục này...
        </p>
      ) : (
        <section className="products">
          {filteredProducts.map((prod) => (
            <Product
              key={prod.id}
              id={prod.id}
              src={prod.src}
              title={prod.title}
              price={prod.price}
              onAddToCart={onAddToCart} // Truyền tiếp hàm giỏ hàng xuống
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default CategoryPage;
