import React from 'react';

import Card from '../NFTCard';

import styles from './styles.module.scss';

const NFTsGrid = ({ items, loading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {(items || []).map((item, idx) => (
          <div className={styles.nft} key={idx}>
            <Card item={item} />
          </div>
        ))}
        {loading &&
          new Array(20).fill(0).map((_, idx) => (
            <div className={styles.nft} key={idx}>
              <Card loading />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NFTsGrid;