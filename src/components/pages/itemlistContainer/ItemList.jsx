import ProductCardContainer from "../../common/productCard/ProductCardContainer";
import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <section>
      {items.map((item) => (
        <ProductCardContainer key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ItemList;
