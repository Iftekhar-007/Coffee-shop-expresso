import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffeedata = useLoaderData();
  const [coffeeData, setCoffeeData] = useState(initialCoffeedata);
  console.log(coffeeData);
  return (
    <div className="lg:w-[1440px] p-5 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {coffeeData.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffeeData={coffeeData}
            setCoffeeData={setCoffeeData}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
