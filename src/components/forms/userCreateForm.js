import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { required } from '../../utilities/validation';

import { ReduxFormInput, ItemGrid } from '../../components';

// eslint-disable-next-line
function UserCreateForm({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput name="kullaniciAdi" labelText="Kullanici Adi" validate={required} />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput name="kullaniciPassword" labelText="Ad Soyad" validate={required} />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput name="kullaniciPassword" labelText="Kullanici Adi" validate={required} />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput name="kullaniciPassword" labelText="Email" />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput name="kullaniciPassword" labelText="Email" />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default reduxForm({
  form: 'LoginForm',
})(connect()(UserCreateForm));
