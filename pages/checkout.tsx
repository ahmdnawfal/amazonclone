import { useSession } from "next-auth/react";
import React from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct/CheckoutProduct";
import Header from "../components/Header/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

type Props = {
  searchField: any;
  changeSearch: any;
};

const checkout = ({ searchField, changeSearch }: Props) => {
  const items: any = useSelector(selectItems);
  const total: any = useSelector(selectTotal);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header searchField={searchField} changeSearch={changeSearch} />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}

        <div className="flex flex-grow flex-col m-5 p-5 shadow-sm space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0 ? "Your cart is empty" : "Shopping cart"}
          </h1>
          {items.map((item: any, i: any) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              prime={item.prime}
            />
          ))}
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items): {""}
                <span className="font-bold">
                  <NumericFormat
                    displayType="text"
                    value={total}
                    prefix={"$"}
                  />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Process to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
