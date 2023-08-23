import {Layout,Card, Button, Typography, Modal, Form, Divider, Space, Row, Col} from 'antd'
import {useState} from 'react'
import { InputItems } from '../common/InputItems';
import { CustomForm } from '../components/CustomForm';
const {Title} =Typography
type SizeType = Parameters<typeof Form>[0]['size'];
const TreatmentPage =()=>{
    const inputs :InputItems[] =[
        {
            key: "1",
            label: "title",
            placeholder:"Введите название"
        },
        {
            key: "2",
            label: "description",
            placeholder: "Введите описание"
        }


    ]
    const [open, setOpen] = useState(false);
    const handlePost =()=>{


    }
    const showModal = () => {
        setOpen(true);
      };
    
      const hideModal = () => {
        setOpen(false);
      };

    const renderCards =() =>{
      const cardList = [];

      for (let i=0; i<10; i++){
        cardList.push(
          <Col xs={24} sm={24} md={16} lg={12} xl={8} key={i}>
        <Card title={`Обращение ${i}`}>
          описание обращения {i}
        </Card>
        </Col>)
      }
      return cardList
    }  
    return(
    <Layout>
        <Card>
            <Title>Создать обращение</Title>
            <Button onClick={showModal}>Создать Обращение</Button>
            
        </Card>
        <Card >
            <Title level={2}>Список ваших обращении</Title>
            <Row gutter={[16, 16]}>{renderCards()}</Row>
        </Card>

            <Modal
        title="Обращение"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Создать"
        cancelText="Отмена"
      >
        <CustomForm handleMethod={handlePost} Inputs={inputs}></CustomForm>

      </Modal>
    </Layout>)
}
export {TreatmentPage}