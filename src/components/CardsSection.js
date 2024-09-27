import Card, { promotedCard } from "./Card";
import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import resList2 from "../utils/mockData2";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";

const CardsSection = () => {
  const { userName, userAge, setNameState } = useContext(userContext); //context

  const [searchFilter, setSearchFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tempName, setTempName] = useState("");

  useEffect(() => {
    // console.log("useEffect called");
    // fetchedData();
    localFetchedData();
  }, []);
  const PromotedCardComponent = promotedCard(Card);

  const filterPromotedRes = () => {
    const onlyPromotedCards = resList2.filter(
      (resturants) => resturants.info.promoted == true
    );
    // setPromotedCards(onlyPromotedCards);
    setSearchFilter(onlyPromotedCards);
  };

  // 2nd way if api not working------------
  const localFetchedData = () => {
    // creating api problems as above api broke in between by itself
    setTimeout(() => {
      //also updating the list for searching opertions (main rendered list)
      setSearchFilter(resList2);
    }, 800);
  };

  // return this
  if (searchFilter.length === 0) {
    return <ShimmerUI />;
  }

  // else this
  return (
    <div className="mt-2">
      <div className="flex justify-between">
        <button
          className="bg-blue-300 text-black border border-black rounded-lg px-4 mb-2"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.4
            );
            setSearchFilter(filteredList);
          }}
        >
          Top Rated Resturents
        </button>

        <div>
          <button
            className="bg-blue-300 text-black border border-black rounded-lg px-4 mb-2"
            onClick={filterPromotedRes}
          >
            Promoted Resturants
          </button>
        </div>

        <div className="">
          <input
            className="border border-black mr-1"
            data-testid = "inputSearch"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-300 text-black border border-black rounded-lg px-4 "

            onClick={() => {
              const filterOperation = resList2.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setSearchFilter(filterOperation);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <label className="mr-2">User Name: </label>
          <input
            className="border border-black p-1"
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <button
            className="border border-black bg-blue-600 text-white rounded-lg px-2 py-1 ml-1"
            onClick={() => setNameState(tempName)}
          >
            Done
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4">
        {searchFilter.map((resturent) => (
          <Link to={`/restInfo/${resturent.info.id}`} key={resturent.info.id}>
            {resturent.info.promoted ? (
              <PromotedCardComponent resData={resturent} />
            ) : (
              <Card resData={resturent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
