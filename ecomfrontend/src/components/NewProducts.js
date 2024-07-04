import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/Asset 1-100.jpg",
    title: "T-Shirt",
    desc: "Dry_fit RED",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/Asset 2-100.jpg",
    title: "T-Shirt",
    desc: "Dry_fit GRY",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/Asset 4-100.jpg",
    title: "T-Shirt",
    desc: "Dry_fit Black",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/Asset 5-100.jpg",
    title: "T-Shirt",
    desc: "Dry_fit NAVY",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/Asset 6-100.jpg",
    title: "T-Shirt",
    desc: "Dry_fit - Classic White",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/hoodies front-100.jpg",
    title: "Classic Hoodie",
    desc: "WARM AND SOFT",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/b f h-100.jpg",
    title: "Classic Hoodie",
    desc: "WARM AND SOFT",
    rating: 4,
    price: "120.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
