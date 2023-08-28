import { Form, Input, Button, Select} from 'antd';
import { useState } from 'react';
import { useSelectedRegion } from '../context/SelectedRegionContext';
type SizeType = Parameters<typeof Form>[0]['size'];

interface InputItems {
  label: string;
  placeholder: string;
}

interface CustomFormProps {
  handleMethod: (values: {
    title: string;
    description: string;
    region: string;
    contacts: string;
    email: string;
  }) => void;
  Inputs: InputItems[];
  regions: string[];
  treatments: {
    title: string;
    description: string;
    region: string;
    contacts: string;
    email: string;
  }[]; // Define the treatments prop type
  editingIndex: number; 
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
  
}

const regions = [
  'Абайская', 'Акмолинская', 'Актюбинская', 'Алматинская', 'Атырауская',
  'Восточно-Казахстанская', 'Жамбылская', 'Жетысуская', 'Западно-Казахстанская',
  'Карагандинская', 'Костанайская', 'Кызылординская', 'Мангистауская', 'Павлодарская',
  'Северо-Казахстанская', 'Туркестанская', 'Улытауская'
];
const CustomForm: React.FC<CustomFormProps> = ({ handleMethod, Inputs, regions, treatments, editingIndex}) => {
  const initialValues = editingIndex !== -1 ? treatments[editingIndex] : undefined;
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const { selectedRegion, setSelectedRegion } = useSelectedRegion();

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values); 
    handleMethod(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const renderInputs = () => {
    return Inputs.map((object) => {
      if (object.label === 'region') {
        return (
          <Form.Item key={object.label} name={object.label} label={object.label} wrapperCol={{ span: 24 }}>
          

            <Select
          placeholder={object.placeholder}
          onChange={(value) => setSelectedRegion(value)}
          value={selectedRegion}
        >
          {/* Map through your list of regions */}
          {regions.map((region) => (
            <Select.Option key={region} value={region}>
              {region}
            </Select.Option>
          ))}
        </Select>
          </Form.Item>
        );
      } else {
        return (
          <Form.Item key={object.label} name={object.label} label={object.label} wrapperCol={{ span: 24 }}>
            <Input placeholder={object.placeholder} />
          </Form.Item>
        );
      }
    });
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 10 }}
      style={{ minWidth: '40vh', minHeight: '20vh', display: 'flex', flexDirection: 'column' }}
      initialValues= {initialValues}// size: componentSize 
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
