import toast from 'react-hot-toast';
import { useState } from 'react';
import { pocketbase } from '../../../../platform/utils/pocketbase';

export const useGithub = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleContinueWithGithub = async () => {
    setIsLoading(true);
    toast.loading('Connecting to github...');
    try {
      await pocketbase.collection('users').authWithOAuth2({ provider: 'github' });
      toast.remove();
      toast.success('Login successfully!');
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
