import React from 'react';
import { Button } from 'antd-mobile'
import Loading from '@components/c-loading'

class Load extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    if (false && this.props.error) {
      return <div className="mt60 tc">遇到错误! <br /><Button type="ghost" className="mlr40 mt40" onClick={this.props.retry}>重试</Button></div>;
    } else if (this.props.timedOut) {
      return <div className="mt60 tc">网络较慢，请重试 <br /><Button type="ghost" className="mlr40 mt40" onClick={this.props.retry}>重试</Button></div>;
    } else if (this.props.pastDelay) {
      // return <div className="mt60 tc ">Loading...</div>;
      return <Loading></Loading>;
    } else {
      return null;
    }
  }
}

export default Load;