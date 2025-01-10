import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useState } from 'react';
import './App.css';

const s = {
  style: {
    color: 'red',
  },
};

type TurnableProps = {
  isOn?: boolean;
  onTurn?: () => void;
  children?: ReactNode;
  style?: React.CSSProperties;
};

const TurnOnOff = ({ children }: { children: ReactNode }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child) || typeof child.type === 'string') return child;

        // Mescla o estilo existente no componente com o estilo definido
        const mergedStyles = {
          ...child.props.style,
          ...s.style,
        };

        return cloneElement(child as ReactElement<TurnableProps>, {
          style: mergedStyles,
          isOn,
          onTurn,
        });
      })}
    </>
  );
};

const TurnedOn = ({ isOn, children, style }: TurnableProps) =>
  isOn ? <div style={style}>{children}</div> : null;

const TurnedOff = ({ isOn, children, style }: TurnableProps) =>
  !isOn ? <div style={style}>{children}</div> : null;

const TurnButton = ({ isOn, onTurn, style }: TurnableProps) => (
  <button onClick={onTurn} style={style}>
    {isOn ? 'ON' : 'OFF'}
  </button>
);

function App() {
  return (
    <TurnOnOff>
      <TurnedOn>
        <p>Aqui as coisas que vão acontecer quando estiver ON.</p>
      </TurnedOn>
      <TurnedOff>
        <p>Aqui vem as coisas do Off.</p>
      </TurnedOff>
      <TurnButton />
    </TurnOnOff>
  );
}

export default App;
