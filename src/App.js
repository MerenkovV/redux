import { Button, Input, List } from 'antd';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {DeleteOutlined} from '@ant-design/icons'
import { addUserAC, removeUserAC } from './store/usersReducer';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash.cash)
  const users = useSelector(state=>state.users.users)
  const [name, setName] = useState('')

  return (
    <div className="App">
      <h1>{cash}</h1>
      <button onClick={()=>dispatch({type: "GET_CASH", payload: 1})}>Minus</button>
      <button onClick={()=>dispatch({type: "ADD_CASH", payload: 1})}>Plus</button>
      <br/><br/>

      <Input style={{maxWidth: '40vw'}} addonBefore="user's name: " 
      onPressEnter={()=>{
        if(name !== ''){
          dispatch(addUserAC(name))
          setName('')
        } 
      }} value={name} onChange={e=>setName(e.target.value)}/>

      <List
        size="small"
        bordered
        style={{maxWidth:'40vw'}}
        itemLayout="horizontal"
        dataSource={users.toReversed()}
        renderItem={item=><List.Item id={item.id} actions={[
        <Button danger shape='circle' onClick={()=>dispatch(removeUserAC(item.id))}>
          <DeleteOutlined/>
        </Button>
      ]}>{item.name}</List.Item>}
      />
    </div>
  );
}

export default App;
