import React,{Component}from 'react'
export default class Button extends Component {
    constructor() {
        super()
        this.onClickButtonOK = this.onClickButtonOK.bind(this)
    }
    showAlert(msg) {
      alert(msg)
    }
    onClickButtonOK() {
      //Event Handler แบบ Regular Function
      this.showAlert('Hello')
    }
    render() {
        return <button onClick={this.onClickButtonOK}>OK</button>
    }
}