import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = HTMLAttributes<HTMLUListElement>

export default function ViewportSlider({
  children,
  className,
  ...props
}: Props) {
  return (
    <ul
      className={twMerge(
        classNames(
          'relative flex h-full w-full snap-y snap-mandatory flex-col overflow-auto',
          className
        )
      )}
      {...props}
    >
      {children}
    </ul>
  )
}
