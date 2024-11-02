import axios from 'axios';

export class FetchService {
  static getAll = async (from) => {
    console.log('Запрос getAll начал выполнение');
    const res = await axios.get(`http://localhost:3001/${from}`);

    return res.data;
  };

  static getById = async (from, id) => {
    console.log('Запрос getById начал выполнение');
    const res = await axios.get(`http://localhost:3001/${from}/${id}`);

    return res.data;
  };

  static add = async (to, body) => {
    console.log('Запрос add начал выполнение');
    const res = await axios.post(`http://localhost:3001/${to}`, {
      ...body,
    });

    return res.data;
  };

  static edit = async (to, id, body) => {
    console.log('Запрос edit начал выполнение');
    const res = await axios.put(`http://localhost:3001/${to}/${id}`, {
      ...body,
    });

    return res.data;
  };

  static delete = async (from, id) => {
    console.log('Запрос delete начал выполнение');
    await axios.delete(`http://localhost:3001/${from}/${id}`);
  };

  static parallelTest = () => {
    const getAllRequest = fetch('http://localhost:3001/dishes');
    const getByIdRequest = fetch('http://localhost:3001/dishes/19');
    const addRequest = fetch('http://localhost:3001/dishes', {
      method: 'POST',
      body: {
        name: 'Венеция',
        description: 'куриное филе, сыр моцарелла, соус томатный, соус маджорио, укроп',
        price: '925, 695',
        restaurant_id: 1,
      },
    });
    const editRequest = fetch('http://localhost:3001/dishes/1', {
      method: 'PUT',
      body: {
        name: 'Новое название',
        description: 'новое описание',
        price: '925, 695',
        restaurant_id: 1,
      },
    });
    const deleteRequest = fetch('http://localhost:3001/dishes/13', {
      method: 'DELETE',
    });

    Promise.race([getAllRequest, getByIdRequest, addRequest, editRequest, deleteRequest])
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
}
