import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyTableRow from "./MyToyTableRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import LoadingSpinner from "../Shared/LoadingSpinner";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  console.log(sort);

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
        setIsLoading(true);
        fetch(`http://localhost:5000/removeAToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setIsLoading(false);
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleSelectChange = (e) => {
    setSort(e.target.value);
  };

  //? load logged  user data
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/myToys/${user?.email}?sort=${sort}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setMyToys(data);
      });
  }, [sort]);

  return (
    <div>
      <Helmet>
        <title>Battle Zone Toys | My Toys</title>
      </Helmet>
      <h3 className="text-3xl text-blue-500 my-7 text-center font-semibold">
        My Toys
      </h3>

      {/* sorted option */}
      <div className="my-5">
        <select
          onChange={handleSelectChange}
          className="input-form w-40"
          defaultValue="Sorted By"
          required
        >
          <option disabled>Sorted By</option>
          <option value="-1">Date</option>
          <option value="1">Default</option>
        </select>
      </div>

      {/* table */}
      <div className="overflow-x-auto w-full mb-16">
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
            {isLoading ? (
              <tr>
                <td colSpan="7" className="text-center">
                  <LoadingSpinner />
                </td>
              </tr>
            ) : null}
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
