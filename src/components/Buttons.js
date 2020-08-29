import React from 'react';

class Buttons extends React.Component{
    render(){
        return(
            <div className='num-pads'>
                <button id='clear' value='' onClick={this.props.input}>
                    Clear
                </button>
                <button id='subtract' value='-' onClick={this.props.input}>
                    -
                </button>
                <button id='divide' value='/' onClick={this.props.input}>
                    /
                </button>
                <button id='multiply' value='*' onClick={this.props.input}>
                    X
                </button>
                <button id='nine' value='9' onClick={this.props.input}>
                    9
                </button>
                <button id='eight' value='8' onClick={this.props.input}>
                    8
                </button>
                <button id='seven' value='7' onClick={this.props.input}>
                    7
                </button>
                <button id='add' value='+' onClick={this.props.input}>
                    +
                </button>
                <button id='six' value='6' onClick={this.props.input}>
                    6
                </button>
                <button id='five' value='5' onClick={this.props.input}>
                    5
                </button>
                <button id='four' value='4' onClick={this.props.input}>
                    4
                </button>
                <button id='decimal' value='.' onClick={this.props.input}>
                    .
                </button>
                <button id='three' value='3' onClick={this.props.input}>
                    3
                </button>
                <button id='two' value='2' onClick={this.props.input}>
                    2
                </button>
                <button id='one' value='1' onClick={this.props.input}>
                    1
                </button>
                <button id='equals' value='=' onClick={this.props.input} >
                    =
                </button>
                <button id='zero' value='0' onClick={this.props.input}>
                    0
                </button>
            </div>
        )
    }
}

export default Buttons;