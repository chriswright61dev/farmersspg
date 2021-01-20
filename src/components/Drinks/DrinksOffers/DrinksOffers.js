import DrinkOffer from "./DrinkOffer";
import DrinksOffersHeader from "./DrinksOffersHeader";
import "./DrinksOffers.css";
function DrinksOffers(props) {
  //   console.log("drink offers", props.data);
  return (
    <div className="drinks_offers">
      <DrinksOffersHeader />
      {props.data.map((drink) => {
        return <DrinkOffer key={drink.id} data={drink}></DrinkOffer>;
      })}
    </div>
  );
}

export default DrinksOffers;
