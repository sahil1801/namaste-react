import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { UserContext } from "../utils/UserContext";


const RestaurantCard = (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

    return(
        <div data-testid= "resCard" className="p-4 m-4 w-[200px]  bg-gray-100 hover:bg-gray-200 rounded-lg">
            <img 
                className="rounded-lg"
                alt="res-img"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="font-bold">{avgRating}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    );
};

// Higher Order Functions- Pure functions
// not change the input it's use for enhancing the functions

// input - RestaurantCard => output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="text-xs absolute bg-gray-700 text-white mt-0 mx-2 py-1 px-2 rounded-md">BEST FOOD</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;