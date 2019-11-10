import * as React from 'react';
import { Route } from 'router5';
import { OrdersList } from '../../_containers/orders-list';
import styles from './index.module.scss';

interface IPageProps {
  route: Route;
}

export const Page = ({ route }: IPageProps) => (
  <div className={styles.page}>
    <h1 className={styles.pageTitle}>Список заказов</h1>
    <div className={styles.pageList}>
      <OrdersList />
    </div>
  </div>
);
