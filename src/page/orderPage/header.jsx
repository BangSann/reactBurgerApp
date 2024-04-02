import { showModal } from "../../store/slice/modal.slice";
import { useDispatch } from "react-redux";

const Header = ({ selectedIngredients, reset }) => {
  const totalHarga = () => {
    const ingredientPrice = selectedIngredients.map((item) => {
      return item.harga;
    });
    return ingredientPrice.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };

  const dispatch = useDispatch();

  return (
    <section className="flex justify-between p-5">
      <div>
        <h1>
          Total : Rp.
          <span>{totalHarga()}</span>
        </h1>
      </div>
      <div className="flex gap-3">
        <a>
          <button
            className={`p-2 rounded ${
              selectedIngredients.length == 0 ? "btn-disabled" : "primary"
            }`}
            onClick={() => dispatch(showModal())}
            disabled={selectedIngredients.length === 0 ? true : false}
          >
            Order Burger
          </button>
        </a>
        <button
          className={`p-2 bg-red-500 text-white rounded border hover:bg-white hover:text-red-500 hover:border hover:border-red-500 ${
            selectedIngredients.length == 0 ? "hidden" : ""
          }`}
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Header;
