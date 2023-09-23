'use client';

import { Button, Input } from '@devscale/shared-ui';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import { registerDataAtom } from '../stores/auth.store';
import toast from 'react-hot-toast';
import { useAtom } from 'jotai';
import Link from 'next/link';

export const Register = () => {
  const [registerData, setRegisterData] = useAtom(registerDataAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegisterCredentials = () => {
    toast.loading('Registering...');
    console.log(registerData);
    setTimeout(() => {
      toast.remove();
      toast.success('Register success');
    }, 2000);
  };

  return (
    <main className="space-y-8 relative">
      <div className="flex justify-center">
        <Image alt="Logo" src={Logo} width={150} height={100} />
      </div>
      <div className="space-y-2">
        <Input value={registerData.name || ''} name="name" placeholder="Full name" onChange={handleChange} />
        <Input value={registerData.username || ''} name="username" placeholder="Username" onChange={handleChange} />
        <Input value={registerData.email || ''} name="email" placeholder="Email" onChange={handleChange} />
        <Input value={registerData.password || ''} name="password" placeholder="Password" type="password" onChange={handleChange} />
        <Button onClick={handleSubmitRegisterCredentials}>Register</Button>
      </div>
      <div className="border-b-1.5 border-zinc-800 mt-5 mb-3 h-fit" />
      <Button color="secondary">Continue with Github</Button>
      <div className="space-y-2">
        <div>
          Have an account ?{' '}
          <Link href="/login">
            <span className="link">Login</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
