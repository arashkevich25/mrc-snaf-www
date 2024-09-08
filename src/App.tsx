import React, { createContext, useCallback, useMemo, useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { User } from './pages/User/User';
import { Login } from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/user",
    element: <User/>,
  },
]);

interface UserResponse {
  email: string,
  name: string,
}

export const UserState = createContext<{currentUser: UserResponse, login: (response: any) => void}>({} as any);

function App() {
  const [currentUser, setCurrentUser] = useState<UserResponse>({} as UserResponse);

  const login = useCallback((response: any) => {
    setCurrentUser(response);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    <UserState.Provider value={contextValue}>
      <RouterProvider router={router} />
    </UserState.Provider>
  );
}

export default App;
