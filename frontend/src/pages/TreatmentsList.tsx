import { Layout, Card, Button, Typography, Modal, Table, Input, Select } from 'antd';
import { useState } from 'react';
import { get, post, put } from '../services/api';
const { Title } = Typography;
const { Option } = Select;

const TreatmentsList = () => {
  //Массив куда будут заполняться все обращения
  const [treatments, setTreatments] = useState([]); 

  const columns = [
   
    {
      title: 'Заголовок',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Проект',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: 'Вид заявки/обращения',
      dataIndex: 'requestType',
      key: 'requestType',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Дата подачи',
      dataIndex: 'submissionDate',
      key: 'submissionDate',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
  ];


  const fetchTreatments = async () => {
    try {
      const response = await get('api/Appeals'); 
      setTreatments(response.data);
    } catch (error) {
      console.error('Error fetching treatments:', error);
    }
  };

  // useState(() => {
  //   fetchTreatments();
  // }, []); // Fetch treatments when the component mounts

  return (
    <Layout>
      <Card>
        <Title level={2}>Мои заявки/обращения</Title>
        <Table
          columns={columns}
          dataSource={treatments}
          pagination={{ pageSize: 10 }} 
        />
      </Card>
    </Layout>
  );
};

export { TreatmentsList };