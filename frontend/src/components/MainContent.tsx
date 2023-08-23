import { SideBar } from "./SideBar"
import {Layout, Row, Col} from 'antd'
import {ReactNode} from 'react'
const { Header, Content } = Layout;

type MainContent ={
    children: ReactNode;
};
const MainContent =({children}:MainContent)=>{
    return (
    <>
    <SideBar/>
    <Layout>
      <Header  
        style={{
          color: '001529',
          height: '80px',
          padding:"5px 15px 0px 0px"
          
        }}
      >
      <Row>
        <Col flex={1}></Col>
        <Col >
        <div style={{
          float: 'right',
          marginLeft:"10px"
      }}>
        
        </div>
        </Col>
        </Row>
      </Header>
        <Content style={{background:"f0f2f5"}}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
          
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
    </>)
}
export {MainContent}