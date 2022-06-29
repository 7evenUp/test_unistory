import { createContext, Dispatch, ReactNode, useReducer } from "react"
import { blogReducer, Actions } from './reducers'

type Blog = {
  id: number
  title: string
  content: string
}

type InitialStateType = Blog[]

const initialState:InitialStateType = [
  {
    id: 0,
    title: 'Это заголовок',
    content: 'Это контент первой записи в блоге'
  },
  {
    id: 1,
    title: 'Это тоже заголовок',
    content: 'А это контент уже второй записи в блоге. Тут будет гораздо больше слов для демонстрации.'
  }
]

const AppContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<Actions>
}>({
  state: initialState,
  dispatch: () => null
})

const AppProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(blogReducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }