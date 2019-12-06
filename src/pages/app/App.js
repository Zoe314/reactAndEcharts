import React from 'react';
import './App.css';
import { Button, Layout, Menu, Breadcrumb, Icon } from 'antd';

import LineJsx from './line'  //自定义的线性图表组件
import Test from './test'  //柱状图
import Pie from './pie'  //饼图

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <span>按钮：</span>

        <Button type="primary"> 我是一个button</Button>

      </header> */}

      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      subnav 1
                </span>
                  }
                >
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      subnav 2
                </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
                </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '10px', minHeight: 280,display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap: 'wrap',alignItems:'center' }}>

              <Pie style={{ width: '100%', height: '100%',}} />
              <LineJsx />


              {/*<Test data={{
                xdata: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                ydata: {
                  ydata1: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  ydata2: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                }
              }} /> */}


            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

      {/* <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="cloud-o" />
              <span className="nav-text">nav 5</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="appstore-o" />
              <span className="nav-text">nav 6</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="team" />
              <span className="nav-text">nav 7</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="shop" />
              <span className="nav-text">nav 8</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              ...
          <br />
              Really
          <br />
              ...
          <br />
              <LineJsx />
              <br />
              ...
          <br />
              long
          <br />
              ...



              <Test data={{
                xdata: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                ydata: {
                  ydata1: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  ydata2: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                }
              }} />
              ...
          <br />
              ...
          <br />

              ...
          <br />
              ...
          <br />
              ...
          <br />
              content
        </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>, */}


    </div>
  );
}

export default App;
