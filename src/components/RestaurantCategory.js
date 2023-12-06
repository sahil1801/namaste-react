import { ItemList } from "./ItemList";
const RestaurantCategory = ({data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow-lg p-4 ">
                <div 
                    className="flex justify-between cursor-pointer" 
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data?.itemCards}/>}
            </div>
            {/* Accordion Body */}
        </div>
    );
};

export default RestaurantCategory