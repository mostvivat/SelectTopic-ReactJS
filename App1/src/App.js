import React from 'react'
import { userContext } from './context'
import Header from './context-header'
import Content from './context-content'

export default function App() {
    return (
        <userContext.Provider value={'Tom Jerry'}>
            <Header/>
            <Content/>
        </userContext.Provider>
    ) 
}
