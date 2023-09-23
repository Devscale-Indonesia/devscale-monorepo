import { type VariantProps, tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const button = tv({
  base: 'border-1.5 border-background-900/40 w-full bg-transparent shadow-md shadow-black/20 font-medium tracking-tight text-white rounded-lg transition duration-300 ease-in-out ',
  variants: {
    color: {
      primary: 'bg-gradient-to-b from-background-50 to-background-200 border-0 text-background-950 hover:opacity-90 active:opacity-80 ',
      secondary: 'bg-gradient-to-b from-background-950 to-background-900/10 hover:border-background-800 active:opacity-80 text-zinc-400 ',
      ghost: 'bg-transparent text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900 flex gap-3 items-center justify-start',
    },
    size: {
      sm: 'px-2 py-1',
      md: 'py-2 px-4',
      lg: 'px-2 py-4',
      icon: 'p-2 w-fit',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

type ButtonVariants = VariantProps<typeof button>;
type NativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Omit<NativeProps, keyof ButtonVariants>, ButtonVariants {
  children: React.ReactNode;
  className?: string;
}

export function Button({ color, size, children, className, ...props }: ButtonProps) {
  return (
    <button className={twMerge(button({ color, size }), className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
