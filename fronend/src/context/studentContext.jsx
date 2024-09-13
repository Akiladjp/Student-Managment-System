import React, { createContext } from 'react'


const studentContext = createContext(null);

const studentContextProvider = (props) => {
  return (
    <studentContext.Provider value={contextValue}>
        {props.children}
    </studentContext.Provider>
  )
}

export default studentContextProvider;