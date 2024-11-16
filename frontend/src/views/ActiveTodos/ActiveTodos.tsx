import { TodoList } from "@src/components/todos/TodoList";
import { getTodos } from "@src/data/getTodos";
import { useQuery } from "@tanstack/react-query";

export function ActiveTodos() {
  const {
    data: activeTodos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getActiveTodos"],
    queryFn: () => getTodos("active"),
  });

  if (isLoading) return <h1>LOADING ...</h1>;

  if (error || activeTodos == null) {
    return <div>{error?.message || "Failed to fetch todos"}</div>;
  }

  return (
    <>
      <h1>Active Todo</h1>
      <TodoList todos={activeTodos} />
    </>
  );
}
