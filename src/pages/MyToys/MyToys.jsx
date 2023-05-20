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

 
  return (
    <div>
      <h3 className="text-3xl text-blue-500 my-7 text-center font-semibold">
        My Toys
      </h3>

      {/* table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head  Price, available quantity, Detail description*/}
          <thead>
            <tr>
              <th>SL</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Detail description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys?.map((toy,i) => (
              <MyToyTableRow
                key={toy?._id}
                toy={toy}
                i={i}
               
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
