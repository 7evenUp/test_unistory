import styles from './Modal.module.css'

type ModalProps = {
  children: React.ReactNode
  closeModal: () => void
}

const Modal = ({children, closeModal}: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_children}>
        <span className={styles.modal_close} onClick={closeModal}>+</span>
        {children}
      </div>
    </div>
  )
}

export default Modal
