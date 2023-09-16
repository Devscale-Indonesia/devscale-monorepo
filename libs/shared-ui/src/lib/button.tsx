import { type VariantProps, tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const button = tv({
  base: 'border-1.5 border-transparent w-full bg-zinc-200 shadow-md shadow-black/20 text-white rounded-lg ',
  variants: {
    color: {
      primary: 'bg-zinc-800  hover:bg-zinc-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:active:bg-zinc-300 text-white',
      secondary:
        'bg-zinc-800 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-800 dark:hover:text-zinc-100 dark:active:bg-zinc-800/50 text-white',
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
