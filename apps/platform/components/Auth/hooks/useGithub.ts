import toast from 'react-hot-toast';
import { useState } from 'react';
import { pocketbase } from '../../../../platform/utils/pocketbase';
import { useRouter } from 'next/navigation';

export const useGithub = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleContinueWithGithub = async () => {
    setIsLoading(true);
    toast.loading('Connecting to github...');
    try {
      await pocketbase.collection('users').authWithOAuth2({ provider: 'github' });
      document.cookie = pocketbase.authStore.exportToCookie({ httpOnly: false });
      toast.remove();
      toast.success('Login successfully!');
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

  return { isLoading, handleContinueWithGithub };
};
