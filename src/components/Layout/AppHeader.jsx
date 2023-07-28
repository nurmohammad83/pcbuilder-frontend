import React, { useState } from "react";

import { Drawer, Button, Menu, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
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
      <h2 className="text-black cursor-pointer">
          CREATIVE_FLOW
        </h2>
      </Link>
        
      </div>
      <div className="logo" />
      <Menu
      className="hidden md:block bg-transparent border-none text-black"
        mode="horizontal"
        selectedKeys={selectedKeys}
        onClick={handleMenuItemClick}
      >
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.SubMenu key="categories" title="Categories">
          {generateCategoryMenuItems(categories)}
        </Menu.SubMenu>
        <Menu.Item key="featured">
          <Link href="/featured">Featured</Link>
        </Menu.Item>
        <Menu.Item key="pc-builder">
          <Link href="/pc-builder">PC Builder</Link>
        </Menu.Item>
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
            <Menu.Item key="pc-builder">
              <Link href="/pc-builder">PC Builder</Link>
            </Menu.Item>
            <Menu.SubMenu key="categories" title="Categories">
              {generateCategoryMenuItems(categories)}
            </Menu.SubMenu>
          </Menu>
        </Drawer>
      </div>
    </Header>
  );
}

export default AppHeader;
