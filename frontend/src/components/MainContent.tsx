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