import React from 'react';

import { DataController } from '../../controllers';
import { Details } from '../../controllers/views/details.view';

export const Ads = ({ match }) => (
  <DataController>
    {({ data }) => (
      <Details {...{ id: match.params.id, data }} />
    )}
  </DataController>

);
