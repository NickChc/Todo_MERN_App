import axios from "axios";

export async function deleteTodo(todoId: string) {
  const res = await axios.delete(`http://localhost:3000/todos/${todoId}`);

  return res.data;
}
