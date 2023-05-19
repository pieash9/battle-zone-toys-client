const ExcitingScenarios = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 relative">
          <div className="badge absolute -right-3 font-montserrat font-semibold -mt-4 h-8 px-5 badge-secondary">Top Selling</div>
            <img
              src="https://i.ibb.co/4Nb23rK/image.png"
              alt="Section 1"
              className="w-full md:pl-10 h-auto rounded-lg shadow-lg mb-8"
            />
            
            <img
              src="https://i.ibb.co/cTfPVvT/image.png"
              alt=""
              className="absolute rounded -top-16 left-0 w-32 h-auto md:w-40 lg:w-48"
            />
            <img
              src="https://i.ibb.co/Jrh2Tx2/image.png"
              alt=""
              className="absolute rounded  md:-bottom-8 -right-10 w-32 h-auto md:w-40 lg:w-48"
            />
          </div>

          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              Exciting Battle Toys
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Immerse yourself in thrilling battles with our wide range of
              action figures and play sets. Create epic battles between heroes
              and villains, and let your imagination run wild!
            </p>
            {/* Add a button or link for more details */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcitingScenarios;
