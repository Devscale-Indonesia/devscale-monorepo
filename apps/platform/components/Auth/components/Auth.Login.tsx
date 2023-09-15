'use client';

import { Button, Input } from '@devscale/shared-ui';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import { loginDataAtom } from '../stores/auth.store';
import { useAtom } from 'jotai';

interface LoginProps {
  onRegisterModeClick: () => void;
}

export const Login = ({ onRegisterModeClick }: LoginProps) => {
  const [loginData, setLoginData] = useAtom(loginDataAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLoginCredentials = () => {
    console.log(loginData);
  };

  console.log(process.env.NEXT_PUBLIC_PROJECT_NAME);

  return (
    <main className="space-y-8 relative">
      <div className="w-60 h-60 top-20 -left-20 bg-orange-400/10 absolute -z-10 rounded-full blur-3xl" />
      <div className="flex justify-center">
        <Image alt="Logo" src={Logo} width={150} height={100} />
      </div>
      <div className="space-y-3">
        <Input value={loginData.email || ''} name="email" placeholder="Enter your email" onChange={handleChange} />
        <Input value={loginData.password || ''} name="password" type="password" placeholder="Enter your password" onChange={handleChange} />
        <Button onClick={handleSubmitLoginCredentials}>Login</Button>
      </div>
      <div>
        <div className="border-b-1.5 border-zinc-800 mt-5 h-fit" />
      </div>
      <Button color="secondary">Continue with Github</Button>
      <div className="space-y-2 pt-6">
        <div>
          Don&apos;t have any account ?{' '}
          <span className="link" onClick={onRegisterModeClick}>
            Register
          </span>
        </div>
        <div>Forgot password</div>
      </div>
    </main>
  );
};
