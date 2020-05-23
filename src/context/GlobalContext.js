import React, { createContext, useContext, useReducer } from 'react';
import { globalReducer } from '../reducers';

export const initialState = {
    products: [
        {   
            id: '1',
            name: 'Product 1',
            price: '$199',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
            image: '/p1.png',
          },
          {
            id: '2',
            name: 'Product 2',
            price: '$59',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
            image: '/p2.png',
          },
          {
            id: '3',
            name: 'Product 3',
            price: '$99',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
            image: '/p3.png',
          },
          {
            id: '4',
            name: 'Product 4',
            price: '$119',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
            image: '/p4.png',
          },
          {
            id: '5',
            name: 'Product 5',
            price: '$159',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
            image: '/p5.png',
          }
    ],
    cart: [],
    wishlist: [],
}

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

function useGlobalState() {
    const context = useContext(GlobalStateContext);

    if (context === undefined) {
        throw new Error("useGlobalState must be used GlobalProvider")
    }

    return context;
}

function useGlobalDispatch() {
    const context = useContext(GlobalDispatchContext);

    if (context === undefined) {
        throw new Error("useGlobalDispatch must be used GlobalProvider")
    }

    return context;
}

export const useGlobal = () => [ useGlobalState(), useGlobalDispatch() ];

export const GlobalProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(globalReducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}
