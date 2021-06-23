import useCounter from "../hooks/useCounter";
import Card from "./Card";

const BackwardCounter = () => {
  useCounter();

  return <Card>{useCounter()}</Card>;
};

export default BackwardCounter;
