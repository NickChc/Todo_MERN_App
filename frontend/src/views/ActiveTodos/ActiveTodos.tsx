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

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <h1>LOADING ...</h1>;

  return (
    <>
      <div>
        {activeTodos?.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </div>
    </>
  );
}
