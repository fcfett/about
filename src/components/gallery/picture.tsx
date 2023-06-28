import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import styles from './styles.module.css'

type Props = {
  isWide?: boolean
  caption?: ReactNode
  imagePosition?: 'top' | 'bottom' | 'center'
} & Pick<ImageProps, 'height' | 'width' | 'src' | 'alt' | 'className' | 'style'>

export default function Picture({
  alt,
  style,
  caption,
  className,
  isWide = false,
  imagePosition = 'center',
  ...props
}: Props) {
  const objectPosition = {
    center: '',
    top: 'object-top',
    bottom: 'object-bottom',
  }[imagePosition]
  return (
    <figure
      style={style}
      className={twMerge(
        classNames(styles.picture, { [styles.wide]: isWide }, className)
      )}
    >
      <Image
        alt={alt}
        className={classNames(styles.image, objectPosition)}
        {...props}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
