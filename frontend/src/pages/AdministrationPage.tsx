import React, { useState } from 'react';
import { Layout, Card, Table, Form, Input, Select, Button, Typography, message } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const AdministrationPage = () => {
  const [users, setUsers] = useState<{
    lastName: string;
    firstName: string;
    middleName: string;
    phoneNumber: string;
    role: string;
    email: string;
  }[]>([]);
  const [roles, setRoles] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState<{
    lastName: string;
    firstName: string;
    middleName: string;
    phoneNumber: string;
    role: string;
    email: string;
  }>({
    lastName: '',
    firstName: '',
    middleName: '',
    phoneNumber: '',
    role: '',
    email: '',
  });

  const columns = [
    {
      title: 'Фамилия',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Имя',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Отчество',
      dataIndex: 'middleName',
      key: 'middleName',
    },
    {
      title: 'Контактный номер',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Роль',
      dataIndex: 'role',
      key: 'role'
    },
    {
      title: 'Логин (email)',
      dataIndex: 'email',
      key: 'email',
    },
  ];;

  const handleCreateUser = () => {
 
    setUsers([...users, formData]);
  };

  const handleRoleChange = (value:any) => {
    setFormData({ ...formData, role: value });
  };

  function resetForm() {
    setFormData({
      lastName: '',
      firstName: '',
      middleName: '',
      phoneNumber: '',
      role: '',
      email: '',
    });
  }

  return (
    <Layout>
      <Card>
        <Title level={2}>Пользователи</Title>
        <Form>
          <Form.Item label="Фамилия">
            <Input
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </Form.Item>
    <Form.Item label="Имя">
  <Input
    value={formData.firstName}
    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
  />
</Form.Item>
<Form.Item label="Отчество">
  <Input
    value={formData.middleName}
    onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
  />
</Form.Item>
<Form.Item label="Контактный номер">
  <Input
    value={formData.phoneNumber}
    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
  />
</Form.Item>
<Form.Item label="Роль">
  <Select
    value={formData.role}
    onChange={(value) => handleRoleChange(value)}
  >
    {roles.map((role) => (
      <Option key={role} value={role}>
        {role}
      </Option>
    ))}
  </Select>
</Form.Item>
<Form.Item label="Логин (email)">
  <Input
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  />
</Form.Item>

<Button type="primary" htmlType="button" onClick={handleCreateUser}>
  Создать пользователя
</Button>
</Form>
</Card>
<Card>
<Table columns={columns} dataSource={users} pagination={{ pageSize: 10 }} />
</Card>
</Layout>
);
};

export default AdministrationPage;