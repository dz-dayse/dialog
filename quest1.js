import React, { useState } from 'react';

const Dialog = () => {
 const [idade, setIdade] = useState(0);

 const handleChange = (event) => {
    setIdade(event.target.value);
 };

 return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>Antes de iniciarmos vamos saber mais sobre você</h1>
      <label style={{ color: 'black' }}>
        
        
      </label>
      <label style={{ color: 'purple' }}>
        Qual sua idade:
        <select
          value={idade}
          onChange={handleChange}
          style={{ backgroundColor: 'purple', color: 'white' }}
        >
          {[...Array(90).keys()].map((value) => (
            <option key={value + 1} value={value + 1}>
              {value + 1}
            </option>
          ))}
        </select>
      </label>
    </div>
 );
};

export default Dialog;