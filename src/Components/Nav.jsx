import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      className={
        "flex bg-white z-[1000] w-full absolute justify-between items-center py-3 px-10 shadow"
      }
    >
      <h1 className={"text-2xl "}>Reacter</h1>
      <ul className={"flex space-x-5"}>
        <li>
          <Link to={"/"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
