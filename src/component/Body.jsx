import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";
function Body() {
  const [inputValue, setInputvalue] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${inputValue}&lang=en&max=5&apikey=e154dadfff71a944226f963b661fdd31`
      )
      .then((res) => {
        console.log(res.data.articles);
        setNewsData(res.data.articles);

        setLoading(true);
      })
      .catch(() => console.log("error"));
  };

  return (
    <>
      <Navbar
        inputValue={inputValue}
        setvalue={setInputvalue}
        getdata={getData}
      />
      {loading ? (
        <div className="bg-neutral-800 mt-[7rem] p-2 w-[100vw] h-[100-vh] md:grid md:grid-cols-2 md:mt-[4rem]  md:w-full md:pt-5 ">
          {newsData.map((val, i) => (
            <div
              key={i}
              className="p-2 bg-neutral-700/20 rounded-xl mb-2 mt-1 md:m-1 md:bg-black"
            >
              <img
                src={val.image}
                alt=""
                className="[border-radius:10px_10px_0px_0px] w-full"
              />
              <div className=" p-3 bg-black [border-radius:0px_0px_10px_10px]  ">
                <h1 className="text-2xl text-white font bold shadow-xl shadow-black font-serif ">
                  {val.title}
                </h1>
                <p className="text-white pt-2 pb-2 md:hidden">
                  {val.description}
                </p>
                <p className="text-white p-2">
                  {val.description.length > 250
                    ? val.description.slice(0, 200) + " . . . "
                    : val.description}
                </p>
                <p className="text-gray-300/30">
                  {val.source.name} ({val.source.country})
                </p>
                <p className="text-gray-300/50 pt-1">{val.publishedAt}</p>
                <a href={val.url} className="text-blue-500">
                  Read more...
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[100vh]  bg-neutral-800">
          <p className="mt-[8rem] font-bold text-3xl text-neutral-500/50">
            Search News . . .
          </p>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Body;
