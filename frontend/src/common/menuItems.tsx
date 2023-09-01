import { UploadOutlined, FileDoneOutlined, LogoutOutlined, UserOutlined, GlobalOutlined } from '@ant-design/icons';
import { logOut } from '../services/authService';
import { Empty } from 'antd';

export interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  link: string;
  role?: string;
  onClick?: () => void;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    key: "1",
    icon: <UploadOutlined />,
    label: "Админ",
    link: "/Main"
  },
  {
    key:"7",
    icon:<UserOutlined/>,
    label: "Создать Обращение",
    link: "/CreateTreatment"
  },
  {
    key: "2",
    icon: <FileDoneOutlined />,
    label: "Обращения",
    link: "/Treatment"
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: "Профиль",
    link: "/Profile"
  },  
  {
    key: "4",
    icon: <GlobalOutlined />,
    label: "Администрирование",
    link: "/Administration"
  },
  {
    key:"5",
    icon:"",
    label: "Организация",
    link: "/Organization"
  },
  {
    key:"6",
    icon:"",
    label: "Проекты",
    link: "/Projects"
  },
  
  {
    key: "7",
    icon: "",
    label: "Выход",
    link: "/",
  }
];
