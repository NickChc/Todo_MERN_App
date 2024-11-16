import "@src/components/todos/TodoList/_TodoList.scss";
import { TTodo } from "@src/@types/general";
import { Todo } from "@src/components/todos/Todo";

interface TodoListProps {
  todos: TTodo[];
}

export function TodoList({ todos }: TodoListProps) {
  if (todos.length < 1) return <h1>NO TODOS</h1>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
}
