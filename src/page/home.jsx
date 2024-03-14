import Button from "../component/button";

const Home = () => {
    const buttonItem = [
        {
          childern : "Order",
          varian : "primary",
          link : "./order"
        },
        {
          childern : "About us",
          varian : "secondary",
          link : "./aboutUs"
        },
        {
          childern : "Contact",
          varian : "secondary"
        }
      ]
  return (
    <>
      <section class="bg-green-600 flex flex-col justify-center items-center p-5 text-white">
        <h1 class="text-2xl">Welcome To Burger App</h1>
        <p class="mt-5 max-w-[70%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil quis iure corrupti nulla, quisquam aliquam quo alias voluptas delectus rem dicta voluptates perferendis porro quasi sit nesciunt ut quam!
        </p>
      </section>

      <section class="flex flex-col items-center justify-center gap-4 h-[calc(100vh-164px)]">
        {buttonItem.map((item) => (
          <Button childern={item.childern} link={item.link} variant={item.varian}/>
        ))}
      </section>
    </>
  );
};

export default Home;
