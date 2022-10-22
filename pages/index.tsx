import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";

type Props = {
  product: string[];
};

const Home = ({ product }: Props) => {
  const [searchField, setSearchField] = useState<string>("");

  const changeSearch = (e: any) => {
    setSearchField(e.target.value);
  };
  const search = (data: any) => {
    return data.filter(
      (products: any) =>
        products.title.toLowerCase().includes(searchField.toLowerCase()) ||
        products.category.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header searchField={searchField} changeSearch={changeSearch} />
      </main>

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <Products product={search(product)} />
      </main>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const resp = await fetch("https://fakestoreapi.com/products");
  const product = await resp.json();

  return {
    props: {
      product,
    },
  };
}

export default Home;
