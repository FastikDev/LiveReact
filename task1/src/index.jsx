import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserTable from './UserTable';
import users from './users';

const rootElement = document.querySelector('#root');

ReactDOM.render(<UserTable users={users} />, rootElement);
