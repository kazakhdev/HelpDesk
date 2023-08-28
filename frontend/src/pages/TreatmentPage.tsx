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
    {
      key: '3',
      label: 'region',
      placeholder: 'Выберите область Казахстана',
    },
    {
      key: '4',
      label: 'contacts',
      placeholder: 'Введите контакты',
    },
    {
      key: '5',
      label: 'email',
      placeholder: 'Введите почту',
    },
  ];

  const regions = [
    'Абайская', 'Акмолинская', 'Актюбинская', 'Алматинская', 'Атырауская',
    'Восточно-Казахстанская', 'Жамбылская', 'Жетысуская', 'Западно-Казахстанская',
    'Карагандинская', 'Костанайская', 'Кызылординская', 'Мангистауская', 'Павлодарская',
    'Северо-Казахстанская', 'Туркестанская', 'Улытауская'
  ];

  const [open, setOpen] = useState(false); 
 

  const [selectedRegion, setSelectedRegion] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1); // Initialize with -1 when not editing
  const [treatments, setTreatments] = useState([
    {
      title: '',
      description: '',
      region: '', // Initialize the region property
      contacts: '',
      email: '',
    },
  ]);
  ;
  const [filteredAndSortedTreatments, setFilteredAndSortedTreatments] = useState(treatments);
  const handlePost = (values: {
    title: string;
    description: string;
    region: string;
    contacts: string;
    email: string;
  }) => {
    if (editingIndex !== -1) {
      // Update existing treatment
      const updatedTreatments = [...treatments];
      updatedTreatments[editingIndex] = values;
      setTreatments(updatedTreatments);
    } else {
      // Add new treatment
      const newTreatments = [...treatments, values];
      setTreatments(newTreatments);
    }
  
    localStorage.setItem('treatments', JSON.stringify(treatments));
  
    setEditingIndex(-1); // Reset editing index
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

  const renderCards = () => {
    const treatmentsToDisplay = filteredAndSortedTreatments.length > 0 ? filteredAndSortedTreatments : treatments;
   return treatmentsToDisplay.map((treatment, index) => (
        <Col xs={24} sm={24} md={16} lg={12} xl={8} key={index}>
          <Card title={`Обращение ${index}`}>
            <p>Название: {treatment.title}</p>
            <p>Описание: {treatment.description}</p>
            <p>Контакты: {treatment.contacts}</p> {/* Display contacts */}
            <p>Email: {treatment.email}</p> {/* Display email */}
            <p>Регион: {treatment.region}</p> {/* Display the selected region */}
            <Button onClick={() => handleEdit(index)}>Edit</Button> {/* Add Edit button */}
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
       <CustomForm
        handleMethod={handlePost}
        Inputs={inputs}
        regions={regions}
        treatments={treatments}
        editingIndex={editingIndex}
        setSelectedRegion={setSelectedRegion} 
        />
      </Modal>
    </Layout>
  );
};

export { TreatmentPage };
