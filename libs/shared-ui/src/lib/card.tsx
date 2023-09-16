import React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const card = tv({
  base: 'w-full border-1.5 border-zinc-800 rounded-lg',
  variants: {
    size: {
      md: 'p-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type CardVariants = VariantProps<typeof card>;
type NativeProps = React.HTMLAttributes<HTMLDivElement>;

interface InputProps extends Omit<NativeProps, keyof CardVariants>, CardVariants {}

export function Card({ size, ...props }: InputProps) {
  return <div className={card({ size })}>{props.children}</div>;
}

export default Card;
