import * as React from 'react';
import { Router, Route } from 'router5';
import { RouteNode as Router5RouteNode } from 'react-router5';
import { IActionResult } from './_types';

interface IChildrenProps {
  router: Router;
  route: Route;
  content: IActionResult;
}

interface IProps extends React.Props<any> {
  nodeName: string;
  children: (params: IChildrenProps) => React.ReactNode;
}

/**
 * Wrapped RouteNode from router5
 */
export const RouteNode = ({ nodeName, children }: IProps) => (
  <Router5RouteNode key={nodeName} nodeName={nodeName}>
    {({ router, route }: { router: Router; route: Route }) => {
      const DI = router.getDependencies();
      const actionResult = DI.getSegmentActionResult(route.name, nodeName);

      return children({
        router,
        route,
        content: actionResult && actionResult.content,
      });
    }}
  </Router5RouteNode>
);
