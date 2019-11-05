import * as React from 'react';
import { IconOrderDone } from '../icon-order-done';
import { IconOrderProgress } from '../icon-order-progress';
import './index.css';

type OrderCardParams = {
  index: number;
  done: boolean;
  username: string;
  timestamp: string;
};

export const OrderCard = ({
  index,
  done,
  username,
  timestamp,
}: OrderCardParams) => (
  <div className="order-card-wrapper">
    <div className="order-card-wrapper__column order-card-wrapper__column--order-first">
      {done ? <IconOrderDone /> : <IconOrderProgress />}
    </div>
    <div className="order-card-wrapper__column order-card-wrapper__column--order-second">
      <h4 className="order-card-list__title">Заказ номер {index}</h4>
      <ul className="order-card-list-data">
        <li className="order-card-list-data-item">
          <span>Пользователь: {username}</span>
        </li>
        <li className="order-card-list-data-item">
          <span>Дата заказа: {timestamp}</span>
        </li>
      </ul>
    </div>
  </div>
);
