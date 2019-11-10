import * as React from 'react';
import classNames from 'classnames/bind';
import { IconOrderDone } from '../icon-components/icon-order-done';
import { IconOrderProgress } from '../icon-components/icon-order-progress';
import { timeFormatter } from '@/_utils/time-formatter';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

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
  <div className={cx('order-card-wrapper')}>
    <div
      className={cx('order-card-wrapper__column', {
        'order-card-wrapper__column--order-first': true,
      })}
    >
      {done ? <IconOrderDone /> : <IconOrderProgress />}
    </div>
    <div
      className={cx('order-card-wrapper__column', {
        'order-card-wrapper__column--order-second': true,
      })}
    >
      <h4 className={cx('order-card-list__title')}>Заказ номер {index}</h4>
      <ul className={cx('order-card-list-data')}>
        <li className={cx('order-card-list-data-item')}>
          <span>Пользователь: {username}</span>
        </li>
        <li className={cx('order-card-list-data-item')}>
          <span className={cx('order-card-list-data__text')}>
            Дата заказа: {timeFormatter(timestamp)}
          </span>
        </li>
      </ul>
    </div>
  </div>
);
