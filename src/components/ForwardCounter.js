import useCounter from "../hooks/useCounter";
import Card from "./Card";

const ForwardCounter = () => {
  return <Card>{useCounter(true)}</Card>;
};

export default ForwardCounter;
