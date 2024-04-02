const Ingredients = ({ ingredients, unSelectIngredient, index }) => {
  const Cheese = () => {
    return <div className="bg-yellow-400 rounded-md h-3 w-[60%]"></div>;
  };
  const Lettuce = () => {
    return <div className="bg-green-600 rounded-md h-3 w-[60%]"></div>;
  };
  const Meat = () => {
    return <div className="bg-red-800 rounded-md h-3 w-[60%]"></div>;
  };
  const Mayo = () => {
    return <div className="bg-yellow-200 rounded-md h-3 w-[60%]"></div>;
  };
  const Sauce = () => {
    return <div className="bg-red-600 rounded-md h-3 w-[60%]"></div>;
  };
  const Tomato = () => {
    return (
      <div className="flex w-[60%] gap-2">
        <div className="bg-red-500 rounded-md h-3 w-[50%]"></div>
        <div className="bg-red-500 rounded-md h-3 w-[50%]"></div>
      </div>
    );
  };
  const Pickles = () => {
    return (
      <div className="flex w-[60%] gap-2">
        <div className="bg-green-500 rounded-md h-3 w-[50%]"></div>
        <div className="bg-green-500 rounded-md h-3 w-[50%]"></div>
      </div>
    );
  };
  return (
    <div
      className="w-full flex justify-center cursor-pointer"
      onClick={() => unSelectIngredient(index)}
    >
      {ingredients == "Cheese" ? <Cheese /> : ""}
      {ingredients == "Tomato" ? <Tomato /> : ""}
      {ingredients == "Lettuce" ? <Lettuce /> : ""}
      {ingredients == "Pickles" ? <Pickles /> : ""}
      {ingredients == "Meat" ? <Meat /> : ""}
      {ingredients == "Mayo" ? <Mayo /> : ""}
      {ingredients == "Sauce" ? <Sauce /> : ""}
    </div>
  );
};

export default Ingredients;
