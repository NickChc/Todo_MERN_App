import { TodoList } from "@src/components/todos/TodoList";
import { getTodos } from "@src/data/getTodos";
import { useQuery } from "@tanstack/react-query";

export function AllTodos() {
  const {
    data: allTodos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getAllTodos"],
    queryFn: () => getTodos(),
  });

  if (isLoading) return <h1>LOADING ...</h1>;

  if (error || allTodos == null) {
    return (
      <div className="error-box">
        {error?.message || "Failed to fetch todos"}
      </div>
    );
  }

  return (
    <>
      <h1>ALL TODOS</h1>
      <TodoList todos={allTodos} />
    </>
  );
}
