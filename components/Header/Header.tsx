import React, { useState } from "react";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/dist/client/link";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

type Props = {
  searchField: any;
  changeSearch: any;
};

const Header = ({ searchField, changeSearch }: Props) => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);

  const handleSignInSignOut = () => {
    !session ? signIn() : signOut();
  };

  return (
    <header>
      {/* top header */}
      <div className="flex items-center bg-amazon_blue py-2 flex-grow ">
        <Link href="/">
          <div className="mt-2 items-center flex-grow flex p-1 sm:flex-grow-0">
            <img
              className="w-[150px] h-[40px] object-contain cursor-pointer"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </div>
        </Link>
        <div className="hidden md:flex text-white text-xs items-center px-1 mr-5 cursor-pointer link">
          <MapPinIcon className="h-6" />
          <div className="block">
            <p className="text-gray-400">Deliver to</p>
            <p className="font-bold md:text-sm">Indonesia</p>
          </div>
        </div>
        {/* search */}
        <div className="hidden md:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-600">
          <input
            value={searchField}
            onChange={changeSearch}
            type="text"
            className="p-2 flex-grow w-6 h-full flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link hidden md:block">
            <p>English</p>
            <img
              className="h-4 object-contain mt-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1280px-Flag_of_the_United_States.png"
              alt=""
            />
          </div>
          <div onClick={handleSignInSignOut} className="link">
            <p className="font-bold text-sm sm:text-xs sm:font-normal">
              {session ? `Hello ${session?.user?.name}` : "Sign In"}
            </p>
            <p className="hidden md:block font-bold md:text-sm">
              Account & Lists
            </p>
          </div>
          <div className="link hidden md:block">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <Link href="/checkout">
            <div className="link relative flex items-center">
              <span className="absolute top-0 right-0 mr-3 md:mr-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold items-center">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:block font-bold md:text-sm mt-2">Cart</p>
            </div>
          </Link>
        </div>
      </div>

      {/* bottom header */}
      <div className="flex items-center space-x-3 p-2 pl-5 bg-amazon_blue-light text-white text-sm">
        <p className="flex link items-center font-bold hover:text-gray-300">
          <Bars2Icon className="h-6 mr-1" /> All
        </p>
        <p className="link text-sm font-semibold hover:text-gray-300">
          Today's <span className="hidden md:inline">Deals</span>
        </p>
        <p className="link text-sm font-semibold hover:text-gray-300">
          Buy <span className="hidden md:inline">Again</span>
        </p>
        <p className="link text-sm font-semibold hover:text-gray-300">
          Customer <span className="hidden md:inline">Service</span>
        </p>
        <p className="link text-sm font-semibold hover:text-gray-300">
          Gift <span className="hidden md:inline">Cards</span>
        </p>
        <p className="link text-sm font-semibold hover:text-gray-300">
          Registry
        </p>
        <p className="link text-sm font-semibold hover:text-gray-300">Sell</p>
      </div>
    </header>
  );
};

export default Header;
