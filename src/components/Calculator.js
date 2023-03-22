import './Calculator.css';

const CalcInside = (porps) => {
  const { calcText, colorClass } = porps;

  return (
    <div className={`wrap ${colorClass}`}>
      <p>{calcText}</p>
    </div>
  );
};

// f5913e e0e0e0

const Calculator = () => (
  <div className="calculator">
    <input type="text" placeholder="0" />
    <div className="calc-content">
      <CalcInside calcText="AC" colorClass="gray" />
      <CalcInside calcText="+/-" colorClass="gray" />
      <CalcInside calcText="%" colorClass="gray" />
      <CalcInside calcText="÷" colorClass="orange" />
      <CalcInside calcText="7" colorClass="gray" />
      <CalcInside calcText="8" colorClass="gray" />
      <CalcInside calcText="9" colorClass="gray" />
      <CalcInside calcText="x" colorClass="orange" />
      <CalcInside calcText="4" colorClass="gray" />
      <CalcInside calcText="5" colorClass="gray" />
      <CalcInside calcText="6" colorClass="gray" />
      <CalcInside calcText="-" colorClass="orange" />
      <CalcInside calcText="1" colorClass="gray" />
      <CalcInside calcText="2" colorClass="gray" />
      <CalcInside calcText="3" colorClass="gray" />
      <CalcInside calcText="+" colorClass="orange" />
      <CalcInside calcText="0" colorClass="gray wide" />
      <CalcInside calcText="." colorClass="gray" />
      <CalcInside calcText="=" colorClass="orange" />
    </div>
  </div>
);

export default Calculator;
