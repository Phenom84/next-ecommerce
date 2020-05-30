import React, { createContext, useContext, useReducer } from 'react';
import { globalReducer } from '../reducers';

export const initialState = {
  products: [
    {
      id: '1',
      category: 'IQ Puzzle',
      name: 'Rachtangle',
      price: '$ 3.00',
      description: 'The figure has 4 corners, in the puzzle there are 4 parts. "Everything is fine, boss, I can handle it quickly," the brain reports. Then the fun begins! The brain discovers that the figures have 3 and 5 sides. They also vary greatly in size! How to put them in a simple rectangle? You will know this if you try to assemble the Rectangle.',
      image: '/p1.webp',
      rating: 3.8,
      images: [{
        src: '/p1.webp',
        alt: 'Front view'
      }, {
        src: '/back1.webp',
        alt: 'Back view'
      }],
    },
    {
      id: '2',
      category: 'IQ Puzzle',
      name: 'Number 4',
      price: '$ 3.00',
      description: 'You have a collection of puzzles and are thinking where to start? Start with the number 4 and gradually move on to the more complex and most complex, yes, straight to the "Rocket". To solve this problem, you will need to assemble a quartet of logic, imaginative thinking and ingenuity. Task: to add “Number 4” from 5 parts',
      image: '/p2.webp',
      rating: 2.3,
      images: [{
        src: '/p2.webp',
        alt: 'Front view'
      }, {
        src: '/back2.webp',
        alt: 'Back view'
      }],
    },
    {
      id: '3',
      category: 'IQ Puzzle',
      name: 'Letter M',
      price: '$ 3.00',
      description: 'What is the riddle of “IQ PUZZLE • Letter M”? As with other IQ PUZZLEs, the use of puzzle details is not obvious. You will have to sweat to fold the details into the desired shape. Task: add the letter M from 4 parts',
      image: '/p3.webp',
      rating: 4.5,
      images: [{
        src: '/p3.webp',
        alt: 'Front view'
      }, {
        src: '/back3.webp',
        alt: 'Back view'
      }],
    },
    {
      id: '4',
      category: 'IQ Puzzle',
      name: 'Gemini',
      price: '$ 3.00',
      description: 'How to have fun and usefully spend time with loved ones, how to entertain friends on the road and show your ingenuity? You can take her on a family trip or arrange a friendly challenge at a party. Objective: to add 8 pieces of “Gemini”',
      image: '/p4.webp',
      rating: 4.8,
      images: [{
        src: '/p4.webp',
        alt: 'Front view'
      }, {
        src: '/back4.webp',
        alt: 'Back view'
      }],
    },
    {
      id: '5',
      category: 'IQ Puzzle',
      name: 'Greek Cross',
      price: '$ 3.00',
      description: 'A simple figure with smooth edges. You didn’t think that you would assemble it in 5 minutes? Have you thought? Very vain, get ready for a brain explosion! The Greek cross will not come to you easily. You decide that the harmful "IQ PUZZLE" has not been reported in a set of parts. Objective: add the Greek Cross from 6 parts',
      image: '/p5.webp',
      rating: 4.3,
      images: [{
        src: '/p5.webp',
        alt: 'Front view'
      }, {
        src: '/back5.webp',
        alt: 'Back view'
      }],
    },
    {
      id: '6',
      category: 'IQ Puzzle',
      name: '“Dollar”',
      price: '$ 3.00',
      description: 'At first glance at the details, it seems that they are missing. When you try to connect them, you will think that the set contains more details than necessary. It would be very convenient if one part were divided into two. We understand your desire to simplify the task, but this figure is a professional matter. Task: to add the “Dollar” from 8 parts.',
      image: '/p6.webp',
      rating: 3.3,
      images: [{
        src: '/p6.webp',
        alt: 'Front view'
      }, {
        src: '/back6.webp',
        alt: 'Back view'
      }],
    }
  ],
  cart: [],
  wishlist: [],
  count: 1,
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

export const useGlobal = () => [useGlobalState(), useGlobalDispatch()];

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
