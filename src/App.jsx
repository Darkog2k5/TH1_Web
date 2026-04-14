import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {/* HEADER */}
      <header>
        <h1 className="logo">PC Shop</h1>
        <h2 className="hotline">Hotline: 123-456-7890</h2>
        <nav className="nav-header">
          <a href="#">Products</a>
          <a href="#">Cart</a>
          <a href="#">Home</a>
        </nav>
      </header>

      <div className="layout">
        <div
          className="svg-category"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            className=""
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-0.00012207"
              y="0.000190735"
              width="18"
              height="2"
              rx="1"
              fill="white"
            ></rect>
            <rect
              x="-0.00012207"
              y="5.99999"
              width="18"
              height="2"
              rx="1"
              fill="white"
            ></rect>
            <rect
              x="-0.00012207"
              y="12.0001"
              width="18"
              height="2"
              rx="1"
              fill="white"
            ></rect>
          </svg>
          <span>Category</span>
        </div>

        {/* SIDEBAR */}
        <div className={`sidebar ${showSidebar ? "active" : ""}`}>
          <a href="#">Laptop</a>
          <a href="#">Laptop Gaming</a>
          <a href="#">PC GVN</a>
          <a href="#">Main, CPU, VGA</a>
          <a href="#">Case, Nguồn, Tản</a>
          <a href="#">Ổ cứng, RAM</a>
          <a href="#">Tai nghe</a>
          <a href="#">Bàn phím</a>
          <a href="#">Chuột</a>
          <a href="#">Products</a>
        </div>

        <div className="content">
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
            <div className="product">
              <img
                className="product1"
                src="https://cdn.hstatic.net/products/200000722513/pc_rtx_5060__2_of_84__c7867c9dc9d94d72a6c18c61e398cee3_grande.jpg"
              ></img>
              <h3>PC GVN Intel Core Ultra 7 265F/ VGA RTX 5080</h3>
              <p>76.590.000₫</p>
              <button>Add to cart</button>
            </div>

            <div className="product">
              <img
                className="product2"
                src="https://cdn.hstatic.net/products/200000722513/web__61_of_86__aea66174cf754130b266656c48778519_grande.jpg"
              ></img>
              <h3>PC GVN Intel i7-14700F/ VGA RTX 5080</h3>
              <p>81.490.000₫</p>
              <button>Add to cart</button>
            </div>

            <div className="product">
              <img
                className="product3"
                src="https://product.hstatic.net/200000722513/product/pc_gvn__i7-_4070_-_3_0ea0d3f21b41464991ac7134a04ac5e4_grande.png"
              ></img>
              <h3>PC GVN AMD R7-9800x3D/ VGA RTX 5080 (Powered by MSI)</h3>
              <p>88.880.000₫</p>
              <button>Add to cart</button>
            </div>
          </section>
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
