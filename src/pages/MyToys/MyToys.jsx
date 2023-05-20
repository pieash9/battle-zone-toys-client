import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyTableRow from "./MyToyTableRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  //? Delete a toy item
  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/removeAToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };

  //? load logged  user data
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [myToys]);

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
            <tr className="active">
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
            {myToys?.map((toy, i) => (
              <MyToyTableRow
                key={toy?._id}
                toy={toy}
                i={i}
                handleDeleteToy={handleDeleteToy}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
