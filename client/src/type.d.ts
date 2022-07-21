// CREATE A TODO TYPE

interface ITodo {
  _id: string
  item: string
  dueDate: string
  status: boolean
  createdAt?: string
  updatedAt?: string
}

interface TodoProps {
  todo: ITodo
}

type ApiDataType = {
  message: string
  status: string
  todos: ITodo[]
  todo?: ITodo
}