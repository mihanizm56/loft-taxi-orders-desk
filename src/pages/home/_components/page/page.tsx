import * as React from 'react';
import { Route } from 'router5';

interface IPageProps {
  route: Route;
}

export const Page = ({ route }: IPageProps) => (
  <>
    <div>Home – {route.name}</div>
    <div>{/* <TestForm /> */}</div>
  </>
);
