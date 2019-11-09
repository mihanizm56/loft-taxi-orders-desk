import * as React from 'react';
import { Router, Route, State } from 'router5';
import { IAdvancedStore } from '@/services/_redux-store/_types';

export interface IAdvancedRoute extends Route, State {
  action?: IAction;
  loadAction?: () => Promise<{ default: IAction }>;
  actionResult?: IActionResult;
  canParallel?: boolean;
  children?: IAdvancedRoute[];
}

export interface IActionParams extends IRouterDependecies {
  router: Router;
  toState: IAdvancedRoute;
  fromState: IAdvancedRoute;
}

export interface IAction {
  (params: IActionParams): Promise<IActionResult>;
}

export interface IActionResult {
  title?: string;
  content?: React.ReactNode;
  useCache?: boolean;
  error?: {
    title: string;
    content: React.ReactNode;
  };
}

export interface IRouterDependecies {
  routes?: IAdvancedRoute[];
  getRouteActionResult?: (name: string) => IActionResult;
  getSegmentActionResult?: (name: string) => IActionResult;
  store: IAdvancedStore;
}
