import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLLIElement>

export default function Slide({ children, className, ...props }: Props) {
  return (
    <li
      className={twMerge(
        classNames(
          'relative flex min-h-full w-full flex-1 snap-center flex-col',
          className
        )
      )}
      {...props}
    >
      {children}
    </li>
  )
}
