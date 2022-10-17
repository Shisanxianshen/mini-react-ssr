import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = (list) => {
  return {
    type: CHANGE_LIST,
    list,
  };
};

export const getList = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3002/api/test1111').then((res) => {
      const list = res.data.data || {
        "data": [
          {
            "id": 1,
            "title": "aaa"
          },
          {
            "id": 2,
            "title": "bbb"
          },
          {
            "id": 3,
            "title": "ccc"
          },
          {
            "id": 4,
            "title": "ddd"
          }
        ]
      };
      dispatch(changeList(list));
    });
  };
};
