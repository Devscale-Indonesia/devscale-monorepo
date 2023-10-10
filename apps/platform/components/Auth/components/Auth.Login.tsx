'use client';

import { Button, Input } from '@devscale/shared-ui';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import { useLogin } from '../hooks/useLogin';
import { useGithub } from '../hooks/useGithub';
import Link from 'next/link';
import { pocketbase } from '../../../utils/pocketbase';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const Login = () => {
  const router = useRouter();
  const { isLoading, loginData, handleChange, handleSubmitLoginCredentials } = useLogin();
  const { isLoading: isGithubLoading, handleContinueWithGithub } = useGithub();
  const user = pocketbase.authStore.isValid;

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user]);

  return (
    <main className="space-y-8 relative">
      <div className="flex justify-center">
        <Image alt="Logo" src={Logo} width={150} height={100} />
      </div>
      <div className="space-y-2">
        <Input value={loginData.email || ''} name="email" placeholder="Enter your email" onChange={handleChange} />
        <Input value={loginData.password || ''} name="password" type="password" placeholder="Enter your password" onChange={handleChange} />
        <Button onClick={handleSubmitLoginCredentials} disabled={isLoading}>
          Login
        </Button>
      </div>
      <div className="border-b-1.5 border-zinc-800 mt-5 mb-3 h-fit" />
      <Button color="secondary" disabled={isGithubLoading} onClick={handleContinueWithGithub}>
        Continue with Github
      </Button>
      <div className="space-y-2">
        <div>
          Don&apos;t have any account ?{' '}
          <Link href="/register">
            <span className="link">Register</span>
          </Link>
        </div>
        <div>Forgot password</div>
      </div>
    </main>
  );
};
