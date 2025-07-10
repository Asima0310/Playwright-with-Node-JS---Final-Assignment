import { test, expect, request, playwright } from '@playwright/test';

test('Get single user API Test', async () => {
    const apiContext = await request.newContext({
        extraHTTPHeaders: {
            'x-api-key': 'reqres-free-v1'
        }
    });

    const response = await apiContext.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);

});

test('Get Multiple users API Test', async()=>{
    const apiContext = await request.newContext({
        extraHTTPHeaders: {
            'x-api-key': 'reqres-free-v1'
        }
    });
//const apiContext = await request.newContext();
const response = await apiContext.get('https://reqres.in/api/users?page=2')
expect(response.status()).toBe(200);
const responseBody =  await response.json();
expect(responseBody.data).toBeDefined()
expect(responseBody.data.length).toBeGreaterThan(0)
expect(responseBody.data[0]).toHaveProperty('email')
}) 

/*POST CALL */
test('Create user API Test', async ({ request }) => {
  const userData = {
    "name": "Asima Ali",
    "job": "Engineer"
  };

  const response = await request.post('https://reqres.in/api/users', {
    headers: {
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json'
    },
    data: userData
  });

  expect(response.status()).toBe(201); // Created
  const responseBody = await response.json();
  expect(responseBody).toBeDefined();
  expect(responseBody).toHaveProperty('name', userData.name);
  expect(responseBody).toHaveProperty('job', userData.job);
});
