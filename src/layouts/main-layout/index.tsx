import * as React from 'react';
import { Link } from '@/_components/link';

interface IProps extends React.Props<any> {
  className?: string;
}

export const MainLayout = ({ className, children }: IProps) => (
  <div className={className}>
    <div style={{ margin: '20px', backgroundColor: '#efefef' }}>
      <Link routeName="home">Home</Link>
      <br />
      <Link routeName="parent1">Parent 1</Link>
      <br />
      <Link routeName="parent1.child1">Child 1</Link>
      <br />
      <Link routeName="parent2">Parent 2 (with nesting)</Link>
      <br />
      <Link routeName="parent2" routeParams={{ foo: 'bar' }}>
        Child 2
      </Link>
      <br />
    </div>
    <div style={{ margin: '20px', backgroundColor: '#efefef' }}>{children}</div>
  </div>
);
