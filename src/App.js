import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello'

function App() {
  return (
    <div className="App">
      <Header />
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
