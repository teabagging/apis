/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
  url: string;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'ipstack',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/ipstack.png',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Geo
      </Translate>
    ),
    url: 'https://ipstack.com/?utm_source=apilayermarketplace&utm_medium=featured',
  },
  {
    title: translate({
      message: 'Zenserp API',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/zenserp.png',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Calendar
      </Translate>
    ),
    url: 'https://zenserp.com/?utm_source=apilayermarketplace&utm_medium=featured',
  },
  {
    title: translate({
      message: 'Fixer API',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/fixer.png',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
       Currency
      </Translate>
    ),
    url: 'https://apilayer.com/marketplace/fixer-api?utm_source=apilayermarketplace&utm_medium=featured',
  },
  {
    title: translate({
      message: 'aviationstack',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/aviationstack.png',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
         Geo
      </Translate>
    ),
    url: 'https://aviationstack.com/?utm_source=apilayermarketplace&utm_medium=featured',
  },
  {
    title: translate({
      message: 'Number Verification',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/number_verification.png',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
         Communication
      </Translate>
    ),
    url: 'https://apilayer.com/marketplace/number_verification-api?utm_source=apilayermarketplace&utm_medium=featured',
  },
];

export default FEATURES;
