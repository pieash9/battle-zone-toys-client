import TableRow from "./TableRow";
import { RiSearch2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allToys`)
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, [searchTerm]);

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchByToyName/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setToysData(data));
  };

  const handleViewDetails = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Helmet>
        <title>Battle Zone Toys | All Toys</title>
      </Helmet>
      <h3 className="text-3xl text-blue-500 my-7 text-center font-semibold">
        All Toys
      </h3>

      {/* Search box */}
      <div className="flex items-center justify-center mb-10">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus w-full md:w-72 h-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 h-full"
        >
          <RiSearch2Line className="text-xl" />
        </button>
      </div>

      {/* table */}

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="active">
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
            {toysData?.map((toy,i) => (
              <TableRow
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

export default AllToys;
