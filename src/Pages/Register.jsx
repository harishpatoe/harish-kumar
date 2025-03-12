import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
const notify = () => toast.info("Wow so easy!", {
  position: "top-right",
});

const onFinish = async (values) => {
    console.log('Registered:', values);
    try {
      const res = await axios.post('http://localhost:3000/register', values);
  
    } catch (error) {
      
    }
    };
  
  return (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="bg-white border-2 border-black rounded-lg shadow-md p-8">
        <h1 className='text-4xl py-5 text-center'>Register</h1>
      <Form
        name="basic"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        {/* Username */}
        <div className='mx-10'>
          <Form.Item
            label="Username"
            name="Username"
          >
            <Input placeholder='Enter your Username'/>
          </Form.Item>
        </div>

        {/* E-mail */}
        <div className='mx-10'>
          <Form.Item
            label="E-mail"
            name="E-mail"
          >
            <Input placeholder='Enter your E-mail'/>
          </Form.Item>
        </div>

        {/* Mobile No. */}
        <div className='mx-10'>
          <Form.Item
            label="Mobile No."
            name="Mobile No."
          >
            <Input placeholder='Enter your Mobile No.'/>
          </Form.Item>
        </div>

        {/* Password */}
        <div className='mx-10'>
          <Form.Item
            label="Password"
            name="Password"
          >
            <Input.Password placeholder='Enter your Password'/>
          </Form.Item>
        </div>

        {/* Confirm Password */}
        <div className='mx-10'>
          <Form.Item
            label=" Confirm Password"
            name="Confirm Password"
          >
            <Input.Password placeholder='Enter your Confirm Password'/>
          </Form.Item>
        </div>

        {/* Checkbox */}
        <div className='mx-10'>
          <Form.Item name="Registered" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </div>

        {/* Reset */}
        <Form.Item label={null} className='w-full place-items-center'>
          <Button type="link" htmlType="Reset?" className='w-full'>
            Reset
          </Button>
        </Form.Item>

        {/* Register Button */}
        <Form.Item label={null} className='w-full place-items-center'>
          <Button onClick={notify} type="primary" htmlType="Register" className='w-full'>
            Register
          </Button>
          <ToastContainer />
        </Form.Item>
      </Form>
    </div>
  </div>
)
};

export default Register;