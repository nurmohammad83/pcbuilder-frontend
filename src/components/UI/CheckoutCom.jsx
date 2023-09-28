import React, { useState } from 'react';
import { Button, Form, Input, Row, Col } from 'antd';


const CheckoutCom = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData)
  };

  return (
    <div className="checkout-container relative z-20 font-poppins px-5 py-6 sm:py-10  lg:px-16">
    <h2 className='text-center pb-12 font-poppins text-3xl'>Checkout</h2>
   <div className='w-full flex  md:flex-row flex-col-reverse'>
    <div className=' w-full md:w-2/3 mt-8 pr-6 border border-red-500 '>
    <div className="absolute bg-gradient-to-r from-[#fda4f7] to-[#f9c4f9] w-[10rem] md:w-[28rem] h-[5rem] md:h-[14rem] top-[20%] right-[1%] rounded-3xl -z-10 blur-[120px]"></div>
    <div className="absolute bg-gradient-to-r from-[#a3f4e6] to-[#6deccf] w-[10rem] md:w-[28rem] h-[5rem] md:h-[14rem] top-[20%] left-[1%] rounded-3xl -z-10 blur-[120px]"></div>
    <h1 className='text-2xl'>Shoping Cart</h1>
    <Form onFinish={handleSubmit} layout='vertical'>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input name="firstName" className='border-none' onChange={handleChange} value={formData.firstName} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input name="lastName" className='border-none' onChange={handleChange} value={formData.lastName} />
          </Form.Item>
        </Col>

      </Row>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
      >
        <Input name="email" className='border-none' onChange={handleChange} value={formData.email} />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please enter your address' }]}
      >
        <Input name="address" className='border-none' onChange={handleChange} value={formData.address} />
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: 'Please enter your city' }]}
          >
            <Input name="city" className='border-none' onChange={handleChange} value={formData.city} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Postal Code"
            name="postalCode"
            rules={[{ required: true, message: 'Please enter your postal code' }]}
          >
            <Input name="postalCode" className='border-none' onChange={handleChange} value={formData.postalCode} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button size='large' block className='mt-5' htmlType="submit">
          Confirm Order
        </Button>
      </Form.Item>
    </Form>
    </div>
    <div className='w-full md:w-1/3'>
    <div className="flex flex-col max-w-3xl p-5 space-y-4 rounded-md bg-gray-200 text-gray-900">
	<h2 className="text-xl font-semibold">Order Summery</h2>
	<ul className="flex p-0 flex-col divide-y divide-gray-700">
		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-20 sm:h-20 bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-sm font-semibold leadi sm:pr-8">Polaroid camera</h3>
							<p className="text-sm text-gray-400">Classic</p>
						</div>
						<div className="text-right">
							<p className="text-base font-semibold">59.99€</p>
							<p className="text-sm line-through text-gray-600">75.50€</p>
						</div>
					</div>
					
				</div>
			</div>
		</li>
	</ul>
	<div className="space-y-1 text-right">
		<p>Total amount:
			<span className="font-semibold">357 €</span>
		</p>
		<p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
	</div>
</div>
    </div>
   </div>
  </div>
  )
}
export default CheckoutCom