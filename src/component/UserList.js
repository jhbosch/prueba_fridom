import React, { useEffect, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import ClipLoader from "react-spinners/ClipLoader";
import { UserContext } from '../contexts/UserContext';


export default function UserList({search}) {
  const { users, findUser, loading, userSelected, selectUser } = useContext(UserContext);

  useEffect(()=>{
    findUser(search);
  },[search])


  
  return (
      loading ? 
        (<div className="d-flex justify-content-center align-items-center">
          <ClipLoader loading={loading} size={50} />
        </div>) : 
        (<ListGroup as="ol" >
          {users.map((u) => {
            return (<ListGroup.Item 
              action
              active={ userSelected && u.id === userSelected.id}
              key={u.id}
              as="li"
              onClick={()=>selectUser(u)}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{u.name}</div>
                <span className="ps-3">{u.email}</span>
              </div>
            </ListGroup.Item>)
          })}
          {users.length === 0 && 
          (
            <ListGroup.Item 
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">No hay se encontro resultado</div>
              </div>
            </ListGroup.Item>
          )}   
        </ListGroup>)
  );
}