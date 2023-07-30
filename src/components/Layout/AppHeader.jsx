import React, { useState } from "react";

import { Drawer, Button, Menu, Layout } from "antd";
import { DesktopOutlined, HomeOutlined, LoginOutlined, LogoutOutlined, MenuOutlined, ProfileOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const { Header} = Layout;



function AppHeader() {
  const { data: session } = useSession()
console.log('session thsi',session)
  const items = [
    {
      label: (<Link href='/'>Home</Link>),
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: 'Categories',
      key: 'SubMenu',
      icon: <UnorderedListOutlined />,
      children: [
        {
          type: 'group',
          children: [
            { key: "processor", label:(<Link href='/categories/processor'>Processor</Link>) },
    { key: "motherboard", label: (<Link href='/categories/motherboard'>Motherboard</Link>) },
    { key: "ram", label: (<Link href='/categories/ram'>RAM</Link>) },
    { key: "Power Supply Unit", label:(<Link href='/categories/Power Supply Unit'>Power Supply Unit</Link>) },
    { key: "Monitors", label:(<Link href='/categories/Monitors'>Monitors</Link>) },
    { key: "Storage Device", label:(<Link href='/categories/Storage Device'>Storage Device</Link>)},
    { key: "Mouse", label:(<Link href='/categories/Mouse'>Mouse</Link>)},
    { key: "Others", label:(<Link href='/categories/Others'>Others</Link>)},
          ],
        },
      ],
    },
    {
      label:(<Link href='/featured'>Featured</Link>),
      key: 'featured',
      icon: <UnorderedListOutlined />,
    },
    
    {
      label:(<Link href='/pc_builder'>Pc Builder</Link>),
      key: 'pcBuilder',
      icon: <DesktopOutlined />,
    },
    {
      label:(!session?.user? <Link href='/login'>Log In</Link>:<Button danger onClick={()=>signOut()}>Log Out</Button>),
      key: 'login',
      icon: (session?.user?<LoginOutlined />:null),
    },
  ];

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
      <Menu className="bg-transparent hidden md:block text-black border-none" mode="horizontal" style={{lineHeight:'40px'}} items={items} />

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
        mode="inline"
        items={items}
      />
        </Drawer>
      </div>
    </Header>
  );
}

export default AppHeader;


      