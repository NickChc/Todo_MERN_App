import { TodoList } from "@src/components/todos/TodoList";
import { getTodos } from "@src/data/getTodos";
import { useQuery } from "@tanstack/react-query";

export function DoneTodos() {
  const {
    data: doneTodos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getDoneTodos"],
    queryFn: () => getTodos("done"),
  });

  if (error || doneTodos == null) {
    return (
      <div className="error-box">
        {error?.message || "Failed to fetch todos"}
      </div>
    );
  }

  if (isLoading) return <h1>LOADING ...</h1>;

  return (
    <>
      <h1>DONE TODOS HERE</h1>
      <TodoList todos={doneTodos} />
    </>
  );
}
