const Header = ({ selectedIngredients, reset }) => {
  const totalHarga = () => {
    const ingredientPrice = selectedIngredients.map((item) => {
      return item.harga;
    });
    return ingredientPrice.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };

  return (
    <section class="flex justify-between p-5">
      <div>
        <h1>
          Total : Rp.
          <span>{totalHarga()}</span>
        </h1>
      </div>
      <div class="flex gap-3">
        <a href="./order?done=true">
          <button
            class={`p-2 rounded ${
              selectedIngredients.length == 0 ? "btn-disabled" : "primary"
            }`}
          >
            Order Burger
          </button>
        </a>
        <button
          class={`p-2 bg-red-500 text-white rounded border hover:bg-white hover:text-red-500 hover:border hover:border-red-500 ${
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
