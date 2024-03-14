import { Link } from "react-router-dom";

const Button = ({childern,link,variant="secondary"}) => {
    return (   
        <section>
            <Link to={link}>
                <button class={`p-2 rounded-lg w-40 border ${variant}`}>{childern}</button>
            </Link>
            
        </section>
      );
}
 
export default Button;