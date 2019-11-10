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
  getLoadingStatus,
} from '../../_redux/orders';
import { OrderCard } from '../order-card';
import { LoadingTextIndicator } from '@/_components/loading-text-indicator';

// constant for heigth of element in row
const ITEM_SIZE = 110;
const cx = classNames.bind(styles);

interface IProps {
  listData: (store: any) => any;
  numberOfViewItems: (store: any) => any;
  totalNumberOfItems: number;
  fetchListData: (payload: any) => any;
  isLoading: boolean;
}

class WrappedComponent extends Component<IProps> {
  requestCache: { [key: string]: string } = {};

  // componentDidUpdate() {
  //   console.log('UPDATED, PROPS', this.props);
  // }

  isItemLoaded = indexOfItem => Boolean(this.props.listData[indexOfItem]);

  loadItems = async (visibleStartIndex, visibleStopIndex) => {
    const { listData, numberOfViewItems, fetchListData } = this.props;

    const keyToCache = `${visibleStartIndex}:${visibleStopIndex}`; // 0:10 format

    if (this.requestCache[keyToCache]) {
      return;
    }

    const delta = visibleStopIndex - visibleStartIndex;
    const visibleRange = [...Array(delta).keys()].map(
      index => index + visibleStartIndex,
    );

    const areAllVisibleItemsSaved = visibleRange.every(index =>
      Boolean(listData[index]),
    );

    if (areAllVisibleItemsSaved) {
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
    const itemInList = this.props.listData[index];
    const isItemLoaded = Boolean(itemInList);

    return (
      <div className={cx('scrollerRow')} style={style}>
        {isItemLoaded && (
          <OrderCard
            index={index + 1}
            done={itemInList.isDone}
            username={itemInList.username}
            timestamp={itemInList.timestamp}
          />
        )}
      </div>
    );
  };

  render() {
    const { isItemLoaded, loadItems, getRow } = this;
    const { totalNumberOfItems, numberOfViewItems, isLoading } = this.props;

    return (
      <div className={cx('scrollerListWrapper')}>
        {isLoading ? (
          <LoadingTextIndicator text="Загрузка" />
        ) : (
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
                    className={cx('scrollerList')}
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
        )}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  listData: getListData(store),
  numberOfViewItems: getNumberOfViewItems(store),
  totalNumberOfItems: getTotalNumberOfItems(store),
  isLoading: getLoadingStatus(store),
});

export const OrdersList = connect(
  mapStateToProps,
  { fetchListData: fetchOrdersAction },
)(WrappedComponent);
