'use strict';

const fs = require('fs');

const indiciesOf = function(string, value) {
  const indices = [];
  let idx = string.indexOf(value);

  while (idx !== -1) {
    indices.push(idx);
    idx = string.indexOf(value, idx + 1);
  }

  return indices;
};

module.exports = function(path) {
  // eslint-disable-next-line no-sync
  const sql = fs.readFileSync(path, 'utf8');
  const indices = indiciesOf(sql, '/* Exercise');

  return indices
    .map((index, i) => {
      return sql.substring(index, indices[i + 1] || sql.length - 1);
    })
    .reduce((accum, stmt) => {
      const name = stmt.split('\n')[0].replace('/* Exercise', '').trim();

      accum[name] = stmt.substring(stmt.indexOf('*/') + 2).trim();

      return accum;
    }, {});
};
