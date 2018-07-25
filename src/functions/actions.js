import add from "./add";
import subtract from "./subtract";
import multiply from "./multiply";
import divide from "./divide";

export const actions = [
  {
    title: "add",
    callback: add
  },
  {
    title: "subtract",
    callback: subtract
  },
  {
    title: "divide",
    callback: divide
  },
  {
    title: "multiply",
    callback: multiply
  }
];
