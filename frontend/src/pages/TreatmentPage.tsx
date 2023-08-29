import { Layout, Card, Button, Typography, Modal, Form, Divider, Space, Row, Col, Table } from 'antd';
import { useState } from 'react';
import { InputItems } from '../common/InputItems';
import { CustomForm } from '../components/CustomForm';
import type { PaginationProps } from 'antd';
import { get, post, put, del } from '../services/api';
import { Pagination } from 'antd';
const { Title } = Typography;

const TreatmentPage = () => {
  const columns =[
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Регион',
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: 'Контакты',
      dataIndex: 'contacts',
      key: 'contacts',
    },
    {
      title: 'Почта',
      dataIndex: 'email',
      key: 'email',
    }
  ]
  const inputs: InputItems[] = [
    {
      key: '1',
      label: 'id',
      placeholder: 'Enter ID',
    },
    {
      key: '2',
      label: 'createdDate',
      placeholder: 'Enter Created Date',
    },
    {
      key: '3',
      label: 'name',
      placeholder: 'Enter Name',
    },
    {
      key: '4',
      label: 'bin',
      placeholder: 'Enter BIN',
    },
    {
      key: '5',
      label: 'address',
      placeholder: 'Enter Address',
    },
    {
      key: '6',
      label: 'headFirstName',
      placeholder: 'Enter Head First Name',
    },
    {
      key: '7',
      label: 'headLastName',
      placeholder: 'Enter Head Last Name',
    },
    {
      key: '8',
      label: 'headMiddleName',
      placeholder: 'Enter Head Middle Name',
    },
    {
      key: '9',
      label: 'phoneNumber',
      placeholder: 'Enter Phone Number',
    },
    {
      key: '10',
      label: 'email',
      placeholder: 'Enter Email',
    },
    {
      key: '11',
      label: 'city',
      placeholder: 'Enter City',
    },
    {
      key: '12',
      label: 'projectId',
      placeholder: 'Enter Project ID',
    },
    {
      key: '13',
      label: 'projects',
      placeholder: 'Enter Projects',
    },
  ];

  const regions = [
    'Абайская', 'Акмолинская', 'Актюбинская', 'Алматинская', 'Атырауская',
    'Восточно-Казахстанская', 'Жамбылская', 'Жетысуская', 'Западно-Казахстанская',
    'Карагандинская', 'Костанайская', 'Кызылординская', 'Мангистауская', 'Павлодарская',
    'Северо-Казахстанская', 'Туркестанская', 'Улытауская'
  ];
  // useEffect(()=>{
  //   const fetchAppeals = async()=>{
  //     const res =localStorage.getItem("treatments")
  //     if (res) {
  //       const parsedTreatments = JSON.parse(res);
  //       setTreatments(parsedTreatments);
  //     }
  //     fetchAppeals();
  //   }
  // },[])
  const [open, setOpen] = useState(false); 
 
  // const [appeals, setAppeals] =useState<IAppeals>();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1); // Initialize with -1 when not editing
  const [treatments, setTreatments] = useState([
    {
      
      title: '',
      description: '',
      region: '',
      contacts: '',
      email: '',
      id: '',
      createdDate: '',
      name: '',
      bin: '',
      address: '',
      headFirstName: '',
      headLastName: '',
      headMiddleName: '',
      phoneNumber: '',
      city: '',
      projectId: '',
      projects: [''],
    },
  ]);

  const [filteredAndSortedTreatments, setFilteredAndSortedTreatments] = useState(treatments);

const handlePost = async (values: {
  id: string;
    createdDate: string;
    name: string;
    bin: string;
    address: string;
    headFirstName: string;
    headLastName: string;
    headMiddleName: string;
    phoneNumber: string;
    email: string;
    city: string;
    projectId: string;
    projects: string[];
}) => {
  if (editingIndex !== -1) {
    const updatedTreatments = [...treatments];
    const updatedTreatment = {
      ...updatedTreatments[editingIndex],
      ...values,
    };
    updatedTreatments[editingIndex] = updatedTreatment;

    try {
      const response = await put(`api/Organization/${updatedTreatment.id}`, updatedTreatment);
      console.log('Response from server:', response);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }

    setTreatments(updatedTreatments);
    setEditingIndex(-1); // Reset editing index
  } else {
    const newTreatment = {
      title: '',
      description: '',
      region: '',
      contacts: '',
      email: '',
      id: '',
      createdDate: '',
      name: '',
      bin: '',
      address: '',
      headFirstName: '',
      headLastName: '',
      headMiddleName: '',
      phoneNumber: '',
      city: '',
      projectId: '',
      projects: [''], // Make sure projects is an array of strings
    };
    try {
      const response = await post('api/Organization', newTreatment);
      console.log('Response from server:', response);
    } catch (error) {
      console.error('Error sending data to server:', error);
    }
    
    setTreatments((prevTreatments) => [...prevTreatments, newTreatment]);
  }


  hideModal();
};

  const handleFilterByRegion = (selectedRegion:string) => {
    const filteredTreatments = treatments.filter(treatment => treatment.region === selectedRegion);
    const sortedTreatments = filteredTreatments.sort((a, b) => a.title.localeCompare(b.title));
    setFilteredAndSortedTreatments(sortedTreatments);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    showModal(); // Show the modal for editing
  };
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
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


  const renderCards = () => {
    const treatmentsToDisplay = filteredAndSortedTreatments.length > 0 ? filteredAndSortedTreatments : treatments;
    return treatmentsToDisplay.map((treatment, index) => (
      <Col xs={24} sm={24} md={16} lg={12} xl={8} key={index}>
        <Card title={`Обращение ${index}`}>
          <p>Название: {treatment.title}</p>
          <p>Описание: {treatment.description}</p>
          <p>Контакты: {treatment.contacts}</p>
          <p>Email: {treatment.email}</p>
          <p>Регион: {treatment.region}</p>
  
          {/* New fields */}
          <p>БИН: {treatment.bin}</p>
          <p>Адрес: {treatment.address}</p>
          <p>Имя руководителя: {treatment.headFirstName}</p>
          <p>Фамилия руководителя: {treatment.headLastName}</p>
          <p>Отчество руководителя: {treatment.headMiddleName}</p>
          <p>Номер телефона: {treatment.phoneNumber}</p>
          <p>Город: {treatment.city}</p>
          <p>ID проекта: {treatment.projectId}</p>
          <p>Проекты: {treatment.projects.join(', ')}</p>
          
          <Button onClick={() => handleEdit(index)}>Edit</Button>
          <Button onClick={() => handleFilterByRegion(selectedRegion)}>Filter by Region</Button>
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
        {/* <Title level={2}>Список ваших обращений</Title>
        <Row gutter={[16, 16]}>{renderCards()}</Row> */}
        <Table columns={columns} dataSource={treatments}>

        </Table>
      </Card>
      <Modal
        title="Обращение"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Создать"
        cancelText="Отмена"
      >
        <CustomForm
          handleMethod={handlePost}
          Inputs={inputs}
          regions={regions}
          treatments={treatments}
          editingIndex={editingIndex}
          setSelectedRegion={setSelectedRegion}
        />
      </Modal>
      <Pagination total={500} itemRender={itemRender} />
    </Layout>
  );
};

export { TreatmentPage };
