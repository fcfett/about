'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { RefObject } from 'react'

import cap from '/public/images/cap.png'
import fett from '/public/images/fett.png'
import glasses from '/public/images/glasses.png'
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
        src={fett}
        className={styles.fett}
        alt="Felipe Fett"
        placeholder="blur"
        loading="eager"
      />
      <Image src={glasses} className={styles.glasses} alt="Thug Life Glasses" />
      <Image src={cap} className={styles.cap} alt="Thug Life Cap" />
    </figure>
  )
}
