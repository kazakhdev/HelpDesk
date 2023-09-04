import { Button, Col, Input, Layout, Row, Form, Select, Card, Typography, message } from "antd"
import { useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import { getAllOrganizations, putOrganization } from "../services/organizationService"
import { IOrganization } from "../common/IOrganizations"
import { BackButton } from "../components/BackButton"
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
];
const {Title} =Typography;
const OrganizationPage = () =>{
    const {id} =useParams<string>()
    const [organizations, setOrganizations] =useState<IOrganization[]>()
    const navigation =useNavigate();
    const onFinishFailed=()=>{
  console.log("error")
}
const onFinish =(values:any)=>{
handleCreateOrganization(values)
}
const handleCreateOrganization =async(formValue: {name:string,bin:string,address: string, headFirstName: string, headLastName: string, headMiddleName: string, phoneNumber: string, email: string, city: string, projects:string})=>{
  const {name,bin,address, headFirstName, headLastName, headMiddleName, phoneNumber, email, city,projects} =formValue;

  if (typeof id === 'string') {
     // Провека является id строкой 
    await putOrganization(name, bin, address, headFirstName, headLastName, headMiddleName, phoneNumber, email, city, id, projects);
    message.success("Создана организация")
    // navigation(-1)

  } else {
    console.error('Error: id is not a valid string.');
  }
}
    return (<Layout>
        <Card>
            <BackButton/>
            <Title level={2}>Создание организации</Title>
     <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
          <Row gutter={16}>
            <Col span={8}>
            <Form.Item 
            name={"name"} 
            label={"Название организации"}
            rules={[{required: true, message: "Пожалуйста введите название"}]}>
              <Input placeholder='Введите название организации'/>
            </Form.Item>
            <Form.Item 
            name={"headFirstName"} 
            label={"Имя руководителя"}  
            rules={[{required: true, message: "Пожалуйста введите название"}]}>
              <Input placeholder='Введите название организации'/>
            </Form.Item>
            <Form.Item 
            name={"city"} 
            label="Город" 
            wrapperCol={{offset:4}}
            rules={[{required: true, message: "Пожалуйста введите название"}]}>
              <Select placeholder='Выберите город' options={kazakhstanCities}/>
            </Form.Item>
            <Form.Item 
            name={"project"} 
            label={"Проекты"}  
            rules={[{required: true, message: "Пожалуйста выберите проект"}]}>
              <Select placeholder="Выберите проект" options={kazakhstanCities}/>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item 
            name={"bin"} 
            label={"БИН"}  
            rules={[{required: true, message: "Пожалуйста введите название"}]}>
              <Input placeholder='Введите БИН'/>
            </Form.Item>
            <Form.Item 
            name={"headLastName"} 
            label={"Фамилия руководителя"}  
            rules={[{required: true, message: "Пожалуйста введите название"}]}>
              <Input placeholder='Введите название организации'/>
            </Form.Item>
            <Form.Item 
            name={"phoneNumber"} 
            label={"Номер телефона"}  
            rules={[{required: true, message: "Пожалуйста введите название"}]}>
              <Input placeholder='Введите телефон'/>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item 
            name={"address"} 
            label={"Адрес"}  
            rules={[{required: true, message: "Пожалуйста введите адрес"}]}>
              <Input placeholder='Введите адрес'/>
            </Form.Item>
            <Form.Item 
            name={"headMiddleName"} 
            label={"Отчество руководителя"}  
            rules={[{required: true, message: "Пожалуйста введите название"}]}>
              <Input placeholder='Введите название организации'/>
            </Form.Item>
            <Form.Item 
            name={"email"} 
            label={"Email"}  
            rules={[{required: true, message: "Пожалуйста введите название"}]}>
              <Input placeholder='Введите электронную почту'/>
            </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Col>
              <Button type='primary' htmlType='submit'>
                Создать организацию
              </Button>
            </Col>
          </Row>
        </Form>
        </Card>
        </Layout>
        )
}

export {OrganizationPage}