import { Button, Input } from '@devscale/shared-ui';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';

interface RegisterProps {
  onLoginModeClick: () => void;
}

export const Register = ({ onLoginModeClick }: RegisterProps) => {
  return (
    <main className="space-y-8 relative">
      <div className="w-60 h-60 top-20 -left-20 bg-orange-400/10 absolute -z-10 rounded-full blur-3xl" />
      <div className="flex justify-center">
        <Image alt="Logo" src={Logo} width={200} height={100} />
      </div>
      <div className="space-y-3">
        <Input placeholder="Full name" />
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button>Register</Button>
        <div>
          <div className="border-b-1.5 border-zinc-800 mt-5 mb-3 h-fit" />
        </div>
        <Button color="secondary">Continue with Github</Button>
        <div className="space-y-2 pt-12">
          <div>
            Have an account ?{' '}
            <span className="link" onClick={onLoginModeClick}>
              Login
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
