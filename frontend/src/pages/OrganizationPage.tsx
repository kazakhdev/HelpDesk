import React, { useState } from 'react';
import { Layout, Card, Button, Typography, Modal, Form, Divider } from 'antd';

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
  { value: "Жанарка", label: "Жанарка" },
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

const OrganizationPage = () => {
  const [organizationModalVisible, setOrganizationModalVisible] = useState(false);
  const [roleModalVisible, setRoleModalVisible] = useState(false);

  const showOrganizationModal = () => {
    setOrganizationModalVisible(true);
  };

  const hideOrganizationModal = () => {
    setOrganizationModalVisible(false);
  };

  const showRoleModal = () => {
    setRoleModalVisible(true);
  };

  const hideRoleModal = () => {
    setRoleModalVisible(false);
  };

  return (
    <Layout>
      <Card>
        <Title>Организация</Title>
      </Card>
      <Card>
        <Title level={2}>Список Организаций</Title>

      </Card>
      <Modal
        title="Создание организации"
        visible={organizationModalVisible}
        onOk={hideOrganizationModal}
        onCancel={hideOrganizationModal}
      >
        {/* Форма для создания организации */}
      </Modal>
      <Modal
        title="Создание роли"
        visible={roleModalVisible}
        onOk={hideRoleModal}
        onCancel={hideRoleModal}
      >
        {/* Форма для создания роли */}
      </Modal>
    </Layout>
  );
};

export default OrganizationPage;