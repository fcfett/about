import { HTMLAttributes } from 'react'

import styles from './styles.module.css'

type Props = HTMLAttributes<HTMLUListElement>

export default function Gallery({ children }: Props) {
  return <section className={styles.gallery}>{children}</section>
}
