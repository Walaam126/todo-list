import { deleteTask } from "../../store/actions";
import { TrashFill } from 'react-bootstrap-icons';
import { useDispatch } from "react-redux";

const DeleteButton = ({ taskId }) => {
  const dispatch = useDispatch();
  return (
    <TrashFill
      
      onClick={() => dispatch(deleteTask(taskId))}
    >
    </TrashFill>
  );
};

export default DeleteButton;