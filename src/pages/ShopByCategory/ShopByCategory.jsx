import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3 text-blue-500 text-center">
          Choose your favorite category 
        </h2>
        <p className="text-gray-500 md:w-2/3 mx-auto">
        Find your perfect action figure! Explore diverse categories and choose from a wide range of characters to ignite your imagination and create epic adventures.
        </p>
      </div>
      <Tabs>
        <TabList className="tabs mx-auto w-fit tabs-boxed bg-blue-500 ">
          <Tab className="tab tab-lg text-white">Marvel</Tab>
          <Tab className="tab tab-lg text-white">Avengers</Tab>
          <Tab className="tab tab-lg text-white">Star Wars</Tab>
        </TabList>

        <TabPanel>
          <h2>Marvel</h2>
        </TabPanel>

        <TabPanel>
          <h2>Avengers</h2>
        </TabPanel>

        <TabPanel>
          <h2>Star Wars</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
