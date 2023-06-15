import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputCode from './InputCode'
import InputData from './InputData'
import SampleCode from './SampleCode'
import '../stylesheet/InputSection.css'
import ShowErrors from './ShowError'

class InputSection extends Component {
  constructor() {
    super()
    this.state = {
      submit: false,
      showCaution: false,
      sampleCode: ``,
      sampleData: ``,
      error:'',
      temp:''
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
   
    if (nextState.sampleCode !== ``) {
      return true;
    }
    const { submit, showCaution } = this.state;
    return (!submit && nextState.submit) || (showCaution !== nextState.showCaution)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.error)
    if(nextProps.error!='') {
      this.setState({error:nextProps.error})
    }
   
  }

  componentDidUpdate() {
    if (this.state.submit) {
      this.setState({
        submit: false,
        sampleCode: ``,
        sampleData: ``,
      })
    } else {
      this.setState({
        sampleCode: ``,
        sampleData: ``
      })
    }
  }

  changeShow = () => {
    // console.log('click')
    this.setState({ showCaution: !this.state.showCaution })
  }

  render() {
    console.log(this.props.error)
    return (
      <section className='input-section'>
        <div className='text-input1'>Write Code</div>
        {/* <button className='precaution' onClick={this.changeShow}><img className='cautionImg' src={require('../public/caution.png')} alt='caution'/></button>     */}
        <button className='input-button' onClick={input => this.setState({ submit: true })}>submit</button>
        <SampleCode changeSample={(code, data) => this.setState({ sampleCode: code, sampleData: data })} />
        <InputCode submit={this.state.submit} getCode={this.props.getCode} sampleCode={this.state.sampleCode} />
        <div className='text-input2'>Console</div>
        <ShowErrors error={this.state.error}/>
        {/* <InputData submit={this.state.submit} getData={this.props.getData} sampleData = {this.state.sampleData} error={this.state.error}/> */}
        {(this.state.showCaution)?
        <div className='coverDom'>
        <div className='cautionContent'>
          <p className='linestyle'>1. Declare variables at the top of the scope block.</p>
          <p className='linestyle'>2. Semicolon is need to the end of line</p>
          <p className='linestyle'>3. Method Chaining does not animationized</p>
          <p className='linestyle'>4. The method in parameter does not animationized</p>
          <p className='linestyle'>5. Paste the '.' and name</p>
          <p className='linestyle'>6. Make toString() function to object data. This shows you 6 characters</p>
          <button className='input-button-close' onClick={this.changeShow}>close</button>
        </div> 
        </div>
        :null}
      </section>
    )
  }
}

InputSection.propTypes = {
  getCode: PropTypes.func,
  getData: PropTypes.func,
  inputdata: PropTypes.object

}

InputSection.defaultProps = {
  getCode: f => f,
  getData: f => f
}

export default InputSection