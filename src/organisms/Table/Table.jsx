import React from "react";
import { AutoResizer } from "react-base-table";
import ReactTexty from "react-texty";
import { withTheme } from "styled-components";

import "react-base-table/styles.css";
import "react-texty/styles.css";

import EmptyTable from "./components/Empty";
import { StyledBaseTable, StyledTableWrapper } from "./styled";
import SelectableTable from "./SelectableTable";
import UiLink from "../../atoms/UiLink";
import EditableCell from "./components/EditableCell";
import TableSummary from "./components/TableSummary";
import ErrorBoundary from "../../ErrorBoundary";

const Table = ({
  children,
  columns,
  components,
  data,
  emptyText,
  headerHeight = 48,
  isReadOnly,
  maxHeight,
  onBlurCellInput,
  // onChangeCellInput,
  onColumnSort,
  onResize,
  onRowClick,
  // onSubmitCellInput,
  paddingsAndBorders = 40 + 2,
  rowHeight,
  rowClassName,
  rowKey,
  selectable,
  sortBy,
  summaryData,
  textsChosenLng,
  theme,
  // topHeight,
  isAllSelected,
  useRowKeyInEditCellName,
  ...rest
}) => {
  const TableCell = (props) => {
    const { className, cellData, column } = props;
    if (column.cellRenderer) {
      return column.cellRenderer();
    }

    if (column.isLink) {
      return (
        <UiLink
          href={cellData?.includes("https") ? cellData : `https://${cellData}`}
          key={column.key}
        >
          <ReactTexty className={className}>{cellData}</ReactTexty>
        </UiLink>
      );
    }

    if (!isReadOnly && column.isEditable) {
      return (
        <EditableCell
          textsChosenLng={textsChosenLng}
          // value={editedValues[rowData[rowKey]]}
          column={column}
          onBlur={onBlurCellInput}
          // onChange={onChangeCellInput}
          // onSubmit={onSubmitCellInput}
          rowKey={rowKey}
          useRowKeyInName={useRowKeyInEditCellName}
          {...props}
        />
      );
    }

    return (
      <ReactTexty key={column.key} className={className}>
        {cellData === 0 ? "0" : cellData}
      </ReactTexty>
    );
  };

  return (
    <AutoResizer onResize={onResize}>
      {({ width, height }) => {
        return (
          <>
            <StyledTableWrapper>
              <StyledBaseTable
                selectable={selectable}
                isAllSelected={isAllSelected}
                as={selectable && !isReadOnly && SelectableTable}
                emptyRenderer={<EmptyTable text={emptyText} />}
                columns={columns}
                data={data}
                width={width - paddingsAndBorders}
                height={height}
                maxHeight={maxHeight}
                headerHeight={headerHeight}
                rowHeight={rowHeight}
                rowClassName={rowClassName}
                className={summaryData && !!data?.length ? "withSummary" : ""}
                rowKey={rowKey || "id"}
                components={{
                  TableCell,
                  ...components,
                }}
                sortBy={sortBy}
                onColumnSort={onColumnSort}
                rowEventHandlers={{ onClick: onRowClick }}
                {...rest}
              >
                {children}
              </StyledBaseTable>
            </StyledTableWrapper>
            {summaryData && !!data?.length && (
              <ErrorBoundary size="small">
                <TableSummary
                  summaryData={summaryData}
                  headerHeight={headerHeight}
                />
              </ErrorBoundary>
            )}
          </>
        );
      }}
    </AutoResizer>
  );
};

export default withTheme(Table);
