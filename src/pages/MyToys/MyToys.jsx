import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyTableRow from "./MyToyTableRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handleViewDetails = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h3 className="text-3xl text-blue-500 my-7 text-center font-semibold">
        My Toys
      </h3>

      {/* table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys?.map((toy,i) => (
              <MyToyTableRow
                key={toy?._id}
                toy={toy}
                i={i}
                handleViewDetails={handleViewDetails}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
