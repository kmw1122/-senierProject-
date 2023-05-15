import './Body.css'
import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
const SERVER_URL = 'http://localhost:4000/api/login'

function Body() {
  //const [todoList, setTodoList] = useState(null);
  const [login, setLogin] = useState(null)

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL)
    //setTodoList(response.data);
    setLogin(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const onSubmitHandler = async (e) => {
    //e.preventDefault();
    const userEmail = e.target.userEmail.value
    const userPasswd = e.target.userPasswd.value
    await axios.post(SERVER_URL, { userEmail, userPasswd })
    fetchData()
  }
  return (
    <div className="Body">
      <h2>로그인</h2>
      <form className="form" onSubmit={onSubmitHandler}>
        이메일
        <input name="userEmail" type="text" />
        비밀번호
        <input name="userPasswd" type="password" />
        <input type="submit" value="로그인" />
      </form>
      {login &&
        login.map((login) => (
          <div key={login.id} style={{ display: 'flex' }}>
            <div>{login.userEmail}</div>
            <div>{login.userPasswd}</div>
          </div>
        ))}
    </div>
  )
}

export default Body
