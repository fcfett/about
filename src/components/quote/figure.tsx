'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { RefObject } from 'react'

import useViewportObserver from '@/hooks/use-viewport-observer'

import styles from './styles.module.css'

export default function Figure() {
  const [figureRef, isVisible] = useViewportObserver()

  return (
    <figure
      ref={figureRef as RefObject<HTMLElement>}
      className={classNames(styles.illustration, {
        [styles['is-visible']]: isVisible,
      })}
    >
      <Image
        width={1200}
        height={1004}
        className={styles.fett}
        src="/images/fett.png"
        alt="Felipe Fett"
      />
      <Image
        width={360}
        height={66}
        className={styles.glasses}
        src="/images/glasses.png"
        alt="Thug Life Glasses"
      />
      <Image
        width={435}
        height={280}
        className={styles.cap}
        src="/images/cap.png"
        alt="Thug Life Cap"
      />
    </figure>
  )
}
