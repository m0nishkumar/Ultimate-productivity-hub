import React, { useState } from 'react';
 // You can style your calculator in a separate CSS file

export function Calculator({balance,display,setDisplay}) {
// State for the display screen

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // Use the eval() function to calculate the result
        const result = eval(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      // Clear the display
      setDisplay('');
    } else {
      // Append the clicked button value to the display
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      {(display=='')?<div className="displayCall">0</div>:<div className="displayCal">{display}</div>}
      <div className="buttonsCal">
      <button className='buttonCalOuter shadow-2xl' onClick={() => handleButtonClick('C')}>C</button>
      <button className='buttonCalOuter' onClick={() => handleButtonClick('C')}>%</button>
      <button className='buttonCalOuter' onClick={() => handleButtonClick('C')}>x</button>
      <button className='buttonCalOuter' onClick={() => handleButtonClick('/')}>/</button>
        <button className='buttonCal' onClick={() => handleButtonClick('7')}>7</button>
        <button className='buttonCal' onClick={() => handleButtonClick('8')}>8</button>
        <button className='buttonCal' onClick={() => handleButtonClick('9')}>9</button>
        <button className='buttonCalOuter' onClick={() => handleButtonClick('+')}>+</button>
        <button className='buttonCal' onClick={() => handleButtonClick('4')}>4</button>
        <button className='buttonCal' onClick={() => handleButtonClick('5')}>5</button>
        <button className='buttonCal' onClick={() => handleButtonClick('6')}>6</button>
        <button className='buttonCalOuter' onClick={() => handleButtonClick('-')}>-</button>
        <button className='buttonCal' onClick={() => handleButtonClick('1')}>1</button>
        <button className='buttonCal' onClick={() => handleButtonClick('2')}>2</button>
        <button className='buttonCal' onClick={() => handleButtonClick('3')}>3</button>
        <button className='buttonCalOuter' onClick={() => handleButtonClick('*')}>*</button>
        <button className='buttonCal' onClick={() => handleButtonClick('0')}>0</button>
        <button className='buttonCal' onClick={() => handleButtonClick('00')}>00</button>
        <button className='buttonCal' onClick={() => handleButtonClick('.')}>.</button>
        <button className='buttonCalOuterr' onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

