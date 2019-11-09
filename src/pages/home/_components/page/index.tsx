import * as React from 'react';
import { Route } from 'router5';
import styleNames from 'classnames';
// import { Scroller } from '../../_containers/scroller';
import styles from './index.module.scss';

const cx = styleNames.bind(styles);

interface IPageProps {
  route: Route;
}

export const Page = ({ route }: IPageProps) => (
  <div className={cx('page')}>{/* <Scroller /> */}</div>
);
