import React from 'react';
import './index.scss';
import ajax, { ErrorCode } from '@utils/ajax'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={ 
            
        }
    }
    onClickItem = () => {
        //replace替换
        this.props.history.push('/page')
    }
    onClickItem2=()=>{
        ajax.get('/v1/allapp', {}).then((res) => {
            // removeDudaoSession()
            if (res.errno !== ErrorCode.succ) {
                console.log('1111');
              return
            }
            console.log('成功');
          }, (res) => {
            console.log('失败');
          })
    }
    render() {
        return (
            <div className="home-info">
                <div>我是第一个页面</div>
                <button className="home-button" onClick={this.onClickItem}>跳转</button>
                <button className="home-button" onClick={this.onClickItem2}>网络请求</button>
            </div>
        );
    }
}

export default Home;