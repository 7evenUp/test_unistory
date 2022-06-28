import { useState } from "react"
import Button from "../components/Button/Button"
import Modal from "../components/Modal/Modal"
import Post from "../components/Post/Post"

const Home = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  return (
    <>
      <h1 className="heading">Блог</h1>
      <div className="content">
        {Array.from(Array(10)).map((_, index) => {
          return <Post key={index} postId={index}/>
        })}
      </div>
      <div className="button_wrapper">
        <Button title="+ Добавить" onClick={() => {
          setIsModalOpened(true)
        }}/>
      </div>
      
      { isModalOpened && (
        <Modal closeModal={() => setIsModalOpened(false)}>
          <CreateModalChildren closeModal={() => setIsModalOpened(false)} />
        </Modal>
      )}
    </>
  )
}

const CreateModalChildren = ({closeModal}: {closeModal: () => void}) => {
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
          style={{ flex: 1 }} />
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
            resize: 'none'
          }} />
      </label>
      <div style={{
        display: 'flex'
      }}>
        <Button title="Отмена" onClick={() => {
          closeModal()
        }}/>
        <Button title="Сохранить" onClick={() => {
          console.log(title, content)
          closeModal()
        }}/>
      </div>
    </>
  )
}

export default Home