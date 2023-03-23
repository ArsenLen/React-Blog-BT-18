import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Posts from './components/Posts/Posts';

function App() {
  const [counterLeft, setCounterLeft] = useState(0) // [state, setFn]
  const [counterRight, setCounterRight] = useState(0)
  const [counterHistory, setCounterHistory] = useState('')

  // if(true) {
  //   const [number, setNumber] = useState(0)
  // }

  // for (let index = 0; index < array.length; index++) {
  //   const [number, setNumber] = useState(0)
  // }

  const posts = [
    {
      id: 1,
      title: "My first post",
      published: true
    },
    {
      id: 2,
      title: "My second post",
      published: false
    },
    {
      id: 3,
      title: "My third post",
      published: true
    }
  ]

  const handleLeft = () => {
    setCounterHistory(counterHistory + ' L')
    setCounterLeft(counterLeft + 1)
  }

  const handleRight = () => {
    setCounterHistory(counterHistory + ' R')
    setCounterRight(counterRight + 1)
  }

  return (
    <div className="App">
      <Header />
        <Posts posts={posts} />
        <p style={{fontSize: '60px'}}>Клик левой кнопки {counterLeft} </p>
        <p style={{fontSize: '60px'}}>Клик правой кнопки {counterRight} </p>
        <button onClick={handleLeft}>Клик левой</button>
        <button onClick={handleRight}>Клик правой</button>
        <h1>История кликов {counterHistory}</h1>
        {/* Hello Components */}
        <Hello name="Arsen" age="25" />
        <Hello name="Kenan" age="24" />
        <Hello name="Kairat" age="20" />
      <Footer />
    </div>
  );
}

export default App;
// rsc - react statelles component - создать шаблон компонента React
// Feature Slices 
// БЭМ - методология
// Компонент - функция, которая возвращает JSX(HTML+JS) разметку
// CTRL+A - выделить все
// CTRL+K+F - форматировать код

// Декомпозиция - разделение кода компонента
// Декомпозировать header и footer из App

/*
  ДЗ. Создать Компонент Hobby
  1. В компоненте в теге h5 должны отображаться хобби, которые вы передаете как пропс
  Вызвать компонент Hobby под компонентом Hello каждого пользователя
  2. В компонент Hello так же передавать пропс age и отобразите его в другом
  теге p внутри компонента hello. Передать age для каждого <Hello />
*/
