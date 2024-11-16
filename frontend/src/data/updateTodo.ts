import { TTodo } from "@src/@types/general";
import axios from "axios";

export async function updateTodo(
  todoId: string,
  newValues: Partial<TTodo>
): Promise<TTodo> {
  const res = await axios.patch(
    `http://localhost:3000/todos/${todoId}`,
    newValues
  );

  return res.data.data;
}
