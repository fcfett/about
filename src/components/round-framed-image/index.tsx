import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import { HTMLAttributes } from 'react'

import styles from './styles.module.css'

type Props = Pick<ImageProps, 'alt' | 'src'> & HTMLAttributes<HTMLElement>

export default function RoundFrameImage({ className, src, alt }: Props) {
  return (
    <figure className={classNames(styles['round-frame-image'], className)}>
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
