/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <div className={styles.foxFactContainer}>
        <FoxFact className={styles.fox} />
        <p>
          <strong>API Marketplace</strong>{' '}
          APILayer is your gateway to a vibrant marketplace designed to revolutionize the way APIs are shared and monetized. At APILayer, we understand that APIs are the lifeblood of modern software development, and we've built a platform to connect creators and consumers seamlessly.
          Our platform empowers API creators, allowing them to showcase their innovations to a global audience. Whether you've developed a cutting-edge payment gateway, geolocation service, or any other API, APILayer provides a dedicated space for you to upload, market, and monetize your creations.
        </p>
      </div>
    </Section>
  );
}

export default Platforms;
