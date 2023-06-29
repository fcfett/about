import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import OpenModal from './open-modal'
import styles from './styles.module.css'

type Props = {
  id: string
  label: string
} & Pick<HTMLAttributes<HTMLElement>, 'children'>

export default function Modal({ id, label, children }: Props) {
  return (
    <>
      <OpenModal modalId={id} label={label} />
      <dialog
        id={id}
        role="modal"
        className={classNames('overflow-hidden', styles.dialog)}
      >
        <form method="dialog">
          <button
            autoFocus
            type="submit"
            formNoValidate
            aria-label="close"
            formMethod="dialog"
            className="absolute inset-0 h-full w-full"
          />
        </form>
        <div className={styles.content}>{children}</div>
      </dialog>
    </>
  )
}
