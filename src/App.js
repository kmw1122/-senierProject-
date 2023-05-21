import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'
import Home from './Layout/Body/home'
import Test from './Layout/Body/test'
import Community from './Layout/Body/community'
import Board from './Layout/Body/board'
import Write from './Layout/Body/write'
import Detail from './Layout/Body/detail'
import Edit from './Layout/Body/edit'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/community" element={<Community />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/write" element={<Write />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/board/detail/:id" element={<Detail />} />
        <Route path="/board/detail/:id/edit" element={<Edit />} />
        {/* <Route path="/mypage" element={<Mypage />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
