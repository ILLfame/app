import React from 'react';

import { ListView } from '../controllers/views';
import { DataController } from '../controllers';

export const Home = () => (
  <DataController>
    {({
      data, getData, nextLink, pending,
    }) => (
      <ListView {...{
        data, getData, nextLink, pending,
      }}
      />
    )}
  </DataController>
);
