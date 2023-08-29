import { Button } from "antd"
import {LeftOutlined} from "@ant-design/icons"
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
    onBack?:()=>void;
}

const BackButton:React.FC<BackButtonProps> =({onBack}) =>{
    const navigation =useNavigate();

    const handleBack= ()=>{
        if (onBack){
            onBack();
        }
        else{
            navigation(-1)
        }
    }
    return (<Button size='large' shape="default" icon={<LeftOutlined />} onClick={handleBack}>Назад</Button>)
}
export {BackButton}