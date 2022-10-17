import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div onClick={() => {
      alert('123123123')
    }}>
      这是一个基础的服务端渲染组件
      <Link to="/newPage"> 跳转到新页面link </Link>
      <a href="/newPage">跳转到新页面</a>
    </div>
  )
}

export default Header;