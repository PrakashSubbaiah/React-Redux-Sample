import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { conactRemove, contactAdd } from "./ContactReducerAction";
import "./styles.css";

export default function App() {
  const contactDetails = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{contactDetails?.name}</h1>
      <h3>{contactDetails?.age}</h3>
      <button onClick={() => dispatch(contactAdd())}>Contact Add</button>
      <button onClick={() => dispatch(conactRemove())}>Contact Remove</button>
    </div>
  );
}
