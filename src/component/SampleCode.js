import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../stylesheet/SampleCode.css'

class SampleCode extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  settreedata = `{
  keys: [100, 90, 80, 85, 83, 103, 110, 120, 130]
}`
  settreecode = `let tree = new std.SetTree();
data.keys.map(n => tree.insert(n));
`

  maptreedata = `{
  keys: [100, 90, 80, 85, 83, 103, 110, 120, 130]
}`
  maptreecode = `let tree = new std.MapTree();
data.keys.map(
  n=>tree.insert(n, 'number' + n.toString())
);
`

  listdata = `{
  push: [6, 3, 2, 1, 5]
}`
  listcode = `var li = new List();
  li.pushBack(1);
  li.pushBack(2);
  li.pushFront(3);
  li.pushBack(4);
  li.pushBack(5);
  li.popBack();
  li.popFront();
`

  queuedata = `{
  base: [1,2,3,4],
  push: [5,6,7,8]
}`
  queuecode = `var qu = new Queue();
qu.push(1);
qu.push(2);
qu.push(3);
qu.push(4);
qu.pop();
qu.pop();
`

  pqdata = `{
  push: [1,5,3,4,7,2,9,15,6,8]
}`
  pqcode = `var pq = new PriorityQueue();
  pq.push(1);
  pq.push(2);
  pq.push(0);
  pq.pop();
`

stackdata = `{}`
stackcode = `var st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.pop();
st.pop();
`

  closeButton = () => {
    this.setState({ open: !this.state.open })
  }
  clickButton = (code, data) => {
    this.props.changeSample(code, data);
    this.closeButton();
  }

  render() {
    return (
      <div className='samplecode'>
        <button className='samplecodebutton' onClick={this.closeButton}>Examples</button>
        {(this.state.open) ?
          <div className='coverDom2'>
            <div className='changecodecontent'>
              {/* <button className='gosample' onClick={() => this.clickButton(this.settreecode, this.settreedata)}>SetTree Example</button> */}
              {/* <button className='gosample' onClick={() => this.clickButton(this.maptreecode, this.maptreedata)}>MapTree Example</button> */}
              <button className='gosample' onClick={() => this.clickButton(this.listcode, this.listdata)}>List Example</button>
              <button className='gosample' onClick={() => this.clickButton(this.stackcode, this.stackdata)}>Stack Example</button>
              <button className='gosample' onClick={() => this.clickButton(this.queuecode, this.queuedata)}>Queue Example</button>
              <button className='gosample' onClick={() => this.clickButton(this.pqcode, this.pqdata)}>Priority Queue Example</button>
              <button className='closeshowdata' onClick={this.closeButton}>close</button>
            </div>
          </div>
          : null}
      </div>
    )
  }
}

SampleCode.propTypes = {
  changeSample: PropTypes.func
}

SampleCode.defaultProps = {
  changeSample: f => f
}

export default SampleCode;