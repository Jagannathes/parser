import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../stylesheet/InputData.css'

class InputData extends Component {
  constructor() {
    super()
    this.inputData = `{
  a:3,
  b:6,
  c:[1,2,3]
}`
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.error, nextProps.submit)
    if(nextProps.submit) {
      this.props.getData('')
    }
    if (nextProps.error != ``) {
      this.txtarea.value = nextProps.error
    }
  }
  render() {
    return (
      <textarea ref={input=>this.txtarea=input} className='input-data' wrap='off' spellCheck='false' defaultValue={this.inputData}>
      </textarea>
    )
  }
}

InputData.propTypes = {
  getData: PropTypes.func
}

InputData.defaultProps ={
  getData: f=>f
}

export default InputData