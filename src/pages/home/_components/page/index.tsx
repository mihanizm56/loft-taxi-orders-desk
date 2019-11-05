import * as React from 'react';
import { Route } from 'router5';
// import styleNames from 'classnames';
import './index.css';

import { OrderCard } from '../order-card';

// const sn = styleNames(styles);

interface IPageProps {
  route: Route;
}

export const Page = ({ route }: IPageProps) => (
  <div className="page">
    <OrderCard
      done
      index={1}
      username="test-username111111111111111111111111111111111111111111111111111111111"
      timestamp="123222222222222222222222222222222222222222222222222222222222222222"
    />
  </div>
);
