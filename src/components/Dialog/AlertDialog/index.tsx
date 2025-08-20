import {Button} from "@/components/Button"
import React, { useCallback, useRef } from "react"
import Dialog, { DialogHandler } from ".."
import styles from "./AlertDialog.module.css"

export interface Props {
  title: string
  message: string
  okBtnText?: string
  onOk: () => void
}

const AlertDialog = ({ title, message, okBtnText, onOk }: Props) => {
  const dialogRef = useRef<DialogHandler>(null)

  const onAction = useCallback(
    (isOkClick: boolean) =>
      (
        e?:
          | React.FormEvent<HTMLFormElement>
          | React.MouseEvent<HTMLButtonElement>,
      ) => {
        e?.preventDefault()

        if (dialogRef.current !== null) {
          dialogRef.current.close()
        }

        if(isOkClick)
          onOk()
      },
    [onOk],
  )

  return (
    <Dialog onCancel={onAction(false)} ref={dialogRef} nonPortal={true}>
      <div className={styles.container}>
        <div>
          <strong>{title.toUpperCase()}</strong>
          <p className="p-12">{message}</p>
        </div>
        <hr className="p-2 w-60 m-auto"/>
        <div className="p-4 pt-0">
          <Button styling="Primary" onClick={onAction(true)} className="p-5 w-full">
            {okBtnText ?? "Ok"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}

export default React.memo(AlertDialog)
