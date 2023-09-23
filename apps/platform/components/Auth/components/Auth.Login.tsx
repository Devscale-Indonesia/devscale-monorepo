'use client';

import { Button, Input } from '@devscale/shared-ui';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import { loginDataAtom } from '../stores/auth.store';
import { useAtom } from 'jotai';
import Link from 'next/link';

export const Login = () => {
  const [loginData, setLoginData] = useAtom(loginDataAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLoginCredentials = async () => {
    const { email, password } = loginData;
    const response = await fetch('http://localhost:4201/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="space-y-8 relative">
      <div className="flex justify-center">
        <Image alt="Logo" src={Logo} width={150} height={100} />
      </div>
      <div className="space-y-2">
        <Input value={loginData.email || ''} name="email" placeholder="Enter your email" onChange={handleChange} />
        <Input value={loginData.password || ''} name="password" type="password" placeholder="Enter your password" onChange={handleChange} />
        <Button onClick={handleSubmitLoginCredentials}>Login</Button>
      </div>
      <div className="border-b-1.5 border-zinc-800 mt-5 mb-3 h-fit" />
      <Button color="secondary">Continue with Github</Button>
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
