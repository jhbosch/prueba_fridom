import React, { createContext, useState, useEffect } from "react";
import { UserService } from "../services/UserService";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const userService = new UserService();

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  

  const loadUsers =  (search) => {
    setLoading(true); 
    setUserSelected(null); 
    userService.readAll().then((data) => {
      const user_filter = search === "" ? data : data.filter((u) => u.email.includes(search));
      setLoading(false);
      setUsers(user_filter);
    });
  }

  useEffect(() => {
    loadUsers("");
  }, []);


  const findUser = (search) => {
    loadUsers(search);
  };

  const selectUser = (user) => {
    setUserSelected(user);
  };


  return (
    <UserContext.Provider
      value={{
        findUser,
        selectUser,
        users,
        userSelected,
        loading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;