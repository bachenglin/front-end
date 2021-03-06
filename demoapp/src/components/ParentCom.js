import React, { Component } from 'react'
import RegCom from './RegCom'
import PureCom from './PureCom'

class ParentCom extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"partho"
        }
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name:"partho"
            })
        },2000)
    }

    render() {
        console.log('***********parent com render **********')
        return (
            <div>
                Parent Component
                <RegCom name = {this.state.name}></RegCom>
                <PureCom name={this.state.name}></PureCom>
            </div>
        )
    }
}

export default ParentCom
