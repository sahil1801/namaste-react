import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

export const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-4 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="p-1">
              <span className="font-medium">{item.card.info.name}</span>
            </div>
            <div className="pb-3">
              <span className="font-normal"> - ₹ {item.card.info.price}</span>
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className=" mx-11 my-[4.5rem] bg-slate-800 text-lime-300 rounded-lg p-2"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
