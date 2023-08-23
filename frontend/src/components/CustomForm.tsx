import {Form, Input} from 'antd'
import {useState} from 'react'
import { InputItems } from '../common/InputItems';

type SizeType = Parameters<typeof Form>[0]['size'];

interface CustomFormProps {
    handleMethod: (values:any) => void;
    Inputs: InputItems[],
}

const CustomForm : React.FC<CustomFormProps> = ({handleMethod, Inputs})=>{
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
      setComponentSize(size);
    }
  
      const onFinish = (values:any) => {
          handleMethod(values);
        };
        
        const onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
        };

    const renderInputs =()=>{
         return Inputs.map((object)=>{
            return (<Form.Item name={object.label} wrapperCol={{ span: 24 }}>
                <Input placeholder={object.placeholder}/>
            </Form.Item>)
        })

    }
    return(
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
        {renderInputs()}
        </Form>
    );
}
export {CustomForm}