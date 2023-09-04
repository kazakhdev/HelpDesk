import React, { useEffect, useState } from 'react';
import { Layout, Card, Button, Typography, Modal, Form, Divider, Row, Col, Table, Input, Select, Space } from 'antd';
import { IOrganization } from '../common/IOrganizations';
import { getAllOrganizations, postOrganization, putOrganization } from '../services/organizationService';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;
const kazakhstanCities = [
  { value: "Алматы", label: "Алматы" },
  { value: "Нур-Султан", label: "Нур-Султан" },
  { value: "Шымкент", label: "Шымкент" },
  { value: "Караганда", label: "Караганда" },
  { value: "Актобе", label: "Актобе" },
  { value: "Тараз", label: "Тараз" },
  { value: "Павлодар", label: "Павлодар" },
  { value: "Усть-Каменогорск", label: "Усть-Каменогорск" },
  { value: "Костанай", label: "Костанай" },
  { value: "Кызылорда", label: "Кызылорда" },
  { value: "Атырау", label: "Атырау" },
  { value: "Петропавловск", label: "Петропавловск" },
  { value: "Актау", label: "Актау" },
  { value: "Темиртау", label: "Темиртау" },
  { value: "Туркестан", label: "Туркестан" },
  { value: "Кокшетау", label: "Кокшетау" },
  { value: "Талдыкорган", label: "Талдыкорган" },
  { value: "Экибастуз", label: "Экибастуз" },
  { value: "Рудный", label: "Рудный" },
  { value: "Семей", label: "Семей" },
  { value: "Жезказган", label: "Жезказган" },
];
const columns =[
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'БИН',
    dataIndex: 'bin',
    key: 'bin',
  },
  {
    title: 'Имя руководителя',
    dataIndex: 'headFirstName',
    key: 'headFirstName',
  },
  {
    title: 'Фамилия руководителя',
    dataIndex: 'headLastName',
    key: 'contacts',
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Город',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Проекты',
    dataIndex: 'projects',
    key: 'projects',
  }
]
const OrganizationPageList = () => {
  // const [organizationModalVisible, setOrganizationModalVisible] = useState(false);
  // const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [organizations, setOrganizationss] =useState<IOrganization[]>()
  const navigation =useNavigate();

useEffect(()=>{
  const fetchOrganizations =async()=>{
    const res = await getAllOrganizations();
    setOrganizationss(res)
  }
  fetchOrganizations();
},[])
const createOrganization=async()=>{
  const id = await postOrganization();
  if (typeof id === 'string') {
    // Провека является id строкой 
   navigation(`/Organization/${id}`)
 } else {
   console.error('Error: id is not a valid string.');
 }
}

  return (
    <Layout>
      <Card>
        <Title>Организация</Title>
        <Button onClick={()=>createOrganization()}>Создать</Button>
      </Card>
      <Card>
        <Title level={2}>Список Организаций</Title>
        <Space/>
        <Table columns={columns} dataSource={organizations}></Table>
      </Card>
    </Layout>
  );
};

export default OrganizationPageList;