import { UploadOutlined, FileDoneOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { logOut } from '../services/authService';

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
    icon: <FileDoneOutlined />,
    label: "Администрирование",
    link: "/Administration"
  },
  {
    key:"5",
    icon:<UserOutlined/>,
    label: "Организация",
    link: "/Organization"
  },
  {
    key: "6",
    icon: <LogoutOutlined/>,
    label: "Выход",
    link: "/",
    onClick: () => {
      console.log("Miras"); // Change this line
    }
  }
];
