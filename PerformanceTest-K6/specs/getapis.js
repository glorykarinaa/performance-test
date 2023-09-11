import http from 'k6/http';
import {sleep} from 'k6';

export const options={
    executor: 'shared-iterations',
    vus: 10,
    iterations: 200,
    MaxDuration : '30s',
}

export default function(){
    http.get('https://k6.io');
    sleep (1);
}