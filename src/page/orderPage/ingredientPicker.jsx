const IngredientPicker = ({
  nama,
  harga,
  selectIngredient,
  selectedIngredient,
}) => {
  return (
    <section>
      <div
        class={`px-5 py-2 text-center rounded-xl cursor-pointer ${
          selectedIngredient.length == 10 ? "btn-disabled" : "primary"
        }`}
        onClick={() => selectIngredient({ nama: nama, harga: harga })}
      >
        <p>{nama}</p>
        <p>{harga}</p>
      </div>
    </section>
  );
};

export default IngredientPicker;
