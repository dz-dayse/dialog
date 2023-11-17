import React, { useState } from 'react';

const App = () => {
 const [dataDiagnostico, setDataDiagnostico] = useState(1900);

 const handleChange = (event) => {
    setDataDiagnostico(event.target.value);
 };

 return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>Qual o ano do seu diagnóstico</h1>
      <label style={{ color: 'purple' }}>
        
      </label>
      <label style={{ color: 'black' }}>
        Quando foi seu diagnóstico:
        <select
          value={dataDiagnostico}
          onChange={handleChange}
          style={{ backgroundColor: 'purple', color: 'white' }}
        >
          {[...Array(221).keys()].map((value) => (
            <option key={value + 1900} value={value + 1900}>
              {value + 1900}
            </option>
          ))}
        </select>
      </label>
    </div>
 );
};

export default App;