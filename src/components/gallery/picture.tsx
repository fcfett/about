import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import styles from './styles.module.css'

type Props = {
  isWide?: boolean
  caption?: ReactNode
} & Pick<ImageProps, 'height' | 'width' | 'src' | 'alt' | 'className'>

export default function Picture({
  caption,
  isWide = false,
  className,
  ...props
}: Props) {
  return (
    <figure className={classNames(styles.picture, { [styles.wide]: isWide })}>
      <Image
        className={twMerge(classNames(styles.image, className))}
        {...props}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
