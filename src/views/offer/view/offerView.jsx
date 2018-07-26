import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import OfferListView from './offerListView';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class OfferView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      tableHead: [],
    };
  }

  // Component Life Cycles
  componentWillMount() {
    // TODO: when we got data from our database all this things sholuld be fix.
    this.setState({
      tableData: [
        ['1', 'Nabi', 'Tasci', 'Rize', 'Bekliyor'],
        ['3', 'Honda', 'Selami', 'Manisa', 'Ucret'],
        ['2', 'Otolastik', 'Nabi', 'Istanbul', 'Bekliyor'],
        ['4', 'Philip', 'Mustafa', 'Antalya', 'Teklif'],
        ['5', 'Novartis', 'Ahmet Mehmet', 'Sakarya', 'Planlamada'],
        ['6', 'Ugur', 'Ugur ERDAL', 'Trabzon', 'Bekliyor'],
      ],
      tableHead: ['No', 'Firma Adi', 'Yetkili', 'Adresi', 'Durum'],
    });
  }

  // Component Functions

  _handleOnRowClick = id => {
    console.log(id);
    this.props.history.push('/teklifler/form');
  };

  render() {
    const { tableData, tableHead } = this.state;

    return (
      <OfferListView
        tableData={tableData}
        tableHead={tableHead}
        tableHeaderColor
        handleOnRowClick={this._handleOnRowClick}
      />
    );
  }
}

OfferView.propTypes = {
  history: PropTypes.object.isRequired,
};

export default OfferView;
