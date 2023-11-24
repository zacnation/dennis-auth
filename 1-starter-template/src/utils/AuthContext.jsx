import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../appwriteConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);

    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      console.log("SESSION:", response);
    } catch (error) {
      console.error("ERROR:", error);
    }

    setLoading(false);
  };
  const logoutUser = () => {};

  const registerUser = (userInfo) => {};

  const checkStatus = () => {};

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
