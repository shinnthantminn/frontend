const Register = () => {
  return (
    <div className=" flex justify-center items-center h-full">
      <div className={"shadow-lg w-[400px] px-5 py-5"}>
        <h1 className="text-center text-2xl ">Register</h1>
        <form>
          <div className="my-4">
            <label htmlFor="email" className="block mt-4">
              Enter username
            </label>
            <input
              type="text"
              autoComplete={"off"}
              className="form-input"
              name="email"
              id="email"
            />
          </div>

          <div className="my-4">
            <label htmlFor="email" className="block mt-4">
              Email address
            </label>
            <input
              type="text"
              autoComplete={"off"}
              className="form-input"
              name="email"
              id="email"
            />
          </div>

          <div className="my-4">
            <label htmlFor="password" className="block">
              Enter your password
            </label>
            <input
              type="text"
              className={"form-input"}
              name="password"
              id="password"
              autoComplete={"off"}
            />
          </div>

          <div className="mt-5">
            <button className={"w-full py-2 bg-blue-500 text-white rounded"}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
