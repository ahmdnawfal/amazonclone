import { StarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

type Props = {
  key: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  id: number;
};

const Product = ({ id, title, price, description, category, image }: Props) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const dispatch = useDispatch();

  const [rating, setRating] = useState<number>(0);
  const [prime, setPrime] = useState<boolean>(false);

  const addItemToCart = () => {
    const products: any = {
      prime,
      rating,
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(products));
  };

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <img src={image} alt="" className="h-[200px] w-[200px] object-contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(rating)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <NumericFormat displayType="text" value={price} prefix={"$"} />
      </div>
      {prime && (
        <div className="flex space-x-2 items-center -mt-5">
          <img
            className="w-12"
            src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemToCart} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
