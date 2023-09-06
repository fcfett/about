import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLProps<HTMLAnchorElement>

export default function FocusableAnchor({ className, ...props }: Props) {
  return (
    <a
      {...props}
      className={twMerge(
        'absolute inset-0 z-10 flex items-center justify-center',
        'rounded-full transition-opacity outline-none p-[0.5vmin]',
        'opacity-0 hover:opacity-100 focus-within:opacity-100',
        'text-center text-white font-script invert-colors text-[5vmin] leading-[.85]',
        className
      )}
    />
  )
}
