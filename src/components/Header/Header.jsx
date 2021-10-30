import { NavLink } from "react-router-dom";
import "./Header.css";



const Header = (props) => {
  return (
    <header className="header">
      <img className="img" src="https://yt3.ggpht.com/a/AATXAJyiEwPzS8NN9M4GqSpDIuKHjVFZEMywyn3rYw=s900-c-k-c0xffffffff-no-rj-mo"></img>
      <div className="header-name">North Pole</div>
      <div className='login'>
        {props.isAuth ? <div><span>Hello, {props.login} </span> <button onClick={props.logout}>Logout</button> </div> : <NavLink to={'/login'}> Login</NavLink>}
        </div>
    </header>
  );
};

export default Header;