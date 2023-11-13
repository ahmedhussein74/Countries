import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Country = () => {
  const { id } = useParams();
  const [load, setLoad] = useState(false);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
      setLoad(true);
    });
  }, []);
  return load ? (
    <section className="px-[5%] lg:px-[10%] my-[30px] lg:my-[100px] flex flex-col lg:flex-row justify-around lg:justify-between gap-[20px]">
      <img
        alt={countries[id].name}
        src={countries[id].flags.png}
        className="md:h-[250px] w-fit mx-auto lg:mx-0"
      />
      <div className="flex flex-col gap-[20px] text-[18px]">
        <h1 className="font-bold text-[30px]">{countries[id].name}</h1>
        <p>Capital: {countries[id].capital}</p>
        <p>Region: {countries[id].region}</p>
        <p>Population: {countries[id].population}</p>
        <p>Area: {countries[id].area} Km</p>
        <p>Currency: {countries[id].currencies[0].name}</p>
        <p>Borders:</p>
        <div className="w-full md:w-[400px] flex flex-wrap gap-[20px]">
          {countries[id].borders.map((e, index) => (
            <span key={index} className="p-2 border bg-stone-50 rounded shadow">
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default Country;
