import {useDispatch, useSelector} from 'react-redux'


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash)

  return (
    <div className="App">
      <h1>{cash}</h1>
      <button onClick={()=>dispatch({type: "GET_CASH", payload: 1})}>Minus</button>
      <button onClick={()=>dispatch({type: "ADD_CASH", payload: 1})}>Plus</button>
    </div>
  );
}

export default App;
