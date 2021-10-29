import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';


export default function UserDetails() {
  const {  userSelected } = useContext(UserContext);

  
  return (
    userSelected ? 
      (<div>
        <div>Nombre: {userSelected.name}</div>
        <div>User Name: {userSelected.username}</div>
        <div>Email: {userSelected.email}</div>
        <div>Street:{userSelected.address.street}</div>
        <div>City: {userSelected.address.city}</div>
      </div>) :
      (<div>Debe Seleccionar un Usuario</div>)
  );
}