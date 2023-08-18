import React, {Component} from 'react'
export default class Button extends Component {
    showAlert(msg) {
        alert(msg)
    }
    
    onClickButtonOK = () => { //Event Handler แบบ Arrow Function
        this.showAlert('Hello') //ใช้ this ได้เลย โดยไม่เกิดปัญหา
    }
    render() {
        return <button onClick={this.onClickButtonOK}>OK</button>
    }
}