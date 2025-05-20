import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { id } = useParams();
  const coffee = useLoaderData();
  console.log(coffee);
  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const upDatedCoffee = Object.fromEntries(formData.entries());
    console.log(upDatedCoffee);

    fetch(`http://localhost:5000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upDatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-[url(../../public/11.png)] bg-cover bg-center py-32">
      <h1 className="md:text-[45px] font-normal text-center text-black">
        Update Coffee
      </h1>
      <p className="text-base text-center lg:w-[820px] mx-auto text-black">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleUpdateForm}>
        <div className="w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset     ">
              <label className="label text-black">Name</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="name"
                name="name"
                defaultValue={coffee.name}
              />
            </fieldset>
            <fieldset className="fieldset     ">
              <label className="label text-black">Chef</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="chef"
                name="chef"
                defaultValue={coffee.chef}
              />
            </fieldset>
            <fieldset className="fieldset     ">
              <label className="label text-black">Supplier</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="supplier"
                name="supplier"
                defaultValue={coffee.supplier}
              />
            </fieldset>
            <fieldset className="fieldset    ">
              <label className="label text-black">Taste</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="taste"
                name="taste"
                defaultValue={coffee.taste}
              />
            </fieldset>
            <fieldset className="fieldset    ">
              <label className="label text-black">Category</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="category"
                name="category"
                defaultValue={coffee.category}
              />
            </fieldset>
            <fieldset className="fieldset   ">
              <label className="label text-black">Price</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="price"
                name="price"
                defaultValue={coffee.price}
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset    my-5 ">
              <label className="label text-black">Photo</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="Photo URL"
                name="photo"
                defaultValue={coffee.photo}
              />
            </fieldset>
          </div>
          <button className="btn md:w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
