import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const input = tv({
  base: ' w-full text-zinc-300 placeholder:text-zinc-600 border-zinc-900 border-1.5 focus:border-zinc-800 focus:outline-none bg-zinc-900/50 rounded-lg',
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
