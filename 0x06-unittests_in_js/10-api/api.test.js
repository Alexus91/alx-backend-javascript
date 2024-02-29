const assert = require('assert');
const http = require('http');

const BASE_URL = 'http://localhost:7866';
const LOGIN_URL = `${BASE_URL}/login`;
const PAYMENTS_URL = `${BASE_URL}/available_payments`;

// Test the /login endpoint
describe('/login', () => {
  it('should return a welcome message with the username', () => new Promise((done) => {
    const payload = JSON.stringify({ userName: 'john_doe' });

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: LOGIN_URL,
      body: payload,
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const body = JSON.parse(data);

        assert.strictEqual(res.statusCode, 200);

        assert.strictEqual(body.message, 'Welcome john_doe');

        done();
      });
    });

    req.write(payload);

    req.end();
  }));
});

describe('/available_payments', () => {
  it('should return the list of available payments', () => new Promise((done) => {
    const options = {
      method: 'GET',
      url: PAYMENTS_URL,
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const body = JSON.parse(data);

        assert.strictEqual(res.statusCode, 200);

        assert.deepStrictEqual(body, {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });

        done();
      });
    });

    req.end();
  }));
});
