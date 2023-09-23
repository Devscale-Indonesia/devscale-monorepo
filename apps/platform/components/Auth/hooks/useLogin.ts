'use client';

import { useAtom } from 'jotai';
import { loginDataAtom } from '../stores/auth.store';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { pocketbase } from '../../../../platform/utils/pocketbase';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useAtom(loginDataAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLoginCredentials = async () => {
    toast.loading('Logging in...');
    const { email, password } = loginData;
    try {
      setIsLoading(true);
      await pocketbase.collection('users').authWithPassword(email, password);
      pocketbase.authStore.exportToCookie({ httpOnly: false });
      toast.remove();
      toast.success('Login successful');
      setLoginData({ email: '', password: '' });
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
      toast.remove();
      toast.error('error');
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, loginData, handleChange, handleSubmitLoginCredentials };
};
