import * as React from 'react';
import { Route } from 'router5';
import styleNames from 'classnames';
import { OrdersList } from '../orders-list';
import styles from './index.module.scss';

const cx = styleNames.bind(styles);

interface IPageProps {
  route: Route;
}

export const Page = ({ route }: IPageProps) => (
  <div className={cx('page')}>
    <OrdersList />
  </div>
);
