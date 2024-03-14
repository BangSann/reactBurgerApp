const Ingredients = ({ingredients,unSelectIngredient,index}) => {
    const Cheese =()=>{
        return (
            <div class="bg-yellow-400 rounded-md h-3 w-[60%]"></div>
        )
    }
    const Lettuce =()=>{
        return (
            <div class="bg-green-600 rounded-md h-3 w-[60%]"></div>
        )
    }
    const Meat =()=>{
        return (
            <div class="bg-red-800 rounded-md h-3 w-[60%]"></div>
        )
    }
    const Mayo =()=>{
        return (
            <div class="bg-yellow-200 rounded-md h-3 w-[60%]"></div>
        )
    }
    const Sauce =()=>{
        return (
            <div class="bg-red-600 rounded-md h-3 w-[60%]"></div>
        )
    }
    const Tomato =()=>{
        return (
            <div class="flex w-[60%] gap-2">
                <div class="bg-red-500 rounded-md h-3 w-[50%]"></div>
                <div class="bg-red-500 rounded-md h-3 w-[50%]"></div>
            </div>
        )
    }
    const Pickles =()=>{
        return (
            <div class="flex w-[60%] gap-2">
                <div class="bg-green-500 rounded-md h-3 w-[50%]"></div>
                <div class="bg-green-500 rounded-md h-3 w-[50%]"></div>
            </div>
        )
    }
    return ( 
        <div class="w-full flex justify-center cursor-pointer" onClick={()=>unSelectIngredient(index)}>
            {ingredients == "Cheese" ? <Cheese/> : ""}
            {ingredients == "Tomato" ? <Tomato/> : ""}
            {ingredients == "Lettuce" ? <Lettuce/> : ""}
            {ingredients == "Pickles" ? <Pickles/> : ""}
            {ingredients == "Meat" ? <Meat/> : ""}
            {ingredients == "Mayo" ? <Mayo/> : ""}
            {ingredients == "Sauce" ? <Sauce/> : ""}
        </div>
     );
}
 
export default Ingredients;