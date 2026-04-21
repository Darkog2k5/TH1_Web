import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./component/Product/Product.jsx";
import MenuIcon from "./component/Menu_icon/MenuIcon.jsx";
import AboutUs from "./component/AboutUs/AboutUs.jsx";
import Cart from "./component/Cart/Cart.jsx";
import CategoryPage from "./component/CategoryPage/CategoryPage.jsx";
import "./App.css";

import { DUMMY_PRODUCTS } from "./data/products.js";
import { useCart } from "./hooks/useCart.js";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { cart, handleAddToCart, removeFromCart, clearCart } = useCart();

  return (
    <>
      {/* HEADER */}
      <header>
        <h1 className="logo">PC Shop</h1>
        <h2 className="hotline">Hotline: 123-456-7890</h2>
        <nav className="nav-header">
          <Link to="/about-us">About Us</Link>
          <Link to="/cart">
            Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </Link>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <div className="layout">
        <div
          className="svg-category"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <MenuIcon />
          <span>Category</span>
        </div>

        {/* SIDEBAR */}
        <div className={`sidebar ${showSidebar ? "active" : ""}`}>
          <Link to="/category/laptop">Laptop</Link>
          <Link to="/category/laptop-gaming">Laptop Gaming</Link>
          <Link to="/category/pc">PC</Link>
          <Link to="/category/main-cpu-vga">Main, CPU, VGA</Link>
          <Link to="/category/case-nguon-tan">Case, Nguồn, Tản</Link>
          <Link to="/category/oCung-ram">Ổ cứng, RAM</Link>
          <Link to="/category/taiNghe">Tai nghe</Link>
          <Link to="/category/banPhim">Bàn phím</Link>
          <Link to="/category/chuot">Chuột</Link>

          <Link to="/" onClick={() => setShowSidebar(false)}>
            Tất cả Products
          </Link>
        </div>

        <div className="content">
          <Routes>
            {/* Route cho trang chủ (Đường dẫn "/") */}
            <Route
              path="/"
              element={
                <>
                  {/* first-section */}
                  <section className="first-section">
                    <img
                      class="pc-sec1-img"
                      src="https://cdn.hstatic.net/products/200000722513/web__61_of_86__aea66174cf754130b266656c48778519_grande.jpg"
                    ></img>
                    <h2>Welcome to our store</h2>
                    <p>Best products with best prices</p>
                  </section>

                  {/* PRODUCT LIST */}
                  <section className="products">
                    {DUMMY_PRODUCTS.map((prod) => (
                      <Product
                        key={prod.id}
                        id={prod.id}
                        src={prod.src}
                        title={prod.title}
                        price={prod.price}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </section>
                </>
              }
            />

            {/* Route cho trang About Us (Đường dẫn "/about-us") */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* Route cho trang Cart (Đường dẫn "/cart") */}
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cart}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />

            <Route
              path="/category/:categorySlug"
              element={<CategoryPage onAddToCart={handleAddToCart} />}
            />
          </Routes>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <p>Created at 14/4/2026</p>
      </footer>
    </>
  );
}

export default App;
