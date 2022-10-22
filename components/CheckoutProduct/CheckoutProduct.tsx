import React, { useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../slices/basketSlice";

type Props = {
  id: number;
  title: string;
  rating: string;
  price: number;
  description: string;
  category: string;
  image: string;
  prime: string;
};

const CheckoutProduct = ({
  id,
  title,
  rating,
  price,
  description,
  image,
  prime,
}: Props) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    const products: any = { id };
    dispatch(removeFromBasket(products));
  };

  return (
    <div className="grid grid-cols-5">
      <img src={image} alt="" className="h-[200px] w-[200px] object-contain" />

      {/* mid */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs line-clamp-3 my-2">{description}</p>
        <NumericFormat displayType="text" value={price} prefix={"$"} />
        {prime && (
          <div className="flex space-x-2 items-center">
            <img
              className="w-12"
              src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={removeItemFromCart} className="button">
          Remove item
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
