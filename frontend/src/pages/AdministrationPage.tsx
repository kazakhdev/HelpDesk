import React, { useState, useEffect } from 'react';
import { Layout, Card, Table, Form, Input, Select, Button, Typography } from 'antd';
import { get, post, put, del } from '../services/api';
import { getAllUsers } from '../services/authService';

const { Title } = Typography;
const { Option } = Select;

const AdministrationPage = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [projects, setProjects] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers(); // Adjust the API endpoint
      setUsers(response);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await get('api/Roles'); // Adjust the API endpoint
      setRoles(response.data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  const fetchOrganizations = async () => {
    try {
      const response = await get('api/Organizations'); // Adjust the API endpoint
      setOrganizations(response.data);
    } catch (error) {
      console.error('Error fetching organizations:', error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await get('api/Projects'); // Adjust the API endpoint
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
    fetchOrganizations();
    fetchProjects();
  }, []);

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
      key: 'role',
      render: (role:any) => <span>{role.name}</span>, // Assuming role object has a 'name' property
    },
    {
      title: 'Логин (email)',
      dataIndex: 'email',
      key: 'email',
    },
  ];
  

  const handleUserSubmit = async (values:any) => {
    // Handle user form submission and API requests
  };

  return (
    <Layout>
      <Card>
        <Title level={2}>Пользователи</Title>
        <Form>
          {/* User form fields */}
          {/* Role select */}
          {/* Organization select */}
          {/* Project select */}
          <Button type="primary" htmlType="submit">
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
