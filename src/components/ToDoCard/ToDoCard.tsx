import ToDo from "../../store/types";

interface ToDoCardProps {
  todo: ToDo;
}
const ToDoCard = ({ todo }: ToDoCardProps): React.ReactElement => {
  return (
    <article>
      <h2>{todo.name}</h2>
      <span>{todo.isDone}</span>
    </article>
  );
};

export default ToDoCard;
