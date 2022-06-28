import { createContext, Dispatch } from "react"

interface IState {
  blog: Array<{
    id: number,
    title: string,
    content: string
  }>
}

const defaultValueType: {
  dispatch: Dispatch<any>
  state: IState
} | undefined = undefined

export const initialState = {blog: []}

export const BlogContext = createContext(defaultValueType)

const actions = {
  ADD_BLOG_ITEM: 'ADD_BLOG_ITEM',
  REMOVE_BLOG_ITEM: 'REMOVE_BLOG_ITEM',
  GET_BLOG_ITEM: "GET_BLOG_ITEM"
}

export const reducer = (state: IState, action: any) => {
  switch(action.type) {
    case actions.ADD_BLOG_ITEM:
      return {
        blog: [
          ...state.blog,
          {
            id: state.blog.length,
            title: action.payload.title,
            content: action.payload.content
          }
        ]
      }
    case actions.REMOVE_BLOG_ITEM:
      const filteredBlog = state.blog.filter(el => {
        return el.id !== action.payload.postId
      })
      return { blog: filteredBlog}

    default:
      return state
  }
}



// const value = {
//   blog: state.blog,
//   addPost: ({title, content}: {title: string, content: string}) => {
//     dispatch({type: actions.ADD_BLOG_ITEM, payload: {title, content}})
//   },
//   removePost: ({postId}: {postId: number}) => {
//     dispatch({type: actions.REMOVE_BLOG_ITEM, payload: {postId}})
//   }
// }

