import { useState } from 'react';
import './App.css';

const emojiDictionary = {
  banano: '🍌',
  platano: '🍌',
  manzana: '🍎',
};

const transformTextToEmoji = text =>
  text
    .split(' ')
    .map(word => emojiDictionary[word] ?? word)
    .join(' ');

const App = () => {
  const [color, setColor] = useState('blue');
  const [text, setText] = useState('Nuevo text');

  const onTextAreaChange = e => {
    setText(e.target.value);
  };

  return (
    <div className="app">
      <textarea
        value={text}
        className="app__input"
        cols="30"
        rows="10"
        onChange={onTextAreaChange}
      ></textarea>
      <input
        className="app__input"
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <p style={{ color }}>{transformTextToEmoji(text)}</p>
    </div>
  );
};

export default App;
