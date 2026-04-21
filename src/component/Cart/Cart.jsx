// src/component/Cart/Cart.jsx
import React from "react";
import "./Cart.css";
import Product from "../Product/Product.jsx";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + "₫";
  };

  return (
    <div className="cart-page">
      <h2>Giỏ Hàng Của Bạn</h2>

      {cartItems.length === 0 ? (
        <p>Giỏ hàng đang trống. Hãy quay lại trang chủ để mua sắm nhé!</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                src={item.src}
                title={item.title}
                price={item.price}
                quantity={item.quantity} // Truyền thêm số lượng
                onRemove={removeFromCart} // Thay vì onAddToCart, ta dùng onRemove
                buttonText="Xóa" // Đổi tên nút
              />
            ))}
          </div>

          <div className="cart-summary">
            <h3>
              Tổng cộng:{" "}
              <span className="total-price">{formatPrice(totalPrice)}</span>
            </h3>
            <button onClick={clearCart} className="btn-checkout">
              Thanh Toán
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
