import { getTodos } from "@src/data/getTodos";
import { useQuery } from "@tanstack/react-query";

export function AllTodos() {
  const { data, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return (
    <>
      <h1>ALL TODOS</h1>
      {isPending ? (
        <h1>LOADING...</h1>
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        data.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })
      )}
    </>
  );
}
