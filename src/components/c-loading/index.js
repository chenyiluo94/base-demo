import React from 'react';
import './index.scss'
export default class Loading extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loadName: '',
      color: this.props.color || '#1BC573'
    };
  }
  componentWillMount() {
    this.getName()
  }
  getName() {
    let loadName = '正在加载'
    this.setState({ loadName })
  }
  render() {
    const { loadName, color } = this.state
    let loadingText = this.props.loadingText ? this.props.loadingText : '正在努力加载';
    return (<div className={`loading-component-c pages-min-height tc  ${this.props.show ? 'show' : 'hide'}`}>
      <div className="loading-box">
        <h3 className='fw-5 pt20 pb10 c-loading-text' style={{color}}>{loadName || ''}</h3>
        <p className='c-loading-text'  style={{color}}>{loadingText}</p>
        <div className='la-ball-pulse center-block' style={{color}}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </div>)
  }
}