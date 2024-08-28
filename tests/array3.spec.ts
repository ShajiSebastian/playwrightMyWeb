import { test, expect } from '@playwright/test';

const statusMap = new Map([
  [201, 'toBeCreated'],
  [401, 'toBeUnauthorized'],
  [403, 'toBeForbidden'],
  [404, 'toBeNotFound'],
]);

test('array', () => {
  statusMap.forEach((method, status) => {
   console.log('method:',method )
   console.log('status:',status )
    });
  });