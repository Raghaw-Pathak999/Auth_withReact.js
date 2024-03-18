import './App.css';
import { Button } from './Button.js';
import { Header } from './Header.js';
import { List } from './List.js';
import { Person } from './Person.js';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const items = ['Apple', 'Banana', 'Orange', 'Grapes'];


  return (
    <div className="App">
      <h1>This about No.3 Assignment Person</h1>
      <Header title="Welcome Now We are on React.JS" />
      <h1>This about No.1 Assignment Person</h1>
      <Person name="Ragahw" age="23"/>
      <h1>This about No.2 Assignment Button</h1>
      <Button text="Click Me" onClick={handleClick} />
      <h1>This about No.4 Assignment Button</h1>
      <List items={items} />
    </div>
  );
}

export default App;
