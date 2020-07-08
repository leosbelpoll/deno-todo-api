import DB from "./db.ts";
import { Todo } from "../types/Todo.ts";

class TodoRepository {
  constructor() {}

  todoRepo = DB.collection("todos");

  getAll = async () => await this.todoRepo.find({});

  get = async (id: string) =>
    await this.todoRepo.findOne({ _id: { $oid: id } });

  add = async (todo: Todo) => await this.todoRepo.insertOne(todo);

  update = async (id: string, todo: Todo) =>
    await this.todoRepo.updateOne({ _id: { $oid: id } }, { $set: todo });

  remove = async (id: string) =>
    await this.todoRepo.deleteOne({ _id: { $oid: id } });
}

export default TodoRepository;
