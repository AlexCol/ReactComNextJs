interface ButtonProps {
  onClickCustm: (num: number) => void;
}

function ButtonComponent({ onClickCustm }: ButtonProps) {
  console.log('Button renderizado'); // Indicador para verificar se o componente é renderizado
  var incValue = 3;
  return <button onClick={() => onClickCustm(incValue)}>+{incValue}</button>;
}
export default ButtonComponent