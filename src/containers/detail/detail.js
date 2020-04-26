import React from 'react';
import { Button } from 'antd';
import './detail.css'
import { withRouter } from 'react-router'
import { PlusOutlined} from '@ant-design/icons';
class Container extends React.Component {
	render() {
		return (
			<div>
				<h2>详情</h2>
				<Button
					type="primary"
					shape="round"
					onClick={() => this.props.history.push('/home')}
					icon={<PlusOutlined />}
				>转至首页</Button>
			</div>
		)
	}
}

export default withRouter(Container)