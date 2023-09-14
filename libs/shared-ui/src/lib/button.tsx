import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'font-medium bg-zinc-200 shadow-md shadow-black/20 text-white rounded-lg ',
  variants: {
    color: {
      primary: 'bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 text-white',
      secondary: 'bg-zinc-200 text-zinc-800',
    },
    size: {
      sm: 'text-sm px-3 py-1',
      md: 'text-base px-5 py-2',
      lg: 'text-lg px-5 py-4',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className={button(props)}>{props.children}</button>;
}

export default Button;
