import React from 'react';
import { Button } from 'antd';
import './home.css'
import { withRouter } from 'react-router'
import { PlusOutlined } from '@ant-design/icons';
import fulllogo from '../../static/image/fulllogo.png'
import sd from '../../static/image/sd.png'
import dc from '../../static/image/dc.png'
import cs from '../../static/image/cs.png'
import niv from '../../static/image/niv.png'
import ds from '../../static/image/ds.png'

class Container extends React.Component {
	render() {
		return (
			<div className="page">
				<div class="main">
					<div className="slogan-panel">
						<span className="slogan">Being young is an accountability</span>
						<span className="slogan-chinese">科技 如你所愿</span>
					</div>
					<img className="img" src={fulllogo}></img>
				</div>
				<div className="line"></div>
				<div className="what-to-do">
					<div>
						<div className="title">我们能帮你做什么？</div>
						<div className="list">
							{
								[[sd, '应用软件定制'], [dc, '电子合同'], [cs, '云签名服务'], [niv, '可信网络身份认证'], [ds, '手写数字签名']].map(info =>
									<div className="list-item">
										<img src={info[0]}></img>
								<span>{info[1]}</span>
									</div>
								)
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Container)