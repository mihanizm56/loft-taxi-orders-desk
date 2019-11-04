import { Router } from 'router5';
import { getRoute } from '../utils';
import { IActionResult } from '../_types';

export const getSegmentActionResult = (router: Router) => (
  name: string,
  nodeName = '',
): IActionResult | null => {
  const { routes } = router.getDependencies();
  if (name === nodeName) return null;

  const segments = name.split('.');
  const nodeSegments = nodeName.split('.');

  const depth = nodeName === '' ? 1 : nodeSegments.length + 1;

  const segment = segments.slice(0, depth).join('.');
  const route = getRoute(segment, routes);

  return route.actionResult || null;
};
