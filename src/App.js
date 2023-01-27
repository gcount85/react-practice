// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [글제목, a] = useState(['여자 구두 추천', '여자 귀걸이 추천', '여자 목걸이 추천'])

  return (
    <div className="App">

      <div className="black-nav">
        <h4>나의 블로그</h4>
      </div>

      <div className='list'>
        <h4>{글제목[0]}</h4>
        <p>1월 27일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>1월 27일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>1월 27일 발행</p>
      </div>


    </div >
  );
}

export default App;
