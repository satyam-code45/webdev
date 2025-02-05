import { useState, useContext, createContext } from "react";

const CountContext = createContext();

function App() {
  return (
    <div>
      <CountContextProvider>
        <Counter />
      </CountContextProvider>
    </div>
  );
}

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Counter() {
  return (
    <div>
       <Value />
      <Increase />
      <Decrease />
     
    </div>
  );
}

function Value() {
  const { count } = useContext(CountContext);
  return (
    <>
      <div>count: {count}</div>
    </>
  );
}

function Decrease() {
  const { setCount } = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </>
  );
}

function Increase() {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </>
  );
}

export default App;
