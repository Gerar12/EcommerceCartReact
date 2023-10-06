import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EcommerContext } from "../../EcommerContext";
import { FaUser, FaEnvelope, FaKey } from "react-icons/fa";
import PulseLoader from "react-spinners/PulseLoader";

const MyAccount = () => {
  const { login, setLogin, acount, setAcount } = useContext(EcommerContext);
  const navigate = useNavigate();
  const { userName, userEmail, userPassWord } = acount;
  const [spiner, setSpiner] = useState(false);
  const [messegen, setMessegen] = useState(false);

  const [inputUserName, setInputUserName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassWord, setInputPassWord] = useState("");
  const [modoEdit, setModoEdit] = useState(false);
  console.log(inputUserName);
  console.log(inputEmail);
  console.log(inputPassWord);

  useEffect(() => {
    if (!login) {
      navigate("/sign-in");
    }
  }, [login, navigate]);

  const hanldeLogOut = () => {
    setSpiner(true);
    setTimeout(() => {
      setSpiner(false);
      setLogin(false);
    }, 3000);
  };

  const handleSaveEditAccount = () => {
    if (!inputUserName.trim() || !inputEmail.trim() || !inputPassWord.trim()) {
      setMessegen(true);
      return;
    }

    console.log("Save edit 🎉🎉");
    setInputUserName(userName);
    setInputPassWord(userEmail);
    setInputEmail(userPassWord);

    const editAcount = {
      userName: inputUserName,
      userEmail: inputEmail,
      userPassWord: inputPassWord,
    };

    setAcount(editAcount);
    setModoEdit(false);
  };
  return (
    <div className="mt-40 flex justify-center items-center">
      <div className="bg-gray-800 p-4 md:p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4 text-blue-400 text-center">
          My Account
        </h1>

        <div className="flex items-center mb-4">
          <FaUser className="mr-2 text-blue-400" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-blue-300 mb-2">
              {modoEdit ? userName : `User Name: ${userName}`}
            </label>
            {modoEdit && (
              <input
                onChange={(e) => setInputUserName(e.target.value)}
                placeholder="New Name"
                type="text"
                className="w-full p-2 border bg-gray-700 text-blue-300 border-blue-500 rounded"
              />
            )}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <FaEnvelope className="mr-2 text-blue-400" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-blue-300 mb-2">
              {modoEdit ? userEmail : `Email: ${userEmail}`}
            </label>
            {modoEdit && (
              <input
                onChange={(e) => setInputEmail(e.target.value)}
                type="text"
                className="w-full p-2 border bg-gray-700 text-blue-300 border-blue-500 rounded"
                placeholder="New Email"
              />
            )}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <FaKey className="mr-2 text-blue-400" />
          <div className="flex-1">
            <label className="block text-sm font-medium text-blue-300 mb-2">
              {modoEdit ? "Password:" : `Password: ${userPassWord}`}
            </label>
            {modoEdit && (
              <input
                onChange={(e) => setInputPassWord(e.target.value)}
                type="password"
                placeholder="New Password"
                className="w-full p-2 border bg-gray-700 text-blue-300 border-blue-500 rounded"
              />
            )}
          </div>
        </div>

        {!spiner ? (
          <>
            {!modoEdit ? (
              <div className="mt-6 flex justify-between items-center">
                <button
                  className="bg-transparent text-blue-500 hover:bg-blue-500 hover:text-gray-800 border border-blue-500 px-4 py-2 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                  onClick={() => setModoEdit(true)}
                >
                  Edit account
                </button>

                <button
                  className="bg-transparent text-red-500 hover:bg-red-500 hover:text-gray-800 border border-red-500 px-4 py-2 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
                  onClick={hanldeLogOut}
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 px-6 py-2 rounded-md shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                  onClick={handleSaveEditAccount}
                >
                  Save Changes
                </button>
              </div>
            )}
            {messegen ? (
              <p className="mt-5 text-center mb-5 p-2 font-bold bg-red-400 rounded-md text-white">
                All fields are required
              </p>
            ) : null}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center mt-5">
            <PulseLoader color="white" />
            <p className="mt-5">Logging out...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
