import { Skeleton } from "@mui/material";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";
import "./itemList.css";
import CircleIcon from "@mui/icons-material/Circle";

const ItemList = ({ items, categoryName, categoryChange }) => {
  return (
    <section className="item-list-container">
      <div className="item-list-title">
        <h2>Bienvenido a Futbol Retro!</h2>
        <p>
          En nuestro catálogo encontrarás las mejores camisetas retro, aquellas
          que representan los momentos más icónicos del fútbol o simplemente
          tienen diseños inolvidables.
        </p>
      </div>
      <div className="item-list-content">
        {items.length === 0 || categoryChange ? (
          <>
            <h3>
              <Skeleton variant="text" width={350} height={50} />
            </h3>
            <div className="product-cards-container">
              <Skeleton variant="rectangular" width={345} height={391.2} />
              <Skeleton variant="rectangular" width={345} height={391.2} />
              <Skeleton variant="rectangular" width={345} height={391.2} />
              <Skeleton variant="rectangular" width={345} height={391.2} />
              <Skeleton variant="rectangular" width={345} height={391.2} />
              <Skeleton variant="rectangular" width={345} height={391.2} />
              <Skeleton variant="rectangular" width={345} height={391.2} />
              <Skeleton variant="rectangular" width={345} height={391.2} />
            </div>
          </>
        ) : (
          <>
            {
              <h3 className="item-list-content-title">
                <CircleIcon />
                <span>
                  {categoryName
                    ? categoryName.toUpperCase()
                    : "TODAS LAS CAMISETAS"}
                </span>
                <CircleIcon />
              </h3>
            }
            <div className="product-cards-container">
              {items.map((item) => (
                <ProductCardContainer key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ItemList;
