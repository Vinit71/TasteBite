import { IMG_URL } from "../utils/constants";
//Accordian List
const ItemList = (props) => {
  const { foods } = props;
  return (
    <>
      <div className="flex flex-col">
        {foods.map((food, index) => (
          
          <div
            key={index}
            className="flex justify-between items-center px-4 py-2 border-b"
          >
            <span className="flex-1 font-medium">{food.name}</span>

            <span className="flex-1 text-center text-gray-600">
              {food.rating}
            </span>

            <span className="flex-1 text-right font-semibold mr-4">
              {food.price}
            </span>

            {/* Image Section with 'Add' Button */}
            <div className="w-16 h-16 ml-4 relative">
              {food.cloudinaryImageId ? (
                <img
                  src={IMG_URL + food.cloudinaryImageId}
                  alt={food.name}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div className="bg-pink-300 w-full h-full rounded"></div>
              )}

              {/* Add Button */}
              <button className="absolute bottom-0 left-0 w-full border border-green-500 bg-slate-50 text-green-600 text-sm rounded-b hover:bg-green-600 hover:text-white">
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
