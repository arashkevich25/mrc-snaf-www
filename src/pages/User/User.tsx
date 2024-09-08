import React, { useContext } from 'react';
import { UserState } from '../../App';
import { Navigate } from "react-router-dom";

interface UserProps {}

export function User(props: UserProps) {
  const {currentUser} = useContext(UserState);

  if (!currentUser.email) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
  <div>
    <code>{JSON.stringify(currentUser)}</code> 
  </div>
  )
};
