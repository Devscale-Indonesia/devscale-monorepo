import { type VariantProps, tv } from 'tailwind-variants';
import React from 'react';

const input = tv({
  base: 'bg-background-950 placeholder:text-zinc-700 border-1.5 border-background-900/40 focus:outline-none focus:border-background-500 active:opacity-80 rounded-lg w-full transition duration-200 ease-in-out',
  variants: {
    size: {
      md: 'py-2 px-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type InputVariants = VariantProps<typeof input>;
type NativeProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Omit<NativeProps, keyof InputVariants>, InputVariants {}

export function Input({ size, ...props }: InputProps) {
  return <input className={input({ size })} {...props} />;
}

export default Input;
