import Image, { ImageProps } from 'next/image'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import styles from './styles.module.css'

type Props = Pick<ImageProps, 'alt' | 'src'> & HTMLAttributes<HTMLElement>

export default function RoundFrameImage({ className, src, alt }: Props) {
  return (
    <figure className={twMerge(styles['round-frame-image'], className)}>
      <Image
        fill
        priority
        src={src}
        alt={alt}
        sizes="80vw"
        className={styles['next-image']}
      />
    </figure>
  )
}
