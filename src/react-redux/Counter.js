
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,multiple,dividing,incrementBy,decrementBy } from './counterSlice ';
export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 
  return (
    <div>
      <h1>counter</h1>
      <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(multiple())}>*2</button>
      <button onClick={()=>dispatch(dividing())}>/2</button>
      <button onClick={() => dispatch(incrementBy(2))}>+2</button>
       <button onClick={()=>dispatch(decrementBy(2))}>-2</button>
    </div>
  );
}
