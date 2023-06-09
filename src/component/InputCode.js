import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../stylesheet/InputCode.css'

const dump = `
a.push();
a.push().push();
a.dfs()().bc().pushBack();
abc.def.cd()
abc.def().cde.pushBack();
abc[].push()
abc.push(dec.push())
if(ab.pop())
`

class InputCode extends Component {
  constructor() {
    super()
    this.code = `
    var li = new List();
    li.pushBack(1);
    li.pushFront(2);
    li.pushFront(3);
    li.pushBack(4);
    li.pushBack(5);
    li.popBack();
    li.popFront();
`
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submit) {
      this.props.getCode(this.txtarea.value)
    }

    if (nextProps.sampleCode !== ``) {
      this.txtarea.value = nextProps.sampleCode;
    }
  }

  render() {
    return (
      <div className='code-write'>
        {/* <div className = 'fixedCode'>import std from 'js_dsal'</div>
        <div className = 'fixedCode'>const data = inputDataObject</div> */}
        <textarea ref={input => this.txtarea = input} className='code-write' spellCheck='false' wrap='off' defaultValue={this.code}>
        </textarea>
      </div>
    )
  }
}

InputCode.propTypes = {
  submit: PropTypes.bool,
  getCode: PropTypes.func,
  sampleCode: PropTypes.string
}

InputCode.defaultProps = {
  submit: false,
  getCode: f => f,
  sampleCode: ``,
}

export default InputCode