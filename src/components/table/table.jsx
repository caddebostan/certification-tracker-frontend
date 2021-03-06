import React from 'react';
import { withStyles, Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core';

import PropTypes from 'prop-types';

import tableStyle from '../../assets/jss/material-dashboard-react/tableStyle';

// TODO: its accep it coming from our database
const _handleOnRowClick = (id, props) => {
  const { handleOnRowClick } = props;

  if (handleOnRowClick) {
    handleOnRowClick(id);
  }
};

const CustomTable = ({ ...props }) => {
  const { classes, tableHead, tableData, tableHeaderColor, quickButtons } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
            <TableRow>
              {tableHead.map((prop, key) => (
                <TableCell className={`${classes.tableCell} ${classes.tableHeadCell}`} key={key}>
                  {prop}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => (
            <TableRow
              onClick={() => _handleOnRowClick(key, { ...props })}
              key={key}
              className="table-row"
            >
              {prop.map((item, index) => (
                <TableCell className={classes.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
              {quickButtons && <TableCell className={classes.tableCell}>{quickButtons}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

CustomTable.defaultProps = {
  tableHeaderColor: 'gray',
  tableHead: [''],
  tableData: [['']],
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default withStyles(tableStyle)(CustomTable);
