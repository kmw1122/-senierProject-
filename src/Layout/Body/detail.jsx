import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './styles/detail.module.css'
import { listState } from './list'
import { useRecoilState, useRecoilValue } from 'recoil'
import unLikeIcon from '../../Icons/001.png'
import likeIcon from '../../Icons/002.png'

export default function Detail() {
  const params = useParams()
  const id = params.id

  const navigate = useNavigate()
  const [listData, setListData] = useRecoilState(listState)

  const deleteHandler = () => {
    setListData((prevState) => {
      const nextState = [...prevState].filter((v) => v.id.toString() !== id)
      // params 는 전부 string
      console.log(nextState)
      return nextState
    })
  }

  const toggleHandler = () => {
    setListData((prevState) => {
      const copy = [...prevState]
      return copy.map((item) => {
        if (item.id.toString() === id) {
          return {
            ...item,
            like: !item.like,
          }
        }
        return item
      })
    })
  }

  const findItem = listData.find((item) => {
    return item.id == id
  })

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.div}>
            <h1 className={styles.h1}>식물 게시판</h1>
          </div>
          <span className={styles.no}> No. {findItem.id}</span>
          <span className={styles.title}> 제목 : {findItem.title}</span>
          <br />
          <br />
          <span className={styles.text}> 작성자 : {findItem.writer}</span>
          <span className={styles.text}> 작성일자 : {findItem.created}</span>
        </header>
        <textarea className={styles.textarea} readonly="readonly">
          {findItem.content}
        </textarea>
        <div>
          <editButton
            className={styles.button}
            onClick={() => navigate(`/board/detail/${findItem.id}/edit`)}
          >
            수정하기
          </editButton>
          <deleteButton
            className={styles.button}
            onClick={() => {
              if (window.confirm('삭제하시겠습니까?')) {
                deleteHandler()
                navigate('/Board')
              } else return
            }}
          >
            삭제하기
          </deleteButton>
        </div>
      </main>
    </container>
  )
}
