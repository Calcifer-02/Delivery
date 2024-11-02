import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Input, Form, Spin, Button, message } from 'antd';

import { useFetchService } from '@/shared/lib/contexts/FetchContext';
import { useFetch } from '@/shared/lib';

import { formFields } from '../formFields';
import cl from './UpdateForm.module.scss';

export const UpdateForm = ({ type }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { length } = pathname.split('/');
  const recordId = pathname.split('/')[length - 1];
  const [data, setData] = useState(null);
  const { getRecordById, updateRecord } = useFetchService();
  const [fetchData, isLoading, isError] = useFetch(() => getRecordById(type, recordId, setData));
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    const res = await updateRecord(type, recordId, values);
    messageApi.open({
      type: 'success',
      content: res,
    });

    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main style={{ flex: '1 1 auto', alignSelf: 'center', display: 'flex', justifyContent: 'center' }}>
        <Spin size="large" />
      </main>
    );
  }
  if (isError) {
    return (
      <main style={{ flex: '1 1 auto', alignSelf: 'center', display: 'flex', justifyContent: 'center' }}>
        <h1>Что-то пошло не так. Попробуйте еще раз.</h1>
      </main>
    );
  }

  return (
    <div className={cl.wrapper}>
      {contextHolder}
      <Form
        form={form}
        labelCol={{ span: 24 }}
        style={{ width: 600 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
      >
        {formFields[type].map((item, index) => (
          <Form.Item
            key={index}
            initialValue={data[item[1]]}
            label={item[0]}
            name={item[1]}
            rules={[
              {
                required: true,
                message: 'Это обязательное поле!',
              },
            ]}
          >
            <Input type={item[2] || 'text'} />
          </Form.Item>
        ))}
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Обновить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
