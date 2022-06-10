import { check, sleep } from 'k6';
import http from 'k6/http';

const query = `
query Users {
  users {
    id
    name
    birthDate
    createdAt
  }
}
}`;

const headers = {
  // Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

export default function () {

  // Check:!!!! https://times.hrbrain.co.jp/entry/k6

  const uri = `http://172.31.98.229:3000/graphql`;
  const res = http.post(uri, JSON.stringify({ query }), {
    headers,
  });


   console.log('res.status', res.status);
   // console.log(JSON.stringify(res.body));
  // console.log(JSON.parse(res.body));
  // if ( res.status === 200 ) {
  //   console.log(JSON.stringify(res.body));
  // }

  check(res, {
    'status was 200': (r) => res.status === 200,
  });
  sleep(1);
}
