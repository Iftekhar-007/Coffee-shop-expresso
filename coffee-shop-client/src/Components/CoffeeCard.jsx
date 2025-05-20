import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${coffee._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log(result);
            }
            console.log("after delete", data);
          });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        // console.log(result);
      }
    });
  };
  return (
    <div>
      <div className="card card-side flex flex-row items-center justify-around bg-base-100 shadow-sm">
        <div className="p-5">
          <figure>
            <img className="rounded-2xl" src={coffee.photo} alt="coffee" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">{coffee.name}</h2>
          <p>{coffee.chef}</p>
          <p>{coffee.price}</p>
        </div>
        <div className="card-actions pr-5">
          <div className="join join-vertical">
            <button className="btn join-item">view</button>
            <button className="btn join-item">Edit</button>
            <button
              onClick={() => handleDelete(coffee._id)}
              className="btn join-item"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
