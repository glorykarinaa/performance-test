import http from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6';

export const options={
    vus: 30,
    duration : '10s',
}

export default function(){
    const url = ('https://dummyjson.com/auth/login');
    const payload = JSON.stringify({
        username : 'kminchelle',
        password  : '0lelplR',

    });

    const params = {
        headers:{
            'Content-Type' : 'application/json'
        },
    };

    const res = http.post(url, payload, params);
    check(res, {
        'is status 200': (r) => r.status === 200,
        'is res body has username': (r) => r.body.includes('kminchelle'),
    });

}