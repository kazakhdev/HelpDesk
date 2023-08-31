import { Layout, Card, Typography, Form, Input, Select, Button, Row, Col} from 'antd';
import { useState } from 'react';
import { post } from '../services/api';
const { Title } = Typography;
const { Option } = Select;

const CreateTreatment = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      const response = await post('api/CreateTreatment', values); // Adjust API endpoint
      console.log('Response from server:', response);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };

  return (
    <Layout>
      <Card>
        <Title level={2}>Создание заявки/обращения</Title>
        <Form form={form} onFinish={handleSubmit}>
        <Row gutter={24}>
            <Col span={24}>
          <Form.Item name="title" label="Заголовок" rules={[{ required: true, message: 'Введите заголовок' }]}>
            <Input />
          </Form.Item>
          </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
          {/* Organization */}
          <Form.Item name="organization" label="Организация">
            <Select>
              {/* Options fetched from Organizations */}
              <Option value="org1">Организация 1</Option>
              <Option value="org2">Организация 2</Option>
              {/* ... */}
            </Select>
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="project" label="Проект">
            <Select mode="multiple">
              {/* Options fetched from Projects */}
              <Option value="proj1">Проект 1</Option>
              <Option value="proj2">Проект 2</Option>
              {/* ... */}
            </Select>
          </Form.Item>
          </Col>
          </Row>

          {/* User Information */}
          {/* ... Fill in user fields here ... */}

          {/* Title */}
         
          
          {/* Project */}
      

          {/* Request Type */}
          <Form.Item name="requestType" label="Вид заявки/обращения">
            <Select>
              <Option value="systemAddition">Дополнение системы</Option>
              <Option value="errorBug">Ошибка/Баг</Option>
            </Select>
          </Form.Item>

          {/* Description */}
          <Form.Item name="description" label="Описание заявки" rules={[{ required: true, message: 'Введите описание' }]}>
            <Input.TextArea />
          </Form.Item>

          {/* Submission Date */}
          <Form.Item name="submissionDate" label="Дата подачи заявки">
            <Input readOnly />
          </Form.Item>

          {/* Attachments */}
          {/* ... Add attachment field here ... */}

          {/* Submit Button */}
        <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Создать
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export { CreateTreatment };
