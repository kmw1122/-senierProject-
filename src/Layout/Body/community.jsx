import { useEffect, useState } from 'react'
import './community.css'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ReactHtmlParser from 'html-react-parser'
import Axios from 'axios'

function Community() {
  const [communityContent, setcommunityContent] = useState({
    title: '',
    content: '',
  })

  const [viewContent, setViewContent] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8000/api/get').then((response) => {
      setViewContent(response.data)
    })
  }, [viewContent])

  const submitReview = () => {
    Axios.post('http://localhost:8000/api/insert', {
      title: communityContent.title,
      content: communityContent.content,
    }).then(() => {
      alert('등록 완료!')
    })
  }

  const getValue = (e) => {
    const { name, value } = e.target
    setcommunityContent({
      ...communityContent,
      [name]: value,
    })
  }

  return (
    <div className="App">
      <h1>식물 게시판</h1>
      <div className="community-container">
        {Object.values(viewContent).map((element) => (
          <div className="title">
            <h2>{element.title}</h2>
            <div>{ReactHtmlParser(element.content)}</div>
          </div>
        ))}
      </div>
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData()
            console.log({ event, editor, data })
            setcommunityContent({
              ...communityContent,
              content: data,
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor)
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor)
          }}
        />
      </div>
      <button className="submit-button" onClick={submitReview}>
        입력
      </button>
    </div>
  )
}

export default Community
