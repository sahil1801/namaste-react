import useRestaurantMenu  from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import RestaurantCategory  from "./RestaurantCategory";
import { useState } from "react";

export const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.
    card?.card?.info;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p  className="font-bold text-lg border-b-2 w-6/12 mx-auto border-dotted pb-2">{cuisines?.join(", ")}
             - {costForTwoMessage}
            </p>
            {categories.map((category, index) => (
            <RestaurantCategory
                key={category?.card?.card.title} 
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
            />
            ))}
        </div>
    );
};

{/* <ul>
{itemCards?.map((item) => (
    <li key= {item.card.info.id}>
        {item.card.info.name} - {" Rs."}
        {item.card.info.price / 100 || item.card.info.defaultPrice  / 100}
        </li>))}
</ul> */}