import { TTodo } from "@src/@types/general";
import axios from "axios";

export async function getTodos(): Promise<TTodo[]> {
  const res = await axios.get("http://localhost:3000/todos");

  return res.data.todos;
}
