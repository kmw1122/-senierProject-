import './App.css'
import Layout from './Layout/Layout'
import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
const SERVER_URL = 'http://localhost:4000/api/todo'

function App() {
  const [todoList, setTodoList] = useState(null)
  const fetchData = async () => {
    const response = await axios.get(SERVER_URL)
    setTodoList(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const onSubmitHandler = async (e) => {
    //이게 있으면 새로고침 해줘야 값이 페이지에 표시됨 e.preventDefault();
    const text = e.target.text.value
    const done = e.target.done.checked
    await axios.post(SERVER_URL, { text, done })
    fetchData()
  }
  return (
    <div className="App">
      <Layout />
    </div>
  )
}

export default App
// 이메일:{" "}
//       <input
//         type="text"
//         id="memberEmail"
//         onkeyup="emailCheck()"
//         name="memberEmail"
//       />{" "}

//       <br />
//       {/* 이메일 체크 */}
//       <p id="emailCheck-result" />
//       비밀번호: <input type="password" name="memberPassword" /> <br />
//       {/* 몇자리 이상, 영어 숫자 등 조건 추가 가능할까요 */}
//       닉네임:{" "}
//       <input
//         type="text"
//         id="memberName"
//         onkeyup="nameCheck()"
//         name="memberName"
//       />{" "}
//       <br />
//       <p id="nameCheck-result" />
//       생년월일(yymmdd): <input type="text" name="memberBirth" />
//       <br />
//       {/* type 맞나용 */}
//       휴대폰 번호: <input type="text" name="memberNum" /> <br />
//       <input type="submit" defaultValue="회원가입" />
