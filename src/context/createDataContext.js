import { createContext, useReducer } from 'react';

export default function createDataContext({ reducer, actions, initialState }) {
  const Context = createContext();

  function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = Object.entries(actions).map(([key, action]) => [key, action({ dispatch })]);

    return (
      <Context.Provider value={{ state, ...Object.fromEntries(boundActions) }}>
        {children}
      </Context.Provider>
    );
  }

  return { Context, Provider };
}
