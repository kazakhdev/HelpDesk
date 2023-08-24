import { Layout, Card, Button, Typography, Modal, Form, Divider, Space, Row, Col } from 'antd';
import { useState } from 'react';
import { InputItems } from '../common/InputItems';
import { CustomForm } from '../components/CustomForm';

const { Title } = Typography;

const TreatmentPage = () => {
  const inputs: InputItems[] = [
    {
      key: '1',
      label: 'title',
      placeholder: 'Введите название',
    },
    {
      key: '2',
      label: 'description',
      placeholder: 'Введите описание',
    },
  ];

  const [open, setOpen] = useState(false);
  const [treatments, setTreatments] = useState<{ title: string; description: string }[]>([]);
  ;
  const handlePost = (values: { title: string, description: string }) => {
    const newTreatments = [...treatments, values]; 
    setTreatments(newTreatments);

    
    localStorage.setItem('treatments', JSON.stringify(newTreatments));

    hideModal(); 
  };

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const renderCards = () => {
    return treatments.map((treatment, index) => (
      <Col xs={24} sm={24} md={16} lg={12} xl={8} key={index}>
        <Card title={`Обращение ${index}`}>
          <p>Название: {treatment.title}</p>
          <p>Описание: {treatment.description}</p>
        </Card>
      </Col>
    ));
  };

  return (
    <Layout>
      <Card>
        <Title>Создать обращение</Title>
        <Button onClick={showModal}>Создать Обращение</Button>
      </Card>
      <Card>
        <Title level={2}>Список ваших обращений</Title>
        <Row gutter={[16, 16]}>{renderCards()}</Row>
      </Card>
      <Modal
        title="Обращение"
        visible={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Создать"
        cancelText="Отмена"
      >
        <CustomForm handleMethod={handlePost} Inputs={inputs}></CustomForm>
      </Modal>
    </Layout>
  );
};

export { TreatmentPage };
