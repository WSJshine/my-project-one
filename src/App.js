import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
import ThemeContext from './theme-context'
import ThemedBar from './components/ThemedBar'

const tags = ['恐龙','足球小子']

const themes = {
  light:{
      className: 'btn btn-primary',
      bgColor: '#eeeeee',
      color: '#000'
  },
    dark: {
        className: 'btn btn-light',
        bgColor: '#222222',
        color: '#fff'
    },
}

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        theme:'light'
        /*comments: ['this is my first reply']*/

      }
      this.addComment = this.addComment.bind(this)
      this.changeTheme = this.changeTheme.bind(this)

  }

  changeTheme(theme){
    this.setState({
        theme,
    })
  }

  addComment(comment){
    this.setState({
        comments: [...this.state.comments,comment]//用setState方法把comments数组更新。这里用es6的...表达式
    })
  }

  render() {
    const {comments} = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            <h1 className='App-title'>Welcome to React</h1>
            <a href="#theme-switcher"
               className="btn btn-light"
               onClick={() => {this.changeTheme('light')}}
            >
                浅色主题
            </a>
              <a href="#theme-switcher"
                 className="btn btn-secondary"
                 onClick={() => {this.changeTheme('dark')}}
              >
                  深色主题</a>

            </header>
            <NameCard name="viking" number={1234567890} isHuman tags={tags}/>
            <LikesButton/>
          <DigitalClock/>

         {/* <CommentList comments={comments}/>

          <CommentBox
              commentsLength={comments.length}
              onAddComment={this.addComment}

          />*/}
          <ThemedBar/>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;

//React开发思想以及和其他思想的异同：1、状态提升  2、自伤而下的数据流   3、和双向绑定的区别