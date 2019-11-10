import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import styles from './index.module.scss';
import {
  getListData,
  getTotalNumberOfItems,
  getNumberOfViewItems,
  fetchOrdersAction,
} from '../../_redux/orders';

const ITEM_SIZE = 35;
const cx = classNames.bind(styles);

interface IProps {
  listData: (store: any) => any;
  numberOfViewItems: (store: any) => any;
  totalNumberOfItems: number;
  fetchListData: (payload: any) => any;
}

class WrappedComponent extends Component<IProps> {
  requestCache: { [key: string]: string } = {};

  componentDidUpdate() {
    console.log('UPDATED, PROPS', this.props);
  }

  isItemLoaded = indexOfItem => Boolean(this.props.listData[indexOfItem]);

  loadItems = async (visibleStartIndex, visibleStopIndex) => {
    console.log('triggers load data', visibleStartIndex, visibleStopIndex);

    const { listData, numberOfViewItems, fetchListData } = this.props;

    const keyToCache = `${visibleStartIndex}:${visibleStopIndex}`; // 0:10 format

    if (this.requestCache[keyToCache]) {
      console.log('gets in cache');
      return;
    }

    const delta = visibleStopIndex - visibleStartIndex;
    const visibleRange = [...Array(delta).keys()].map(
      index => index + visibleStartIndex,
    );

    console.log('visibleRange', visibleRange);

    const areAllVisibleItemsSaved = visibleRange.every(index => {
      console.log('visibleRange item', index, listData[index]);

      return Boolean(listData[index]);
    });

    if (areAllVisibleItemsSaved) {
      console.log('areAllVisibleItemsSaved');

      this.requestCache[keyToCache] = keyToCache;
      return;
    }

    fetchListData({
      visibleStartIndex,
      numberOfViewItems,
      listData,
    });
  };

  getRow = ({ index, style }) => {
    const item = this.props.listData[index];
    const stringValue = item
      ? `${item.username}: ${item.parameter}`
      : 'Loading Complete';

    return (
      <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        {stringValue}
      </div>
    );
  };

  render() {
    const { isItemLoaded, loadItems, getRow } = this;
    const { totalNumberOfItems, numberOfViewItems } = this.props;

    console.log('data in render', totalNumberOfItems, numberOfViewItems);
    return (
      <div className={cx('list-window')}>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              loadMoreItems={loadItems}
              itemCount={totalNumberOfItems}
            >
              {({ onItemsRendered, ref }) => (
                <List
                  itemCount={numberOfViewItems}
                  className={cx('list')}
                  height={height}
                  itemSize={ITEM_SIZE}
                  width={width}
                  ref={ref}
                  onItemsRendered={onItemsRendered}
                >
                  {getRow}
                </List>
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  listData: getListData(store),
  numberOfViewItems: getNumberOfViewItems(store),
  totalNumberOfItems: getTotalNumberOfItems(store),
});

export const OrdersList = connect(
  mapStateToProps,
  { fetchListData: fetchOrdersAction },
)(WrappedComponent);
