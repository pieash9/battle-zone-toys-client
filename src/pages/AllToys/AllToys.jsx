import { useLoaderData } from "react-router-dom";
import TableRow from "./TableRow";

const AllToys = () => {
  const allToys = useLoaderData();
  const handleViewDetails =(id)=>{
    console.log(id)
  }

  return (
    <div>
      <h3 className="text-3xl text-blue-500 my-7 text-center font-semibold">
        All Toys
      </h3>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {allToys?.map((toy) => (
              <TableRow
                key={toy?._id}
                toy={toy}
                handleViewDetails={handleViewDetails}
              />
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
