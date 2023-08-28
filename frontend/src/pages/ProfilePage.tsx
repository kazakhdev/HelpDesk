import { UserOutlined } from "@ant-design/icons"
import { Avatar, Card, Row, Space, Col, Typography } from "antd"
import Layout from "antd/es/layout/layout"
import { useEffect, useState } from "react"
// import { getUser } from "../services/authService"
const {Title, Text} =Typography
const ProfilePage = ()=>{

    // const [user,setUser] =useState<IUser>
    // useEffect(()=>{
    //     const fetchUserDate = async()=>{
    //         const res =getUser();
    //         console.log(res)
    //     }
    //     fetchUserDate();
    // })
    return(
        <Layout>
            <Card>
            <Row>
    <Col flex={1} style={{justifyItems:"center", alignItems:"center"}}>
    <Avatar size={200} icon={<UserOutlined/>}/>
    </Col>
    <Col flex={6}>
      
      Text
    </Col>
    </Row>
        </Card>
        </Layout>
    )
}

export {ProfilePage}