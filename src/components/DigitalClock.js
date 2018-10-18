import React from 'react'

class DigitalClock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },3000)
    }
    componentDidUpdate(currentState,state){
        console.log(state)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
            <div className="digital-clock-component jumbotron">
                <h1>{this.state.date.toLocaleTimeString()}</h1>

            </div>
        )
    }
}

export default DigitalClock