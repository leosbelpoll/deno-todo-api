import { v4 } from "https://deno.land/std/uuid/mod.ts";
import TodoRepository from "../models/todoRepository.ts";

export const getAll = async ({ response }: { response: any }) => {
  const todoRepository = new TodoRepository();
  response.body = await todoRepository.getAll();
};

export const get = async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const { id } = params;
  const todoRepository = new TodoRepository();

  response.body = await todoRepository.get(id);
};

export const add = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const { title } = body.value;

  const todoRepository = new TodoRepository();

  response.body = await todoRepository.add({
    id: v4.generate(),
    title,
    completed: false,
  });
};

export const update = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const { id } = params;
  const body = await request.body();
  const { title, completed } = body.value;

  const todoRepository = new TodoRepository();
  const todo = await todoRepository.get(id);
  const newTodo = {
    ...todo,
    title,
    completed,
  };

  response.body = await todoRepository.update(id, newTodo);
};

export const remove = async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const { id } = params;

  const todoRepository = new TodoRepository();

  response.body = await todoRepository.remove(id);
};
