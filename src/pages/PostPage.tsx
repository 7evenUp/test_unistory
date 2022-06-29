import { ChangeEvent, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button/Button"
import Modal from "../components/Modal/Modal"
import { AppContext } from "../context/createContext"
import { Types } from "../context/reducers"
import styles from "./PostPage.module.css"

const PostPage = () => {
  const {state, dispatch} = useContext(AppContext)
  const [isModalOpened, setIsModalOpened] = useState(false)

  const { postId } = useParams()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    if (postId) {
      const id = parseInt(postId)
      setTitle(state[id].title)
      setContent(state[id].content)
    }
  }, [])

  
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
              variant="delete"
              onClick={() => setIsModalOpened(true)} />
            <Button
              title="Сохранить"
              onClick={() => {
                if (postId) {
                  dispatch({
                    type: Types.Edit,
                    payload: {
                      id: parseInt(postId),
                      title: title,
                      content: content
                    }
                  })
                }
                navigate('/')
              }} />
          </div>
      </main>

      { isModalOpened && (
        <Modal closeModal={() => setIsModalOpened(false)}>
          <DeleteModalChildren closeModal={() => setIsModalOpened(false)} postId={postId} />
        </Modal>
      )}
    </div>
  )
}

const DeleteModalChildren = ({closeModal, postId }: {closeModal: () => void, postId: string | undefined}) => {
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
      <b style={{ textAlign: 'center' }}>Вы точно хотите удалить?</b>
      <div style={{
        display: 'flex'
      }}>
        <Button title="Нет" onClick={() => {
          closeModal()
        }}/>
        <Button title="Да" onClick={() => {
          if (postId) {
            dispatch({
              type: Types.Remove,
              payload: {
                id: parseInt(postId)
              }
            })
          }
          navigate('/')
        }}/>
      </div>
    </div>
  )
}

export default PostPage