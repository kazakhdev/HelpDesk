import {Layout, Menu} from "antd"
import {useState, Fragment} from 'react'
import { MenuItem, menuItems } from "../common/menuItems"
import {Link} from 'react-router-dom'
const logo = "https://img.freepik.com/free-vector/parrot-gradient-design-vector_343694-2508.jpg?w=740&t=st=1692785908~exp=1692786508~hmac=d75a34dd860754f108b2bae603830f9853225e1e888c64b1ddb7e5764150a70b";
const {Sider} =Layout
const img ={
    height: 'auto',
    maxWidth: '100%',
    padding: '8px',
}
const SideBar =()=>{
    const [collapsed, setCollapsed] = useState(false);
    const [selectedSubMenuKey, setSelectedSubMenuKey] = useState<string | null>(null);
    const renderMenuItems = (items: MenuItem[]) => {
        return items.map((item)=>{
        return (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          );
        });
      };
    return(
        <Sider collapsible collapsed={collapsed} onCollapse={(value)=>setCollapsed(value)} width={"13%"}>
            <div style={{width:"100px", height:"100px"}}>
            {/* <img src={logo} alt="name" style={img}/> */}
            </div>
            <Menu
            theme="dark"
            mode="inline"
            style={{fontSize:"20px"}}
            defaultSelectedKeys={['1']}
            openKeys={selectedSubMenuKey ? [selectedSubMenuKey] : []}
            onOpenChange={(keys) => setSelectedSubMenuKey(keys.length > 0 ? keys[0].toString() : null)}
            >
            {renderMenuItems(menuItems)}

            </Menu>
        </Sider>
    )
    
}
export {SideBar}