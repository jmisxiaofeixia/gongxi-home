import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import Home from './containers/home/home';
import Detail from './containers/detail/detail';
import config from './config/index';
import * as Request from './network/request';
import { Row, Col, Dropdown, Divider } from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import GXKJlog from './static/image/gxkjlog.png';
import gzh2 from './static/image/gzh2.png';
import downlog from './static/image/downlogo.png'
import wx2 from './static/image/wx2.png'
import detail from './containers/detail/detail';

const { SubMenu } = Menu;

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    if (this.props.history.location.pathname === '/') {
      // this.props.history.push('/index');
    }
  };

   menu = (
  <Menu>
    <SubMenu title="数字证书&身份认证">
      <Menu.Item><a onClick={()=>this.props.history.push('/detail')}>数字证书服务</a></Menu.Item>
      <Menu.Item>硬件产品</Menu.Item>
      <Menu.Item>可信网络身份认证</Menu.Item>
    </SubMenu>
    <Menu.Item >电子签章</Menu.Item>
    <Menu.Item >电子合同</Menu.Item>
    <Menu.Item >电子证照</Menu.Item>
  </Menu>
);

  render() {
    return (
      <Layout style={{ minWidth: '1300px' }}>
        <header className='header'>
          <div className='topbg'>
            <img className="top-item" style={{height: '101px', width: '280px'}} src={GXKJlog}></img>
            <a className="top-item" style={{ color: 'black', fontSize: '20px' }} onClick={() => this.props.history.push('/')}>
              首页
                </a>
            <Dropdown className="top-item" overlay={menu}>
              <a
                style={{ color: 'black', fontSize: '20px' }}
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                我们能做
                  </a>
            </Dropdown>
            <a className="top-item" style={{ color: 'black', fontSize: '20px' }}  onClick={() => this.props.history.push('/detail')}>
              我们做过
                </a>
            <a className="top-item" style={{ color: 'black', fontSize: '20px' }}>
              安全合规
                </a>
            <a className="top-item" style={{ color: 'black', fontSize: '20px' }}>
              关于我们
                </a>
          </div>
        </header>

        <body>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={detail} />
          </Switch>
        </body>
        <div className="dowm">
          <div>
            <img src={wx2}></img>
            <b>企业微信</b>
          </div>
          <div>
            <img src={downlog} style={{ marginBottom: '12px', height: '33px', width: '200px'}}></img>
            <b>电话：0851-85360110   86587332</b>
            <b>地址：贵州省贵阳市云岩区延安西路1号建设大厦</b>
          </div>
          <div>
            <img src={gzh2}></img>
            <b>官方公众号</b>
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(App);
