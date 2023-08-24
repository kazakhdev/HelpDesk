import { Form, Input, Button } from 'antd';
import { useState } from 'react';

type SizeType = Parameters<typeof Form>[0]['size'];

interface InputItems {
  label: string;
  placeholder: string;
}

interface CustomFormProps {
  handleMethod: (values: any) => void;
  Inputs: InputItems[];
}

const CustomForm: React.FC<CustomFormProps> = ({ handleMethod, Inputs }) => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values); // Log the form values to the console
    handleMethod(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const renderInputs = () => {
    return Inputs.map((object) => {
      return (
        <Form.Item key={object.label} name={object.label} label={object.label} wrapperCol={{ span: 24 }}>
          <Input placeholder={object.placeholder} />
        </Form.Item>
      );
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      style={{ minWidth: '40vh', minHeight: '20vh', display: 'flex', flexDirection: 'column' }}
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {renderInputs()}
      <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export { CustomForm };
