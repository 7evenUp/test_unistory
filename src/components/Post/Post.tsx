import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Post.module.css'

type PostProps = {
  postId: number
  title: string
  content: string
}

const Post = ({ postId, title, content }: PostProps) => {
  return (
    <article className={styles.post}>
      <h2 className={styles.post_heading}>
        {title.length > 15 ? `${title.slice(0, 15)}...` : title}
      </h2>
      <p className={styles.post_text}>
        {content.length > 60 ? `${content.slice(0, 60)}...` : content}
      </p>
      <Link to={`/${postId}`}>
        <Button title='перейти' />
      </Link>
    </article>
  )
}

export default Post