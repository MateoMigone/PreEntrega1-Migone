import ProductCardContainer from "../../common/productCard/ProductCardContainer";
import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <section className="product-card">
      {items.map((item) => (
        <ProductCardContainer key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ItemList;
