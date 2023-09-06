import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

import ChevronDown from '/public/icons/chevron-down.svg'

type Props = Partial<HTMLAnchorElement> & {
  isUpwards?: boolean
}

export default function ScrollButton({
  href,
  className,
  isUpwards = false,
}: Props) {
  return (
    <a
      href={href}
      className={twMerge(
        'hover-invert absolute bottom-4 pt-4 self-center',
        className
      )}
    >
      <figure
        className={classNames(
          'flex animate-scroll-down flex-col items-center gap-2 text-center',
          {
            'flex-col-reverse': isUpwards,
          }
        )}
      >
        <figcaption className="whitespace-pre-wrap font-sans text-xs font-bold uppercase tracking-widest">
          {isUpwards ? 'Top' : 'Scroll'}
        </figcaption>
        <ChevronDown
          width={42}
          height={24}
          alt="Chevron down icon"
          className={classNames({ 'rotate-180': isUpwards })}
        />
      </figure>
    </a>
  )
}
