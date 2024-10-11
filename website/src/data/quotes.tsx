/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export const QUOTES = [
  {
    thumbnail: require('./quotes/marketstack.png'),
    name: 'marketstack',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: 'Finance',
      description: 'marketstack',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
       Real-Time, Intraday &
       Historical Market Data API
      </Translate>
    ),
    url: 'https://marketstack.com/',
  },
  {
    thumbnail: require('./quotes/positionstack.png'),
    name: 'positionstack',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: 'Geo',
      description: 'positionstack',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
        Accurate Forward & Reverse
        Batch Geocoding REST API
      </Translate>
    ),
    url: 'https://positionstack.com/',
  },
  {
    thumbnail: require('./quotes/tax_data.png'),
    name: 'Tax Data API',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: 'Finance',
      description: 'Tax Data API',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
      Instant VAT number and tax validation across the globe.
      </Translate>
    ),
    url: 'https://apilayer.com/marketplace/tax_data-api',
  },
];

export default QUOTES;
