'use client';

import { Login } from './Auth.Login';
import { Register } from './Auth.Register';
import { useState } from 'react';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return <>{isLogin ? <Login onRegisterModeClick={() => setIsLogin(false)} /> : <Register onLoginModeClick={() => setIsLogin(true)} />}</>;
};
