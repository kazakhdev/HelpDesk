import { UploadOutlined, FileDoneOutlined, LogoutOutlined } from '@ant-design/icons';

export interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  link: string;
  role?: string;
  children?: MenuItem[];
}

export const menuItems:MenuItem[] = [
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
    icon: <LogoutOutlined/>,
    label: "Выход",
    link: "/"
  }
  
];

