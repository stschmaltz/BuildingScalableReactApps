/**
*
* LinkList
*
*/

import React from 'react';

import Link from '../Link';
import styles from './styles.css';

function LinkList({ links, routeTopicName }) {
  const linkNodes = links.map((link) => (
    <Link
      key={link.id}
      link={link}
    />
  ));
  return (
    <div className={styles.linkList}>
      {routeTopicName}
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
  routeTopicName: React.PropTypes.string.isRequired,
};

export default LinkList;
