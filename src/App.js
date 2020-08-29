import React from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';

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
    const {value}=e.target;

    switch(value){
      case '':{
        this.setState({
          expression:'0',
        });
        break;
      }

      case '=':{
        const evaluated=eval(expression);
        this.setState({
          expression:evaluated
        });
        console.log('sup');
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
        if(['+','-','*','/'].includes(value)){
          if(['+','-','*','/'].includes(lastPressed) && value!=='-'){
            const lastNumIdx=expression.split('').reverse().findIndex(char=>char!==' ' && [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].includes(+char));
            e=expression.slice(0,expression.length-lastNumIdx)+value;
          }else{
            e=`${expression} ${value}`;
          }
        }else{
          e=(expression==='0')?value:(expression+value);
        }

        this.setState({
          expression:e
        });
      }
    }

    this.setState({
      lastPressed:value
    })
  }

  render(){
    return(
      <div className='container'>
        <Display value={this.state.expression} />
        <Buttons input={this.handleKeypress} />
      </div>
    )
  }
}

export default App;
