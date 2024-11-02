import { Form, Input, Button, message } from 'antd';

import { useFetchService } from '@/shared/lib/contexts/FetchContext';

import { formFields } from '../formFields';
import cl from './CreateForm.module.scss';

export const CreateForm = ({ type }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { addRecord } = useFetchService();

  const onFinish = async (values) => {
    const res = await addRecord(type, values);
    messageApi.open({
      type: 'success',
      content: res,
    });
    form.resetFields();
  };

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
            Создать
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
