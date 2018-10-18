import React from 'react'

class LikesButton extends React.Component{
    constructor(props){//接受属性的参数
        super(props)//constructor的固定方法
        this.state = {//state(状态)，组件内部的数据可以动态改变。this.setState()是更新state的唯一途径
            likes: 0

        }
        //this.increaseLikes = this.increaseLikes.bind(this)
    }
    increaseLikes(){
        /*alert(1234)
        console.log(this)*/
        this.setState({
            likes: ++this.state.likes
        })
    }
    render(){//代表界面要输出什么
        return(
            <div className={"like-button-component"}>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={() => this.increaseLikes()}
                >
                  👍{this.state.likes}
                </button>
            </div>
        )
    }
}


export default LikesButton