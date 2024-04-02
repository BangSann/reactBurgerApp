import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { hideModal } from "../../store/slice/modal.slice";
import { resetIngredients } from "../../store/slice/selectedIngredients.slice";
import { useEffect, useState } from "react";

const OrderList = () => {
  const dispatch = useDispatch();
  const modalIsshow = useSelector((state) => state.showModal.value);
  const [ingredientKlasifier, setIngredientKlasifier] = useState([{}]);
  const selectedIngredient = useSelector(
    (state) => state.selectedIngredient.value
  );

  const totalHarga = () => {
    const ingredientPrice = selectedIngredient.map((item) => {
      return item.harga;
    });
    return ingredientPrice.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };

  return (
    <section
      className={`w-full h-[100vh] bg-black bg-opacity-40 absolute ${
        modalIsshow ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div className="w-[50%] bg-white text-center relative px-4">
        <button
          className="absolute top-2 right-2"
          onClick={() => dispatch(hideModal())}
        >
          X
        </button>
        <h1 className="text-3xl font-semibold my-8">Your Price</h1>
        <table className="mx-auto w-full">
          <thead>
            <tr className="border-b-2">
              <th>Nama</th>
              <th>Jumlah</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody className="border-b-2">
            {selectedIngredient.map((items, i) => {
              return (
                <tr key={i}>
                  <td className="text-start">{items.nama}</td>
                  <td>1</td>
                  <td className="text-end">{items.harga}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full flex flex-col justify-center items-center gap-5 mb-3">
          <div className="w-[90%] flex justify-between items-center mt-5">
            <p>total</p>
            <p>{totalHarga()}</p>
          </div>
          <div className="w-[50%]">
            <button
              className="py-2 px-4 rounded-md bg-orange-400 text-white w-full"
              onClick={() => {
                dispatch(hideModal());
                dispatch(resetIngredients([]));
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
