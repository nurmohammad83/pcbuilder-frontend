import React, { useEffect, useState } from "react";

import { Drawer, Button, Menu, Layout } from "antd";
import {
  DesktopOutlined,
  HomeOutlined,
  LoginOutlined,
  MenuOutlined,
  UnorderedListOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
const { Header } = Layout;

function AppHeader() {
  const router = useRouter()
  const { data: session } = useSession();
  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "Categories",
      key: "SubMenu",
      icon: <UnorderedListOutlined />,
      children: [
        {
          type: "group",
          children: [
            {
              key: "Processor",
              label: <Link href="/categories/Processor">Processor</Link>,
            },
            {
              key: "Motherboard",
              label: <Link href="/categories/Motherboard">Motherboard</Link>,
            },
            { key: "Ram", label: <Link href="/categories/Ram">Ram</Link> },
            {
              key: "Power Supply Unit",
              label: (
                <Link href="/categories/Power Supply Unit">
                  Power Supply Unit
                </Link>
              ),
            },
            {
              key: "Monitors",
              label: <Link href="/categories/Monitors">Monitors</Link>,
            },
            {
              key: "Storage Device",
              label: (
                <Link href="/categories/Storage Device">Storage Device</Link>
              ),
            },
            {
              key: "Mouse",
              label: <Link href="/categories/Mouse">Mouse</Link>,
            },
            {
              key: "Keyboard",
              label: <Link href="/categories/Keyboard">Keyboard</Link>,
            },
          ],
        },
      ],
    },
    {
      label: <Link href="/products">Products</Link>,
      key: "featured",
      icon: <UnorderedListOutlined />,
    },

    {
      label: <Link href="/pc_builder">Pc Builder</Link>,
      key: "pcBuilder",
      icon: <DesktopOutlined />,
    },
    {
      label: !session?.user ? (
        <Link href="/login">Log In</Link>
      ) : (
        <Button danger onClick={() => signOut()}>
          Log Out
        </Button>
      ),
      key: "login",
      icon: !session?.user ? <LoginOutlined /> : <LogoutOutlined />,
    },
  ];

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);
  
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header className="flex sticky opacity-100 top-0 z-50 justify-between shadow-lg items-center bg-gray-100 container mx-auto">
      <div className="brand-logo">
        <Link href="/">
          <h2 className="text-black bg-gradient-to-r from-teal-700 via-blue-500 text-transparent bg-clip-text to-green-400 uppercase cursor-pointer">
            ALPHA PC
          </h2>
        </Link>
      </div>
      <div className="logo" />
      <Menu
      disabledOverflow
        className="bg-gray-100 hidden md:block text-black border-none"
        mode="horizontal"
        style={{ lineHeight: "40px" }}
        items={items}
      />

      <div className=" block md:hidden">
        <Button
          className=" block md:hidden"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer placement="right" onClose={onClose} open={open}>
          <Menu mode="inline" items={items} />
        </Drawer>
      </div>
    </Header>
  );
}

export default AppHeader;

export const getServerSideProps = async () => {};
