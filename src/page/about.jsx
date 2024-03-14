import Button from "../component/button";

const AboutUs = () => {
  return (
    <section class="flex flex-col justify-center items-center h-[100vh] gap-10 bg-green-100">
      <h1 class="text-5xl font-bold">About Us</h1>
      <div class="relative mx-auto max-w-[80%] flex shadow-md bg-white rounded-lg ">
        <div class="flex justify-center items-center w-[50%]">
          <img src="./img/burger.jpg" width={"400px"} />
        </div>
        <div class="w-[50%] flex flex-col items-center justify-center p-6 gap-5">
          <h1 class="text-2xl font-bold w-full">Burger Queen</h1>
          <p>
            A burger is a popular food item consisting of a cooked patty of
            ground meat, usually beef, placed between two slices of bread
            (typically a bun). It is often served with various toppings such as
            lettuce, tomato, onions, pickles, cheese, and condiments like
            ketchup, mustard, and mayonnaise. Burgers are commonly grilled,
            fried, or broiled, and they are enjoyed worldwide for their savory
            taste and versatility.
          </p>
          <div>
            <a href="./">
              <Button childern={"Back To Home"} variant="primary" link={"./"} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
