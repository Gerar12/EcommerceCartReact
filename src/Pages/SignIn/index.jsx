import Layout from "../../Layout";
import { useState, useContext } from "react";
import { EcommerContext } from "../../EcommerContext";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const SignIn = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const { acount, setAcount, setLogin } = useContext(EcommerContext);
  const [inputUserName, setInputUserName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassWord, setInputPassWord] = useState("");
  const [spiner, setSpiner] = useState(false);
  const [messegen, setMessegen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setSpiner(true);

    setTimeout(() => {
      setSpiner(false);
      if (showRegister) {
        if (!inputUserName || !inputEmail || !inputPassWord) {
          setMessegen(true);
          return;
        }
        setMessegen(false);
        const datsUser = {
          userName: inputUserName,
          userEmail: inputEmail,
          userPassWord: inputPassWord,
        };

        setShowRegister(false);
        setAcount(datsUser);
        console.log(acount);
        e.target.reset();
        return;
      } else {
        if (!Object.keys(acount).length) {
          setMessegen(true);
          return;
        }

        setMessegen(true);
        const { userName, userPassWord } = acount;
        if (inputUserName === userName && inputPassWord === userPassWord) {
          setLogin(true);
          navigate("/");
        } else {
          return;
        }
      }
    }, 3000);
  };

  return (
    <Layout>
      <div className=" mt-40 flex items-center justify-center ">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-5 text-center text-white">
            {showRegister ? (
              <>
                <span className="text-blue-300">Sign</span> Up
              </>
            ) : (
              <>
                <span className="text-blue-300">Sign</span> In
              </>
            )}
          </h2>
          <form onSubmit={handleLogin}>
            {messegen ? (
              <p className="text-center mb-5 p-2 font-bold bg-red-400 rounded-md text-white">
                Login failed
              </p>
            ) : null}
            <div className="mb-4 relative">
              <FaUserAlt className="absolute top-3 left-3 text-blue-300 z-10" />
              <input
                type="text"
                className="pl-10 pr-2 py-2 w-full border rounded-md bg-gray-700 text-white placeholder-gray-500 focus:bg-gray-600"
                placeholder="Username"
                onChange={(e) => {
                  setInputUserName(e.target.value);
                }}
                disabled={spiner}
              />
            </div>

            {showRegister && (
              <div className="mb-4 relative">
                <FaEnvelope className="absolute top-3 left-3 text-blue-300 z-10" />
                <input
                  type="email"
                  className="pl-10 pr-2 py-2 w-full border rounded-md bg-gray-700 text-white placeholder-gray-500 focus:bg-gray-600"
                  placeholder="Email"
                  onChange={(e) => {
                    setInputEmail(e.target.value);
                  }}
                  disabled={spiner}
                />
              </div>
            )}

            <div className="mb-6 relative">
              <FaLock className="absolute top-3 left-3 text-blue-300" />
              <input
                type="password"
                className="pl-10 pr-2 py-2 w-full border rounded-md bg-gray-700 text-white placeholder-gray-500 focus:bg-gray-600"
                placeholder="Password"
                onChange={(e) => {
                  setInputPassWord(e.target.value);
                }}
                disabled={spiner}
              />
            </div>

            {!spiner ? (
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {showRegister ? "Register" : "Login"}
              </button>
            ) : (
              <div className="flex justify-center">
                <PulseLoader color="white" />
              </div>
            )}
          </form>

          <button
            className="w-full mt-4 font-extralight text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2  focus:ring-opacity-50"
            onClick={() => {
              setMessegen(false);
              setShowRegister(!showRegister);
            }}
          >
            {spiner
              ? "validando..."
              : showRegister
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
