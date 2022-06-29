type ActionMap<M extends { [index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
      type: Key;
    }
    : {
      type: Key;
      payload: M[Key];
    }
}

export enum Types {
  Add = 'ADD_BLOG_ITEM',
  Remove = 'REMOVE_BLOG_ITEM',
  Edit = 'EDIT_BLOG_ITEM'
}

type BlogType = {
  id: number
  title: string
  content: string
}

type Payload = {
  [Types.Add]: {
    title: string
    content: string
  }
  [Types.Remove]: {
    id: number
  }
  [Types.Edit]: {
    id: number
    title: string
    content: string
  }
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>]

export const blogReducer = (state: BlogType[], action: Actions) => {
  switch(action.type) {
    case Types.Add:
      console.log('Inside Add reducer')
      return [
        ...state,
        {
          id: state[state.length-1].id + 1,
          title: action.payload.title,
          content: action.payload.content
        }
      ]
    case Types.Remove:
      return [
        ...state.filter(el => el.id !== action.payload.id)
      ]
    case Types.Edit:
      return [
        ...state.map(el => {
          if (el.id === action.payload.id) {
            return {
              id: el.id,
              title: action.payload.title,
              content: action.payload.content
            }
          } else {
            return el
          }
        })
      ]

    default:
      return state
  }
}