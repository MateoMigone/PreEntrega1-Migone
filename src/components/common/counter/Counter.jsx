import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import "./counter.css";

const Counter = ({ qty, increase, decrease }) => {
  return (
    <div>
      Cantidad:
      <IconButton onClick={decrease} className="rmvIcon" aria-label="decrease">
        <RemoveIcon />
      </IconButton>
      {qty}
      <IconButton onClick={increase} className="addIcon" aria-label="increase">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
