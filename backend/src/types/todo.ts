import { Document } from "mongoose"

export interface ITodo extends Document {
  item: string
  dueDate: string
  status: boolean
}