// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  /* 글제목 state */
  let [postTitle, setPostTitle] = useState([
    '파이썬 문법',
    '여자 귀걸이 추천',
    '배곧동 맛집 추천',
  ]);
  let [postTitleIndex, setPostTitleIndex] = useState(0);

  /* 모달창 state */
  let [modal, setModal] = useState(false);

  /* 좋아요 배열 state */
  let array = new Array(postTitle.length);
  let [like, setLike] = useState(array.fill(0));

  /* 입력값 state */
  let [inputValue, setInputValue] = useState('');

  function sortPostTitle() {
    let copy = [...postTitle];
    copy.sort();
    setPostTitle(copy);
  }

  function setModalValue(i) {
    modal === true ? setModal(false) : setModal(true);
  }

  function updateLike(i) {
    let copy = [...like];
    copy[i] = copy[i] + 1;
    setLike(copy);
  }

  function postContent() {
    if (inputValue === '') {
      alert('글 내용을 입력하세요');
    }
    let copy = [...postTitle];
    copy.unshift(inputValue); // 배열 맨 앞에 추가
    setPostTitle(copy);
  }

  function deletePost(i) {
    let copy = [...postTitle];
    copy.splice(i, 1);
    setPostTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>나의 블로그</h4>
      </div>

      <button onClick={sortPostTitle}>가나다순 정렬하기</button>

      {postTitle.map((postTitleElem, i) => {
        return (
          <div className="list" key={postTitleElem}>
            <h4
              onClick={() => {
                setModalValue(i);
                setPostTitleIndex(i);
              }}
            >
              {postTitleElem}
            </h4>
            <span
              onClick={() => {
                updateLike(i);
              }}
            >
              👍
            </span>
            <span>{like[i]}</span>
            <p>1월 27일 발행</p>
            <button
              onClick={() => {
                deletePost(i);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {/* 조건문 대신 삼항 연산자 사용하여 모달창 보여줄지 말지 결정 */}
      {modal === true ? (
        <Modal postTitle={postTitle} postTitleIndex={postTitleIndex}></Modal>
      ) : null}

      <input
        type="text"
        style={{ color: 'blue' }}
        onChange={(e) => {
          e.stopPropagation(); // event bubbling 방지
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          postContent();
        }}
      >
        글 발행
      </button>
      {/* <input type="range" /> */}
      {/* <input type="date" /> */}
      {/* <input type="number" /> */}
      {/* <textarea></textarea> */}
      {/* <select></select> */}
    </div>
  );
}

// modal 컴포넌트 생성
function Modal(props) {
  return (
    <div className="modal">
      {<h4>{props.postTitle[props.postTitleIndex]}</h4>}
      <span>수정</span>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
