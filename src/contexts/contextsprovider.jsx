import { createContext, useContext, useState } from "react";

// Create context with default values
const stateContext = createContext({
  user: null,
  token: null,
  setUser: () => null,
  setToken: () => null,
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  // Pass the values as an object to the Provider
  return (
    <stateContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </stateContext.Provider>
  );
};

// Correctly use the stateContext in the custom hook
export const useStateContext = () => useContext(stateContext);
