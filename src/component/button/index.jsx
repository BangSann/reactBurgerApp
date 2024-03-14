const Button = ({childern,link,variant="secondary"}) => {
    return (   
        <section>
            <a href={link}>
                <button class={`p-2 rounded-lg w-40 border ${variant}`}>{childern}</button>
            </a>
        </section>
      );
}
 
export default Button;