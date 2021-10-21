import React from 'react';
import { Result } from 'antd-mobile'
import './index.scss'

export default class Page404 extends React.PureComponent {

    myImg = src => <img src={src} className="spe am-icon am-icon-md icon" alt="" />;
    render() {
        return (
            <div className="container-pages">
                <div className="container c-bg-fff">
                    <div className='p404'>
                        <Result
                            img={this.myImg("/image/error.png")}
                            title="页面未找到"
                            message={<div className="mt80"><a className="lnk" href="/">返回首页</a></div>}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
