import { useState } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import calculate from './logic/calculate';

const ShowResult = (props) => {
  const { output } = props;

  return (
    <div className="shwo-result">
      <p>
        {output.total}
        {' '}
        {output.operation}
        {' '}
        {output.next}
      </p>
    </div>
  );
};

ShowResult.propTypes = {
  output: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

const handleChange = (e, calcState, calcSetState) => {
  const calclated = calculate(calcState, e.target.textContent);
  calcSetState({ ...calclated });
};

const Calculator = () => {
  const [calculateResult, setCalculateResult] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  return (
    <div className="calculator">
      <ShowResult output={calculateResult} />
      <div className="calc-content">
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>AC</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>+/-</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>%</button>
        <button type="button" className="wrap orange" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>÷</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>7</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>8</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>9</button>
        <button type="button" className="wrap orange" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>x</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>4</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>5</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>6</button>
        <button type="button" className="wrap orange" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>-</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>1</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>2</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>3</button>
        <button type="button" className="wrap orange" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>+</button>
        <button type="button" className="wrap wide" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>0</button>
        <button type="button" className="wrap" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>.</button>
        <button type="button" className="wrap orange" onClick={(e) => handleChange(e, calculateResult, setCalculateResult)}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
