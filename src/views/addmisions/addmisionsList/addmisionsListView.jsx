import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

// Components
import { RegularCard, ItemGrid, Table } from '../../../components';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class AddmisionsListView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getContent = () => {
    const { tableData, tableHead, tableHeaderColor, handleOnRowClick } = this.props;
    return (
      <Table
        handleOnRowClick={e => handleOnRowClick(e)}
        tableHeaderColor={tableHeaderColor}
        tableHead={tableHead}
        tableData={tableData}
      />
    );
  };

  render() {
    return (
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <RegularCard
            plainCard={false}
            cardTitle="Basvurular"
            cardSubtitle="Basvuruyu sec ve onayla."
            content={this._getContent()}
          />
        </ItemGrid>
      </Grid>
    );
  }
}

AddmisionsListView.propTypes = {
  tableData: PropTypes.array,
  tableHead: PropTypes.array,
  tableHeaderColor: PropTypes.string,
  handleOnRowClick: PropTypes.func.isRequired,
};

AddmisionsListView.defaultProps = {
  tableData: [],
  tableHead: [],
  tableHeaderColor: 'red',
};

export default AddmisionsListView;