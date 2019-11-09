import { State, Plugin } from 'router5';

const scrollStateMap = {};

const getScrollTop = (): number => {
  if (document.documentElement && document.documentElement.scrollTop) {
    return document.documentElement.scrollTop;
  }
  if (document.body) {
    return document.body.scrollTop;
  }
  return 0;
};
const setScrollTop = (value: number): void => {
  if (document.documentElement && document.body) {
    // eslint-disable-next-line no-multi-assign
    document.documentElement.scrollTop = document.body.scrollTop = value;
  }
};

const generateScrollStateKey = (route: State): string => {
  return route.name + JSON.stringify(route.params);
};

const isIgnoreScrollRestore = (route: State): boolean => {
  return (
    route &&
    route.meta &&
    route.meta.options &&
    route.meta.options.ignoreScrollRestore
  );
};

export const restoreScrollPosition = (): Plugin => ({
  onTransitionStart: (toState: State, fromState: State): void => {
    if (isIgnoreScrollRestore(fromState)) {
      return;
    }
    if (fromState && fromState.meta) {
      scrollStateMap[generateScrollStateKey(fromState)] = getScrollTop();
    }
  },

  onTransitionSuccess: (toState: State): void => {
    if (isIgnoreScrollRestore(toState)) {
      return;
    }

    setTimeout((): void => {
      if (
        toState &&
        toState.name &&
        scrollStateMap[generateScrollStateKey(toState)]
      ) {
        setScrollTop(scrollStateMap[generateScrollStateKey(toState)]);
      } else {
        setScrollTop(0);
      }
    }, 1);
  },
});
