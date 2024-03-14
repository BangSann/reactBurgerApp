import RotiTop from "./orderDisplay/roti";
import RotiBottom from "./orderDisplay/rotiBottom";
import Ingredients from "./orderDisplay/ingredients";

const Display = ({ingredients=[],unSelectIngredient}) => {
    return ( 
        <div class="flex flex-col gap-2  w-[50%] justify-center items-center mx-auto mb-5">
            <RotiTop/>
            {ingredients.reverse().map((ingredientsItem,index)=>(
                <Ingredients ingredients={ingredientsItem.nama} index={index} unSelectIngredient={(index)=>unSelectIngredient(index)}/>
            ))}
            <RotiBottom/>
        </div>
     );
}
 
export default Display;