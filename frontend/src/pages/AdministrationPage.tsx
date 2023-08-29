import React, { useState } from 'react';
import { Layout, Card, Button, Typography, Modal, Form, Divider } from 'antd';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

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
      <Pagination total={500} itemRender={itemRender} />
    </Layout>
  );
};

export default AdministrationPage;