import "./Product.css";
const Product = ({
  id,
  src,
  title,
  price,
  onAddToCart,
  onRemove,
  quantity,
  buttonText = "Thêm vào giỏ",
}) => {
  const displayPrice = price.toLocaleString("vi-VN") + "₫";
  return (
    <div className="product">
      <img className="product-image" src={src} alt={title} />
      <h3>{title}</h3>
      <p className="price">{displayPrice}</p>
      {quantity > 0 && <p className="quantity">Số lượng: {quantity}</p>}
      <button
        className={onRemove ? "btn-delete" : "add-to-cart-btn"}
        onClick={() => {
          if (onRemove) {
            onRemove(id);
          } else if (onAddToCart) {
            onAddToCart({ id, src, title, price });
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Product;
