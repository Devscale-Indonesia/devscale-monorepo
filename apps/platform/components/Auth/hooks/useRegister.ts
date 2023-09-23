'use client';

import { useAtom } from 'jotai';
import { toast } from 'react-hot-toast';
import { registerDataAtom } from '../stores/auth.store';
import { useState } from 'react';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useAtom(registerDataAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegisterCredentials = async () => {
    setIsLoading(true);
    toast.loading('Registering...');
    const { username, email, name, password } = registerData;
    const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_BACKEND_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, name, password }),
    });
    const { data, error } = await res.json();
    if (error) {
      setIsLoading(false);
      toast.remove();
      toast.error(error.message);
      return;
    }

    setIsLoading(false);
    setRegisterData({ username: '', email: '', name: '', password: '' });
    console.log({ data });
    toast.remove();
    toast.success('Registered successfully');
  };

  return { isLoading, registerData, handleChange, handleSubmitRegisterCredentials };
};
