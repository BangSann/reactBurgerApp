import Header from "./header";
import IngredientPicker from "./ingredientPicker";
import Display from "./display";
import OrderList from "./orderList";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedIngredients,unSelectIngredients,resetIngredients } from "../../store/slice/selectedIngredients.slice";

const OrderPage = () => {
  const allIngredient = useSelector((state) => state.ingredients.value);
  const selectedIngredients = useSelector((state) => state.selectedIngredient.value);
  // console.log(selectedIngredients);


  const dispatch = useDispatch();
  const selectIngredient = (items) => {
    selectedIngredients.length !== 10
      ? dispatch(setSelectedIngredients(items))
      : "";
      
  };
  function unSelectIngredient(indexRemove) {
    dispatch(unSelectIngredients(indexRemove))
  }


  return (
    <div className="bg-green-100 h-[100vh] flex justify-center items-center">
      <div className="relative flex flex-col bg-white w-[80%] h-[80%] rounded-lg shadow-md">
        <Header
          selectedIngredients={selectedIngredients}
          reset={() => dispatch(resetIngredients([]))}
        />
        <Display
          ingredients={selectedIngredients}
          unSelectIngredient={(index) => unSelectIngredient(index)}
        />
        <section className="absolute bottom-4 w-full">
          <div className="flex gap-4 justify-center ">
            {allIngredient.map((ingredient, i) => (
              <IngredientPicker
                key={i}
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
          <button className="secondary px-3 py-2 rounded-lg">
            Back To Home
          </button>
        </a>
      </div>

      <OrderList/>
    </div>
  );
};

export default OrderPage;
