import { data } from './data.js';

const _filterByDataBy = (arr, pred) => arr.filter(pred);
const res = _filterByDataBy(
     data,
     ({ name }) => !name.includes('County')
);

 const res2 = _filterByDataBy(
    data,
    ({ name }) => name.split(' ').length === 3
);



console.log(res);
console.log(res2);