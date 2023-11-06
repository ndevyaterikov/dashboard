import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./store/store";

const store:Store =  new Store()

const initialState ={
    store
}

export const Context = createContext(initialState)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{
        store
    }}>
    <App />
    </Context.Provider>
);
