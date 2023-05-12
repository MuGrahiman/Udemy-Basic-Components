import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";

const INCREMENT_COUNT = "Increment";
const DECREMENT_COUNT = "Decrement";
const CHANGE_VALUE = "change-to-value-toAdd";
const ADD_VALUE = "Add-change-value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;

    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;

    case CHANGE_VALUE:
      state.valueToAdd = action.payload;
      return ;
    case ADD_VALUE:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return ;
  }
};

function CounterPage({ initialVal }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialVal,
    valueToAdd: 0,
  });
  console.log(state);
  // const [count, setCount] = useState(initialVal);
  // const [valueToAdd ,setValueToAdd] = useState(0)
  const Increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const Decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value)
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg"> count = {state.count} </h1>
      <div className="flex flex-row gap-2">
        <Button onClick={Increment} primary>
          Increment
        </Button>
        <Button onClick={Decrement} primary>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add Something!!!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button type="submit">Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
