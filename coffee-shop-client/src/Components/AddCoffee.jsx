import React from "react";
import Swal from "sweetalert2";
// import formBg from "../../public/11.png";

// const fromBg = <img src={"../../public/11.png"} alt="" />;

const AddCoffee = () => {
  const handleAddForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const price = form.price.value;
    const photo = form.photo.value;
    console.log(name, chef, supplier, taste, category, price, photo);
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "successfully coffee added!",
            icon: "success",
            draggable: true,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
        console.log("after post", data);
      });

    // console.log(formData.entries());
  };
  return (
    <div className="bg-[url(../../public/11.png)] bg-cover bg-center py-32">
      <h1 className="md:text-[45px] font-normal text-center text-black">
        Add New Coffee
      </h1>
      <p className="text-base text-center lg:w-[820px] mx-auto text-black">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddForm}>
        <div className="w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset     ">
              <label className="label text-black">Name</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="name"
                name="name"
              />
            </fieldset>
            <fieldset className="fieldset     ">
              <label className="label text-black">Chef</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="chef"
                name="chef"
              />
            </fieldset>
            <fieldset className="fieldset     ">
              <label className="label text-black">Supplier</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="supplier"
                name="supplier"
              />
            </fieldset>
            <fieldset className="fieldset    ">
              <label className="label text-black">Taste</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="taste"
                name="taste"
              />
            </fieldset>
            <fieldset className="fieldset    ">
              <label className="label text-black">Category</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="category"
                name="category"
              />
            </fieldset>
            <fieldset className="fieldset   ">
              <label className="label text-black">Price</label>
              <input
                type="text"
                className="input md:w-full"
                placeholder="price"
                name="price"
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
              />
            </fieldset>
          </div>
          <button className="btn md:w-full">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
