import styles from './Button.module.css'

type ButtonProps = {
  title: string,
  onClick?: () => void,
  variant?: 'delete'
}

const Button = ({ title, onClick, variant }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${variant === 'delete' && styles.button__delete}`}
      onClick={onClick}
      >
    {title}</button>
  )
}

export default Button