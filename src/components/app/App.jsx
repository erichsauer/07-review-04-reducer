import React, { useReducer } from 'react';
import { record, redo, undo } from '../../state/actions';
import { initialState, reducer } from '../../state/reducer';
// const useRecord = (init) => {
//   const [before, setBefore] = useState([]);
//   const [current, setCurrent] = useState(init);
//   const [after, setAfter] = useState([]);

//   const undo = () => {
//     setAfter((after) => [current, ...after]);
//     setCurrent(before[before.length - 1]);
//     setBefore((before) => before.slice(0, -1));
//   };

//   const redo = () => {
//     setBefore((before) => [...before, current]);
//     setCurrent(after[0]);
//     setAfter((after) => after.slice(1));
//   };

//   const record = (val) => {
//     setBefore((before) => [...before, current]);
//     setCurrent(val);
//   };

//   return {
//     undo,
//     record,
//     redo,
//     current,
//   };
// };

function App() {
  // const { current, undo, redo, record } = useRecord('#FF0000');
  const [{ current, before, after }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <button
        onClick={() => dispatch(undo())}
        disabled={before.length === 0}
        aria-label={undo}
      >
        undo
      </button>
      <button
        onClick={() => dispatch(redo())}
        disabled={after.length === 0}
        aria-label={redo}
      >
        redo
      </button>
      <input
        type="color"
        value={current}
        onChange={({ target }) => dispatch(record(target))}
        aria-label={'color picker'}
      />
      <div
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
