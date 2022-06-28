import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Post.module.css'

type PostProps = {
  postId: number
}

const Post = ({ postId }: PostProps) => {
  return (
    <article className={styles.post}>
      <h2 className={styles.post_heading}>heading</h2>
      <p className={styles.post_text}>Content asdsadm qweqwmd</p>
      <Link to={`/${postId}`}>
        <Button title='перейти' />
      </Link>
    </article>
  )
}

export default Post