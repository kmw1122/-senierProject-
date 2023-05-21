import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { listState } from './list'
import styles from './styles/edit.module.css'

export default function Edit() {
  // const [list, setList] = useSetRecoilState(listState);
  const list = useRecoilValue(listState)
  const setList = useSetRecoilState(listState)

  const navigate = useNavigate()
  const { id } = useParams()

  const EditHandler = () => {
    setList((prevState) => {
      const copy = [...prevState]
      return copy.map((item) => {
        if (item.id.toString() === id) {
          return {
            ...item,
            title: inputData.title,
            content: inputData.content,
            writer: inputData.writer,
          }
        }
        return item
      })
    })
  }

  const findItem = list.find((item) => {
    return item.id == id
  })

  const [inputData, setInputData] = useState({
    id: findItem.id,
    title: findItem.title,
    writer: findItem.writer,
    content: findItem.content,
    created: findItem.created,
    like: findItem.like,
    lookup: findItem.lookup,
  })

  const onChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <input
            className={styles.titleInput}
            type="text"
            name="title"
            value={inputData.title}
            placeholder="제목을 입력해주세요"
            onChange={onChange}
          ></input>
          <span className={styles.writer}> 작성자 </span>
          <input
            className={styles.writerInput}
            type="text"
            name="writer"
            value={inputData.writer}
            onChange={onChange}
          ></input>
          <span className={styles.span}> 작성일자 : {findItem.created}</span>
        </header>
        <textarea
          className={styles.textarea}
          type="text"
          name="content"
          value={inputData.content}
          onChange={onChange}
        ></textarea>
        <writeButton
          className={styles.button}
          onClick={() => {
            EditHandler()
            navigate('/Board')
          }}
        >
          작성 완료
        </writeButton>
      </main>
    </container>
  )
}
