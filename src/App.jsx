import { useState } from 'react';
import InputForm from './components/InputForm';
import GeneratedCode from './components/GeneratedCode';
import AnimatedLogo from './utils/AnimatedLogo';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState(false);

  const handleInputChange = (value) => {
    setInput(value);
    if (mode !== false) {
      setOutput(btoa(encodeURIComponent(value)));
    } else {
      setOutput(decodeURIComponent(atob(value)));
    }
  };

  const handleSwitch = () => {
    let temp = input;
    setInput(output);
    setOutput(temp);

    setMode(!mode);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <AnimatedLogo />
      <h1>{mode ? 'Encoder' : 'Decoder'}</h1>
      <InputForm value={input} onChange={handleInputChange} />
      <button onClick={handleSwitch}>Switch</button>
      <GeneratedCode value={output || 'No output'} />
    </div>
  );
}

export default App;
