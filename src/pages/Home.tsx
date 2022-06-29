import { useContext, useState } from "react"
import { Post, Modal, Button } from '../components'
import { AppContext } from "../context/createContext"
import { Types } from "../context/reducers"

const Home = () => {
  const {state} = useContext(AppContext)
  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <>
      <h1 className="heading">Блог</h1>
      <div className="content">
        {state.map(el => (
          <Post
            key={el.id}
            postId={el.id}
            title={el.title}
            content={el.content}/>
        ))}
      </div>
      <div className="button_wrapper">
        <Button title="+ Добавить" onClick={() => setIsModalOpened(true)}/>
      </div>
      
      { isModalOpened && (
        <Modal closeModal={() => setIsModalOpened(false)}>
          <ModalPost closeModal={() => setIsModalOpened(false)} />
        </Modal>
      )}
    </>
  )
}

const ModalPost = ({closeModal}: {closeModal: () => void}) => {
  const { dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <>
      <label
        htmlFor="title"
        style={{
          display: 'flex',
          gap: 8
        }}>
        <span>Title</span>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          style={{ flex: 1, padding: 4 }} />
      </label>

      <label
        htmlFor="content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
        <span>Content</span>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
          style={{
            height: 100,
            resize: 'none',
            padding: 4
          }} />
      </label>
      <div style={{
        display: 'flex'
      }}>
        <Button title="Отмена" onClick={() => closeModal()}/>
        <Button title="Сохранить" onClick={() => {
          dispatch({
            type: Types.Add,
            payload: {
              title: title,
              content: content
            }
          })
          closeModal()
        }}/>
      </div>
    </>
  )
}

export default Home