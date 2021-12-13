const Product = ({ product: { name, image, price } }) => {
  return (
    <div className="product">
      <p className="product__image">{image}</p>
      <p>${price}</p>
      <p>{name.toUpperCase()}</p>
    </div>
  );
};

export default Product