'use client';

import { useAtom } from 'jotai';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { pocketbase } from '../../../../platform/utils/pocketbase';
import { registerDataAtom } from '../stores/auth.store';

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
    try {
      await pocketbase.collection('users').create({ username, email, name, password, passwordConfirm: password });
      toast.remove();
      toast.success('Registered successfully!');
      setRegisterData({ username: '', email: '', name: '', password: '' });
    } catch (error) {
      console.log(error);
      toast.remove();
      toast.error('error');
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, registerData, handleChange, handleSubmitRegisterCredentials };
};
