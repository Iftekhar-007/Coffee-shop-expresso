import React from "react";
import { useLoaderData, useParams } from "react-router";

const CoffeeDetails = () => {
  const { id } = useParams();
  const coffee = useLoaderData();
  console.log(id);
  return (
    <div>
      <h1>details</h1>
      <h1>{coffee.name}</h1>
      <img src={coffee.photo} alt="" />
    </div>
  );
};

export default CoffeeDetails;
