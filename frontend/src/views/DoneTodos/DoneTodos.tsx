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

  if (error) return <div className="error-box">{error.message}</div>;

  if (isLoading) return <h1>LOADING ...</h1>;

  return (
    <>
      <h1>DONE TODOS HERE</h1>
      <ul>
        {doneTodos?.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>;
        })}
      </ul>
    </>
  );
}
