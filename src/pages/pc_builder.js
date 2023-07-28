import React, { useState } from 'react';
import { Layout, Select, Button, Card } from 'antd';
import RootLayout from '@/components/Layout/RootLayout';

const { Option } = Select;
const { Meta } = Card;

const categories = [
  'Processor',
  'Monitor',
  'Mouse',
  'Casing',
  'RAM',
  'Power Supply',
];

const PCBuildPage = () => {
  const [selectedData, setSelectedData] = useState({});

  const handleCategoryChange = (category, value) => {
    setSelectedData((prevData) => ({ ...prevData, [category]: value }));
  };

  return (
    <Layout>
      <div style={{ padding: '1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>PC Builder</h1>
        {categories.map((category) => (
          <Card key={category} style={{ marginBottom: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {category}
              </h2>
              <Select
                style={{ width: '100%', marginBottom: '0.5rem' }}
                placeholder={`Select ${category}`}
                value={selectedData[category]}
                onChange={(value) => handleCategoryChange(category, value)}
              >
               <Button type='primary'>Add</Button>
              </Select>
            </div>
          </Card>
        ))}
        <Button type="primary" style={{ width: '100%' }}>
          Build PC
        </Button>
      </div>
    </Layout>
  );
};

export default PCBuildPage;



PCBuildPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
  }
  