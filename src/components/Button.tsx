import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
        className={clsx(
          'py-4 px-3 bg-fuchsia-700 font-semibold rounded text-white text-sm w-full transition-colors hover:bg-fuchsia-600 focus:ring-2 ring-fuchsia-800',
      )}
      >
          {children}
        </Comp>
    )
}