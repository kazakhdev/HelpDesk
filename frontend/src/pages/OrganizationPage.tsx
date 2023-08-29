import React, { useState } from 'react';
import { Layout, Card, Button, Typography, Modal, Form, Divider } from 'antd';

const { Title } = Typography;

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