import React from 'react'

class Welcome extends React.Component{
    render(){
        const todoList = ['Learn React','Learn Redux']
        const isLogin = true
        const test = <h1>Hello React</h1>
        console.log(test)
        return(
            <div calssName="this" htmlFor="">
                <h1>Hello React </h1>
                {'abc'}
                {12+12}
                {[1,2,3]}
                {<p>this is new</p>}
                <p>this is new</p>
                <ul>
                    {
                        todoList.map(item =>
                        <li>{item}</li>
                        )
                    }
                </ul>
                { isLogin ? <p>你已经登录</p> : <p>请登录</p>}
            </div>
        )
    }
}

export default  Welcome