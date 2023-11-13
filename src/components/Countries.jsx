import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    }, []);
  });
  return (
    <section className="mt-[30px] lg:mt-[50px] px-[5%] lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
      {countries.map((val, index) => (
        <div
          key={index}
          className="w-[300px] md:w-full shadow-lg rounded border mx-auto md:mx-0"
        >
          <img
            alt={val.name}
            src={val.flags.png}
            className="w-full h-[150px] xl:h-[200px]"
          />
          <article className="p-2">
            <h1 className="font-bold">{val.name}</h1>
            <span className="text-gray-500">{val.capital || "Not Found"}</span>
            <Link
              to={"/" + index}
              replace="true"
              className="block w-fit text-white px-2 py-1 mt-2 bg-blue-700 rounded"
            >
              Show more
            </Link>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Countries;
