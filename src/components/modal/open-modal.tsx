'use client'

import { useEffect, useState } from 'react'

interface Props {
  modalId: string
  label: string
}

export default function OpenModal({ modalId, label }: Props) {
  const [modalDialog, setModalDialog] = useState<HTMLDialogElement>()

  useEffect(() => {
    if (!modalDialog && window) {
      const dialogRef = window.document?.getElementById(
        modalId
      ) as HTMLDialogElement

      if (dialogRef) {
        setModalDialog(dialogRef)
      }
    }
  }, [modalId, modalDialog])

  const openModal = () => modalDialog?.showModal()
  return (
    <button className="hover-invert" onClick={openModal}>
      {label}
    </button>
  )
}
