import React, { useContext, useEffect, useRef } from 'react'
import clsx from 'clsx'
import InfiniteLoader from 'react-window-infinite-loader'
import AutoSizer from 'react-virtualized-auto-sizer'
import { VariableSizeGrid as Grid } from 'react-window'

import { StyledVirtualizedList } from './styled'
import ListTableRow from '../ListTableRow'
import { ScreenContext } from '../..'
import CardTableItem from '../CardTableItem'

const VirtualizedList = ({
  cellProps,
  className,
  columns,
  columnCount,
  columnWidth,
  CustomListItem,
  editedItemId,
  estimatedColumnWidth,
  estimatedRowHeight,
  gridRef,
  hasNextPage,
  isNextPageLoading,
  itemSize,
  items,
  loadNextPage,
  // maxHeight,
  // minimumBatchSize = 10, // Minimum number of rows to be loaded at a time. This property can be used to batch requests to reduce HTTP requests.
  onItemClick,
  onItemSelect,
  onResize: onCustomResize,
  onSetColumnCount,
  rowCount,
  rowHeight,
  selectable,
  selectedRowKeys,
  sortBy,
  t,
  // threshold = 15, // A threshold of 15 means that data will start loading when a user scrolls within 15 rows.
  type,
  variant,
  ...rest
}) => {
  const { screenUp } = useContext(ScreenContext) || {}
  // We create a reference for the InfiniteLoader
  const infiniteLoaderRef = useRef(null)
  const hasMountedRef = useRef(false)

  const onResize = ({ width }) => {
    onSetColumnCount(width)

    if (onCustomResize) {
      onCustomResize(width)
    }
  }

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index) => !hasNextPage || index < items.length

  // Render an item or a loading indicator.
  const Item = ({ index, style, columnIndex, rowIndex }) => {
    let content
    const itemIndex = index === undefined ? rowIndex * columnCount + columnIndex : index

    const isLoaded = isItemLoaded(itemIndex)

    const TableItem =
      (typeof CustomListItem === 'object' && CustomListItem) ||
      (variant === 'grid' ? CardTableItem : ListTableRow)

    if (!isLoaded) {
      content = 'Loading...'
    } else {
      content = items[itemIndex] || {}
    }

    const onClick = (event) => onItemClick({ event, rowKey: content.id || itemIndex })

    if (!items[itemIndex]) {
      return null
    }

    return (
      <div style={style} onClick={typeof CustomListItem === 'object' ? undefined : onClick}>
        <TableItem
          item={content}
          cellProps={cellProps}
          editMode={editedItemId == items[itemIndex]?.id}
          index={itemIndex}
          onItemSelect={onItemSelect}
          onClick={onClick}
          key={content.id || itemIndex}
          style={style}
          data={content}
          columns={columns}
          selectable={isLoaded && selectable}
          selectedRowKeys={selectedRowKeys}
          t={t}
          type={type}
        />
      </div>
    )
  }

  // Each time the sort prop changed we called the method resetloadMoreItemsCache to clear the cache
  useEffect(() => {
    // We only need to reset cached items when "sortOrder" changes.
    // This effect will run on mount too; there's no need to reset in that case.
    if (hasMountedRef.current) {
      if (infiniteLoaderRef.current) {
        infiniteLoaderRef.current.resetloadMoreItemsCache()
      }
    }
    hasMountedRef.current = true
  }, [sortBy])

  return (
    <AutoSizer onResize={onResize}>
      {({ height, width }) => {
        return (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
            ref={infiniteLoaderRef}
          >
            {({ onItemsRendered, ref }) => (
              <StyledVirtualizedList
                as={variant === 'grid' && Grid}
                screenUp={screenUp}
                height={height}
                itemCount={itemCount}
                itemSize={itemSize}
                onItemsRendered={(props) =>
                  onItemsRendered({
                    visibleStartIndex: props.visibleStartIndex || 0,
                    visibleStopIndex: props.visibleStopIndex || 0,
                    overscanStartIndex: props.overscanStartIndex || 0,
                    overscanStopIndex: props.overscanStopIndex || 0,
                  })
                }
                ref={(list) => {
                  ref(list)
                  gridRef.current = list
                }}
                width={width}
                className={clsx(className, 'listVirtualized')}
                columnWidth={() =>
                  columnWidth || width / columnCount - (screenUp === 'xs' || screenUp === 'xxs' ? 10 : 3)
                }
                columnCount={columnCount}
                rowHeight={() => rowHeight} // tableMode === 'cards'
                estimatedColumnWidth={estimatedColumnWidth}
                estimatedRowHeight={estimatedRowHeight}
                rowCount={rowCount || (variant === 'grid' ? Math.ceil(itemCount / columnCount) : itemCount)}
                {...rest}
                // outerElementType={outerElementType}
                // innerElementType={innerElementType}
              >
                {Item}
              </StyledVirtualizedList>
            )}
          </InfiniteLoader>
        )
      }}
    </AutoSizer>
  )
}

export default VirtualizedList
