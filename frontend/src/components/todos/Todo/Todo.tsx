import "@src/components/todos/Todo/_Todo.scss";
import { TTodo } from "@src/@types/general";
import { CheckIcon } from "@src/assets/icons/CheckIcon";
import { TrashCanIcon } from "@src/assets/icons/TrashCanIcon";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "@src/data/updateTodo";
import { deleteTodo } from "@src/data/deleteTodo";

interface TodoProps {
  todo: TTodo;
}

export function Todo({ todo }: TodoProps) {
  const [isDone, setIsDone] = useState(todo.is_done);
  const queryClient = useQueryClient();

  function invalidateTodos() {
    queryClient.invalidateQueries({ queryKey: ["getAllTodos"] });
    queryClient.invalidateQueries({ queryKey: ["getActiveTodos"] });
    queryClient.invalidateQueries({ queryKey: ["getDoneTodos"] });
  }

  const { mutateAsync: mutateToggleTodo } = useMutation({
    mutationKey: ["toggleTodo", todo.id],
    mutationFn: () => updateTodo(todo.id, { is_done: !todo.is_done }),
    onSuccess: invalidateTodos,
    onMutate: () => {
      setIsDone((prev) => !prev);
    },
    onError: () => {
      setIsDone((prev) => !prev);
    },
  });

  const { mutateAsync: mutateDeleteTodo } = useMutation({
    mutationKey: ["deleteTodo", todo.id],
    mutationFn: () => deleteTodo(todo.id),
    onSuccess: invalidateTodos,
  });

  return (
    <div className="todo">
      <h3>{todo.title}</h3>

      <div>
        <button
          onClick={() => mutateToggleTodo()}
          className={isDone ? "active" : ""}
          name="toggle"
        >
          <CheckIcon />
        </button>

        <button onClick={() => mutateDeleteTodo()} name="delete">
          <TrashCanIcon />
        </button>
      </div>
    </div>
  );
}
