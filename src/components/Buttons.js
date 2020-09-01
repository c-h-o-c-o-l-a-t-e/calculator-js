import React from 'react';
const ids={
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        0:'zero',
        '+':'add',
        '-':'subtract',
        '*':'multiply',
        '/':'divide'
      };


class Buttons extends React.Component{
    render(){
        return(
            <div className='keys'>
                <div className='nums-and-ops'>
                    <div className='num-pads'>
                        {this.props.nums.map((num,idx)=>{
                            return(
                                <span key={idx+ids[num]} id={ids[num]} onClick={this.props.input} className='btn btn-outline-info' >{num}</span>
                            )
                        })}
                        <span id='decimal' value='.' onClick={this.props.input} className='btn btn-outline-info' >
                            .
                        </span>
                        <span id='equals' value='=' onClick={this.props.input} className='btn btn-outline-success' >
                            =
                        </span>
                    </div>
                    <div className='operators'>
                        {this.props.ops.map((op,idx)=>{
                            return(
                                <span key={idx+ids[op]} id={ids[op]} onClick={this.props.input} className='btn btn-outline-primary' >{op}</span>
                            )
                        })}
                    </div>
                </div>
                <div id='clear' value='' onClick={this.props.input} className='btn btn-outline-danger' >
                    Clear
                </div>
            </div>
        )
    }
}

export default Buttons;