import {Button} from "@/components/Button"
import React, { useCallback, useRef } from "react"
import Dialog, { DialogHandler } from ".."
import styles from "./ConfirmationDialog.module.css"

enum Action {
  Cancel,
  Yes,
  No,
}

export interface Props {
  title: string
  message: string
  onCancel?: () => void
  onNoClick?: () => void
  onYesClick: () => void
  yesButtonText?: string
  noButtonText?: string
  nonPortal?: boolean
  isNotModal?: boolean
}

const ConfirmationDialog = ({
  title,
  message,
  onNoClick = () => {},
  onYesClick,
  onCancel = () => {},
  yesButtonText,
  noButtonText,
  nonPortal = true,
  isNotModal = false,
}: Props) => {
  const dialogRef = useRef<DialogHandler>(null)

  const onAction = useCallback(
    (action: Action) =>
      (
        e?:
          | React.FormEvent<HTMLFormElement>
          | React.MouseEvent<HTMLButtonElement>,
      ) => {
        e?.preventDefault()

        if (dialogRef.current !== null) {
          dialogRef.current.close()
        }
        switch (action) {
          case Action.Cancel:
            onCancel()
            break
          case Action.No:
            onNoClick()
            break
          case Action.Yes:
            onYesClick()
            break
        }
      },
    [onYesClick, onCancel, onNoClick],
  )

  return (
    <Dialog
      onCancel={onAction(Action.Cancel)}
      ref={dialogRef}
      nonPortal={nonPortal}
      isNotModal={isNotModal}
    >
      <div className={styles.container}>
        <div>
          <h4>{title}</h4>
          <p>{message}</p>
        </div>
        <hr />
        <form onSubmit={onAction(Action.Yes)}>
          <div className={styles.buttonContainer}>
            <Button styling="Primary">{yesButtonText ?? "Yes"}</Button>
            <Button
               styling="Secondary"
              onClick={onAction(Action.No)}
            >
              {noButtonText ?? "No"}
            </Button>
          </div>
        </form>
      </div>
    </Dialog>
  )
}

export default React.memo(ConfirmationDialog)
