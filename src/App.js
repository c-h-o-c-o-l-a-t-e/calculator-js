import React from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';
const nums=[7,8,9,4,5,6,1,2,3,0];
const ops=['+','-','*','/'];

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      lastPressed:undefined,
      expression:'0'
    }
    this.handleKeypress=this.handleKeypress.bind(this);
  }

  handleKeypress(e){
    const {expression,lastPressed}=this.state;
    const {innerText}=e.target;

    switch(innerText){
      case 'Clear':{
        this.setState({
          expression:'0',
        });
        break;
      }

      case '=':{
        const evaluated=eval(expression);
        this.setState({
          expression:evaluated
        })
        break;
      }

      case '.':{
        const splitted=expression.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];

        if(!last.includes('.')){
          this.setState({
            expression:expression+'.'
          })
        }
        break;
      }

      default:{
        let e;
        if(ops.includes(innerText)){
          if(ops.includes(lastPressed) && innerText!=='-'){
            const lastNumIdx=expression.split('').reverse().findIndex(char=>char!==' ' && nums.includes(+char));
            e=expression.slice(0,expression.length-lastNumIdx)+innerText;
          }else{
            e=`${expression} ${innerText}`;
          }
        }else{
          e=(expression==='0')?innerText:(expression+innerText);
        }

        this.setState({
          expression:e
        });
      }
    }

    this.setState({
      lastPressed:innerText
    })
  }

  render(){
    return(
      <div className='container'>
        <Display value={this.state.expression} />
        <Buttons input={this.handleKeypress} nums={nums} ops={ops} />
      </div>
    )
  }
}

export default App;
