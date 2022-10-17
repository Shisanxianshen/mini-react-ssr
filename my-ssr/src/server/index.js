import express from 'express';
import { renderToString } from 'react-dom/server'; //引入renderToString方法
import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import routes from '../Routes';
import { Provider } from 'react-redux';
import getStore from '../store';

const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = getStore();
  const promises = [];
  const matchedRoutes = routes.filter((item) => item.path.includes(req.path));
  matchedRoutes.forEach((item) => {
    if (item.loadData) {
      promises.push(item.loadData(store));
    }
  });
  // 服务端数据预取
  if (promises.length) {
    Promise.all(promises).then(() => {
      const content = renderToString(
        //在服务端需要使用StaticRouter来替代BrowserRouter
        <Provider store={store}>
          <StaticRouter location={req.path} context={{}}>
            <div>
              {routes.map((route) => (
                <Route {...route} />
              ))}
            </div>
          </StaticRouter>
        </Provider>
      );
      res.send(`
        <html>
            <head>
                <title>SSR</title>
            </head>
            <body >
              <div id="root">${content}</div>
            </body>
            <>
            <script src="/index.js"></script>
        </html>
    `);
    });
    return;
  }
  const content = renderToString(
    //在服务端需要使用StaticRouter来替代BrowserRouter
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  );
  res.send(`
      <html>
          <head>
              <title>SSR</title>
          </head>
          <body >
            <div id="root">123123${content}</div>
          </body>
          <script src="/index.js"></script>
      </html>
  `);
});

app.listen(3002, () => {
  console.log('服务启动:', 'localhost:3002');
});
