import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import NewPage from './components/NewPage';

const routes = [
  {
    path: '/',
    component: Header,
    exact: true,
    key: 'Header',
  },
  {
    path: '/newPage',
    component: NewPage,
    key: 'NewPage',
    loadData: NewPage.loadData,
    exact: true,
  },
];

export default routes;
