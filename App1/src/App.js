import React from 'react'
import { userContext } from './context/context'
import Header from './context/context-header'
import Content from './context/context-content'
import Header2 from './context/context-header2'
import Content2 from './context/context-content2'


export default function App() {
    let[user,setUser]= React.useState('');
    return (
        <userContext.Provider value={[user,setUser]}>
            <Header2/>
            {/* <Header/> */}
            {/* <Content/> */}
            <Content2/>
        </userContext.Provider>
    ) 
}
