import React, { useState } from "react";

import { Drawer, Button, Menu, Layout } from "antd";
import { DesktopOutlined, HomeOutlined, LoginOutlined, LogoutOutlined, MenuOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const { Header} = Layout;

const categories = [
  { key: "processor", label: "Processor" },
  { key: "motherboard", label: "Motherboard" },
  { key: "ram", label: "RAM" },
  { key: "Power Supply Unit", label: "Power Supply Unit" },
  { key: "Monitors", label: "Monitors" },
  { key: "Mouse", label: "Mouse" },
];

function AppHeader() {
  const { data: session } = useSession()

  const [selectedKeys, setSelectedKeys] = useState("");
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (e) => {
    setSelectedKeys(e.key);
  };

  const generateCategoryMenuItems = (categories) => {
    return categories.map((category) => (
      <Menu.Item key={category.key}>
        <Link href={`/categories/${category.key}`}>{category.label}</Link>
      </Menu.Item>
    ));
  };
  return (
    <Header
     className="flex justify-between shadow-lg items-center bg-transparent"
    >
      <div className="brand-logo">
      <Link href="/">
      <h2 className="text-black bg-gradient-to-r from-teal-700 via-blue-500 text-transparent bg-clip-text to-green-400 uppercase cursor-pointer">
          Extreme Pc
        </h2>
      </Link>
        
      </div>
      <div className="logo" />
      <Menu  mode="horizontal" defaultSelectedKeys={["home"]} className="leading-9 bg-transparent border-none hidden md:block text-black">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.SubMenu key="categories" title="Categories" icon={<UnorderedListOutlined />}>
       {
        categories.map(category=>(
          <Menu.Item key={category.key}>
          <Link href={`/categories/${category.key}`}>
            <span>{category.label}</span>
          </Link>
        </Menu.Item>
        ))
       }
      </Menu.SubMenu>
      <Menu.Item key="featured" icon={<UnorderedListOutlined />}>
          <Link href="/featured">
            <span>Featured</span>
          </Link>
        </Menu.Item>
      <Menu.Item key="pc_builder" icon={<DesktopOutlined />}>
        <Link href="/pc_builder">
          <span>PC Builder</span>
        </Link>
      </Menu.Item>
      {
        !session?.user ?<Menu.Item key="login" icon={<LoginOutlined />}>
        <Link href="/login">
          <span>Log In</span>
        </Link>
      </Menu.Item>:
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <Button onClick={()=>signOut()} type="primary" danger>
              Logout
            </Button>
      </Menu.Item>
      }
    </Menu>

      <div className=" block md:hidden">
        <Button
          className=" block md:hidden"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer placement="right" onClose={onClose} open={open}>
          <Menu
            mode="vertical"
            selectedKeys={selectedKeys}
            onClick={handleMenuItemClick}
          >
            <Menu.Item key="home">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="pc_builder">
              <Link href="/pc_builder">PC Builder</Link>
            </Menu.Item>
            <Menu.SubMenu key="categories" title="Categories">
              {generateCategoryMenuItems(categories)}
            </Menu.SubMenu>
           {
            !session?.user ? <Menu.Item key="login">
            <Link href="/login">Login</Link>
          </Menu.Item>:
          <Menu.Item key="logout">
            <Button onClick={()=>signOut()} type="primary" danger>
              Logout
            </Button>
          </Menu.Item>
           }
          </Menu>
        </Drawer>
      </div>
    </Header>
  );
}

export default AppHeader;
