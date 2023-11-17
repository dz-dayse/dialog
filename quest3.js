import React, { useState } from 'react';

const App = () => {
 const [terapia, setTerapia] = useState('');

 const handleChange = (event) => {
    setTerapia(event.target.value);
 };

 return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>Qual é a sua terapia de insulina</h1>
      <label style={{ color: 'black' }}>
        Terapia de insulina:
        <select
          value={terapia}
          onChange={handleChange}
          style={{ backgroundColor: 'purple', color: 'white' }}
        >
          <option value="">Selecione uma opção</option>
          <option value="Caneta/Seringa">Caneta/Seringa</option>
          <option value="Bomba de insulina">Bomba de insulina</option>
          <option value="Sem insulina">Sem insulina</option>
        </select>
      </label>
    </div>
 );
};

export default App;
