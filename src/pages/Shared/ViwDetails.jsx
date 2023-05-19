

const ViwDetails = () => {
    return (
        <div>
            <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2">
              <img
                src="/images/section1.jpg"
                alt="Section 1"
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Exciting Battle Scenarios
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Immerse yourself in thrilling battles with our wide range of
                action figures and playsets. Create epic battles between heroes
                and villains, and let your imagination run wild!
              </p>
              {/* Add a button or link for more details */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-500 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/2">
              <img
                src="/images/section2.jpg"
                alt="Section 2"
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Collectible Figures
              </h2>
              <p className="text-lg text-white mb-8">
                Discover a vast collection of rare and limited edition action
                figures. From superheroes to movie characters, we have the
                finest selection of collectibles for every fan and collector.
              </p>
              {/* Add a button or link for more details */}
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ViwDetails;