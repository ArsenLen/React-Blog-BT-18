import './App.css';
import Hello from './components/Hello/Hello'

function App() {
  return (
    <div className="App">
      <h1>Приветствие</h1>
      <Hello name="Arsen" age="25" />
      <Hello name="Kenan" />
      <Hello name="Kairat" />
    </div>
  );
}

export default App;
// Feature Slices 
// БЭМ - методология
// Компонент - функция, которая возвращает JSX(HTML+JS) разметку
// CTRL+A - выделить все
// CTRL+K+F - форматировать код

/*
  ДЗ. Создать Компонент Hobby
  1. В компоненте в теге h5 должны отображаться хобби, которые вы передаете как пропс
  Вызвать компонент Hobby под компонентом Hello каждого пользователя
  2. В компонент Hello так же передавать пропс age и отобразите его в другом
  теге p внутри компонента hello. Передать age для каждого <Hello />
*/
