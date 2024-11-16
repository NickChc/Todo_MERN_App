import { TTodo } from "@src/@types/general";
import axios from "axios";

export async function getTodos(type?: "active" | "done"): Promise<TTodo[]> {
  const query =
    type === "active" ? "?active=true" : type === "done" ? "?active=false" : "";

  const res = await axios.get(`http://localhost:3000/todos${query}`);

  return res.data.todos;
}
