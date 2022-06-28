import { ChangeEvent, useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button/Button"
import { BlogContext } from "../context/createContext"
import styles from "./PostPage.module.css"

const PostPage = () => {
  const {state, dispatch} = useContext(BlogContext)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const { postId } = useParams()
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.name === "title" ?
      setTitle(e.currentTarget.value) :
      setContent(e.currentTarget.value)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Button
          onClick={() => navigate(-1)}
          title="Назад"/>
      </header>
      <main className={styles.main}>
        <h1>Запись {title}</h1>
        <input
          className={styles.input}
          placeholder="title"
          name="title"
          value={title}
          onChange={handleChange}/>
        <textarea 
          className={`${styles.input} ${styles.textarea}`}
          placeholder="content"
          name="content"
          value={content}
          onChange={handleChange}
          style={{
            resize: "none"
          }} />
          <div className={styles.buttons}>
            <Button
              title="Удалить"
              variant="delete" />
            <Button
              title="Сохранить"/>
          </div>
      </main>
    </div>
  )
}

export default PostPage