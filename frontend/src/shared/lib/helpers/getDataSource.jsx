import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export const getDataSource = (data, setData, from, deleteRecord) => {
  return data.map((item) => ({
    ...item,
    key: item.id,
    action: (
      <Space size="middle">
        <Link to={`/update/${from}/${item.id}`}>
          <EditOutlined />
        </Link>
        <button onClick={() => deleteRecord(from, item.id, data, setData)}>
          <DeleteOutlined />
        </button>
      </Space>
    ),
  }));
};
