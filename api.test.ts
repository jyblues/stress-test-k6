import http from 'k6/http';
import {check, sleep} from 'k6';
import _ from 'https://cdn.jsdelivr.net/npm/underscore@1.13.3/underscore-umd-min.js';

export default function() {

  const arr = [3,6,9,1,13];
  console.log('underscore first=', _.first(arr));

  const data = {username: 'username', password: 'password'};
  let res = http.get('http://localhost:3000/', data);
  check(res, { 'success login': (r) => r.status === 200 });
  sleep(0.3);
}
