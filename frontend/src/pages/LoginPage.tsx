import { Button, Card, Form, Input, Layout, Space } from "antd";
import FormItem from "antd/es/form/FormItem";
import {WindowsOutlined} from '@ant-design/icons'
// import { login } from "../../../services/authServies";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import {login} from "../services/authService";


type SizeType = Parameters<typeof Form>[0]['size'];
const LoginPage = ()=>{
  const [errorMessage, setErrorMessage] = useState("");
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  }
    const navigate = useNavigate();

    const onFinish = (values:any) => {
        handleLogin(values);
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    const handleLogin =(formValue: {email:string, password:string})=>{
        const {email, password} = formValue;
        login(email,password).then((res)=>{
          navigate("Main")
        }).catch((error)=>{
          const resMessage =
            (
                error.response &&
                error.response.data &&
                error.response.data.message) || 
                error.message || error.toString();
                
                if (error.response && error.response.status ===400){
                  setErrorMessage("Неверный логин или пароль")
                }
                else{
                  setErrorMessage(resMessage)
                }

        })
        
    }
    return(
    <Layout style={{
        minWidth:"100vh",
        display: "flex",
        alignItems:'center',
        justifyContent: "center",
        background:"#16223d"
    }}>
        <Card bordered={false} style={{textAlign:"center"}}>
        <div style={{fontSize:"24px"}}><b>Добро пожаловать</b></div>
        <div className="logo-container" style={{alignItems:"center", display:"flex",justifyContent: "center",flexDirection:"column"}} >
            <img  src={"data:image/jpeg;base64,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"} style={{width:"200px"}}/>
            <i style={{font:"24px"}}>Компания</i>
            <br/>
        </div>
        <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 10 }}
        style={{minWidth:"40vh", minHeight:"20vh", display:"flex", flexDirection:"column"}}
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
        <Form.Item
          name="email"
          rules={[{required: true, message: "Please input your username"}]}
          wrapperCol={{ span: 24 }}
          labelCol={{span: 10}}
        >
          <Input placeholder="Email" prefix={<UserOutlined/>} size="large"/>
        </Form.Item>
        <FormItem
          name="password"
          rules={[{required:true, message:"Please input passwod" }]}
          wrapperCol={{ span: 24 }}
          labelCol={{span: 2}}
        >
          <Input.Password size="large" placeholder="Password" prefix={<KeyOutlined/>}/>
          
        </FormItem>
        {errorMessage && (
          <Form.Item wrapperCol={{span: 16}} style={{color:"red", textAlign: "center"}}>
            {errorMessage}
          </Form.Item>
        )}
          <Button style={{background:"#16223d",}} type="primary" htmlType="submit" size='large'  icon={<WindowsOutlined />}>Войти</Button>
        
        <Space />
        
      </Form>
      <Space style={{display:"flex", flexDirection:"row"}}>
      <Link to={"/SignUp"}>Зарегистрироваться</Link>
      <Link to={"/restore"}>Забыли пароль</Link>
      </Space>
      </Card>
    </Layout>);
}
export {LoginPage}