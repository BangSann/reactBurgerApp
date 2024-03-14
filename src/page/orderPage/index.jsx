import Header from "./header";
import IngredientPicker from "./ingredientPicker";
import { Routes, useLocation } from "react-router-dom";
import Display from "./display";
import { useEffect, useState } from "react";
import OrderList from "./orderList";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const OrderPage = () => {
  const allIngredient = [
    {
      nama: "Cheese",
      harga: 5000,
    },
    {
      nama: "Lettuce",
      harga: 1000,
    },
    {
      nama: "Tomato",
      harga: 2500,
    },
    {
      nama: "Pickles",
      harga: 2500,
    },
    {
      nama: "Meat",
      harga: 14000,
    },
    {
      nama: "Mayo",
      harga: 4000,
    },
    {
      nama: "Sauce",
      harga: 4000,
    },
  ];

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const selectIngredient = (items) => {
    selectedIngredients.length !== 10 ? setSelectedIngredients([...selectedIngredients, items]) : ''; 
  };
  function unSelectIngredient(indexRemove) {
    setSelectedIngredients(prevValues => {
      return prevValues.filter((_, index) => index !== indexRemove);
    });
  }

  const [isdone , setIsDone] = useState(false)
  const location = useLocation()
  useEffect(()=>{
    setIsDone(new URLSearchParams(location.search).get("done"))
  },location)

  if (isdone) return (
    <OrderList/>
  )

  return (
    <div class="bg-green-100 h-[100vh] flex justify-center items-center">
      <div class="relative flex flex-col bg-white w-[80%] h-[80%] rounded-lg shadow-md">
        <Header selectedIngredients={selectedIngredients} reset={() => setSelectedIngredients([])} />
        <Display ingredients={selectedIngredients} unSelectIngredient={(index)=>unSelectIngredient(index)}/>
        <section class="absolute bottom-4 w-full">
          <div class="flex gap-4 justify-center ">
            {allIngredient.map((ingredient) => (
              <IngredientPicker
                nama={ingredient.nama}
                harga={ingredient.harga}
                selectIngredient={(items) => selectIngredient(items)}
                selectedIngredient={selectedIngredients}
              />
            ))}
          </div>
        </section>
      </div>
    <div className="absolute bottom-2">
      <a href="./">
        <button class="secondary px-3 py-2 rounded-lg">Back To Home</button>
      </a>
    </div>
    </div>
    
  );
};

export default OrderPage;
