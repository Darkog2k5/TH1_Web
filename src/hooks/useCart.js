import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Kiểm tra xem ID sản phẩm đã có trong giỏ chưa
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Nếu có rồi, chỉ tăng quantity lên 1
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
      alert(
        `Đã tăng số lượng ${product.title} lên ${existingProduct.quantity + 1}`,
      );
    } else {
      // Nếu chưa có, thêm mới với quantity ban đầu là 1
      setCart([...cart, { ...product, quantity: 1 }]);
      alert(`Đã thêm ${product.title} vào giỏ hàng!`);
    }
  };

  // 2. Xóa sản phẩm khỏi giỏ (Tính năng 4)
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // 3. Thanh toán (Reset giỏ hàng về 0)
  const clearCart = () => {
    setCart([]);
    alert("Thanh toán thành công! Giỏ hàng đã được làm trống.");
  };
  return { cart, handleAddToCart, removeFromCart, clearCart };
};
