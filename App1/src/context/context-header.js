import React from 'react'
import { userContext } from './context'

export default class Header extends React.Component {
    static contextType = userContext

    render() {
        const user = this.context
        
        const headerStyle = {
            backgroundColor:'#cee', 
            textAlign:'center', 
            padding: 5
        }
    return (
        <div style={headerStyle}>
                <a href="https://www.google.co.th/">Google</a>&nbsp;-&nbsp;
                <a href=" ">Product</a>&nbsp;-&nbsp;
                <a href=" ">Contact Us</a>&nbsp;-&nbsp;&nbsp;
                [{user}&nbsp;:&nbsp;<a href=" ">Signout</a>]
        </div>
    )
    }
}
    