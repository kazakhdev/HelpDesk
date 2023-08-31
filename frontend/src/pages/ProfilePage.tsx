import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Row, Col, Typography, Space } from "antd";
import Layout from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { getUser } from "../services/authService";
import { IUser } from "../common/IUser";
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
const { Title, Text } = Typography;

const ProfilePage = () => {
  const [user,setUser] =useState<IUser>()
  useEffect(()=>{
      const fetchUserDate = async()=>{
          const res =await getUser();
          // setUser(res)
      }
      fetchUserDate();
  },[])
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <Layout>
        <Title level={2}>Профиль</Title>
      <Card>
        <BackButton/>
        <Row align="middle">
          <Col flex="none">
            <Avatar size={200} icon={<UserOutlined />} />
          </Col>
          <Col flex="auto" style={{ paddingLeft: "40px",marginBottom:"80px" }}>
            <Title level={2}>{user?.firstName} {user?.lastName} {user?.middleName}</Title>
            <Text type="secondary">Почта: {user?.email}</Text>
            <br/><br/>
            <Row>
                <Col flex={1} style={{fontSize:"18px"}}>
                    <Text strong>Телефон: {user?.phoneNumber ? user?.phoneNumber :"Отсутствует"}</Text><br/>
                    <Text strong>Организация: {user?.organization ? user?.organization :"Отсутствует"}</Text><br/>
                    <Text strong>Проекты: {user?.projects ? user?.projects :"Отсутствует"}</Text><br/>
                    <Text strong>Роль: {user?.role ? user?.role :"Отсутствует"}</Text><br/>
                </Col>
                {/* <Col flex={1} style={{fontSize:"18px"}}>
                
                <Text>1</Text><br/>
                <Text>1</Text><br/>
                </Col> */}
            </Row>
            {/* Add your additional profile information here */}
          </Col>
        </Row>
      </Card>
      <Pagination total={500} itemRender={itemRender} />
    </Layout>
  );
};

export { ProfilePage };
