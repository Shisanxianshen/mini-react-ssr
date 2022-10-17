import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getList } from '../store/actions';
const NewPage = (props) => {
  useEffect(() => {
    props.getList();
  }, []);

  const getNewsList = () => {
    const { list } = props;
    if (list) {
      return list.map((item) => <div key={item.id}>{item.title}</div>);
    } else {
      return '';
    }
  };

  return (
    <div
      onClick={() => {
        alert('这是一个新的页面');
      }}
    >
      这是一个新的页面
      <Link to="/"> 返回 </Link>
      {props.name}
      {getNewsList()}
    </div>
  );
};

NewPage.loadData = (store) => {
  // 执行action，扩充store。
  return store.dispatch(getList());
}


const stateProps = (state) => {
  console.log(state)
  return { name: state.publicReducer.name, list: state.NewPageReducer.newsList.data }
};

const getData = (dispatch) => ({
  getList: () => {
    dispatch(getList());
  },
});

export default connect(stateProps, getData)(NewPage);
