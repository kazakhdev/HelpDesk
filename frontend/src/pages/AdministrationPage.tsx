import React, { useState } from 'react';
import { Layout, Card, Button, Typography, Modal, Form, Divider } from 'antd';

const { Title } = Typography;

const AdministrationPage = () => {
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
        <Title>Управление</Title>
      </Card>
      <Card>
        <Title level={2}>Создание организации и роли</Title>
        <Button onClick={showOrganizationModal}>Создать организацию</Button>
        <Button onClick={showRoleModal}>Создать роль</Button>
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

export default AdministrationPage;