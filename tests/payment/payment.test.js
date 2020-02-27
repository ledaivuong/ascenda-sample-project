import request from 'supertest';
import validTestingData from '../data/sample_response/validPayment';
import invalidTestingData from '../data/sample_response/invalidPayment';

describe('Successful cases', () => {
    test('I should receive correctly response for valid request', (done) => {
        let cardNumber = validTestingData.get('test_valid_payment_1').card_number;
        let expectedOutComeResponse = validTestingData.get('test_valid_payment_1').outcome;
        let expectedStatusResponse = validTestingData.get('test_valid_payment_1').status;
        let endpoint = `${rootURL}${cardNumber}`
        request(endpoint)
            .post('/')
            .send({ amount: 999, currency: 'usd' })
            .expect(201)
            .then(res => {
                let receivedOutcome = res.body.outcome;
                let receivedStatus = res.body.status;
                expect(receivedStatus).toEqual(expectedStatusResponse);
                expect(receivedOutcome).toEqual(expectedOutComeResponse);
                done();
            }).catch(err => { throw err; });
    });
});

describe('Failure cases', () => {
    test('I should receive decline response for stolen card', (done) => {
        let cardNumber = invalidTestingData.get("stolen_card").card_number;
        let expectedOutComeResponse = invalidTestingData.get("stolen_card").outcome;
        let expectedStatusResponse = invalidTestingData.get("stolen_card").status;
        let endpoint = `${rootURL}${cardNumber}`;
        request(endpoint)
            .post('/')
            .send({ amount: 999, currency: 'usd' })
            .expect(201)
            .then(res => {
                let receivedOutcome = res.body.outcome;
                let receivedStatus = res.body.status;
                expect(receivedStatus).toEqual(expectedStatusResponse);
                expect(receivedOutcome).toEqual(expectedOutComeResponse);
                done();
            }).catch(err => { throw err; });
    });
    test('I should receive decline response for lost card', (done) => {
        let cardNumber = invalidTestingData.get("lost_card").card_number;
        let expectedOutComeResponse = invalidTestingData.get("lost_card").outcome;
        let expectedStatusResponse = invalidTestingData.get("lost_card").status;
        let endpoint = `${rootURL}${cardNumber}`;
        request(endpoint)
            .post('/')
            .send({ amount: 999, currency: 'usd' })
            .expect(201)
            .then(res => {
                let receivedOutcome = res.body.outcome;
                let receivedStatus = res.body.status;
                expect(receivedStatus).toEqual(expectedStatusResponse);
                expect(receivedOutcome).toEqual(expectedOutComeResponse);
                done();
            }).catch(err => { throw err; });
    });
    test('I should receive blocked response for blocked card', (done) => {
        let cardNumber = invalidTestingData.get("blocked_card").card_number;
        let expectedOutComeResponse = invalidTestingData.get("blocked_card").outcome;
        let expectedStatusResponse = invalidTestingData.get("blocked_card").status;
        let endpoint = `${rootURL}${cardNumber}`;
        request(endpoint)
            .post('/')
            .send({ amount: 999, currency: 'usd' })
            .expect(201)
            .then(res => {
                let receivedOutcome = res.body.outcome;
                let receivedStatus = res.body.status;
                expect(receivedStatus).toEqual(expectedStatusResponse);
                expect(receivedOutcome).toEqual(expectedOutComeResponse);
                done();
            }).catch(err => { throw err; });
    });
    test('I should receive error response for insufficient funds', (done) => {
        let cardNumber = invalidTestingData.get("insufficient_funds").card_number;
        let expectedErrorResponse = invalidTestingData.get("insufficient_funds").text;
        let endpoint = `${rootURL}${cardNumber}`;
        request(endpoint)
            .post('/')
            .send({ amount: 999, currency: 'usd' })
            .expect(400)
            .then(err => {
                let receivedError = err.text;
                expect(receivedError).toEqual(expectedErrorResponse);
                done();
            }).catch(err => { throw err; });
    });
    test('I should receive error response for invalid card number', (done) => {
        let cardNumber = invalidTestingData.get("invalid_credit_card_number").card_number;
        let expectedErrorResponse = invalidTestingData.get("invalid_credit_card_number").error;
        let endpoint = `${rootURL}${cardNumber}`;
        request(endpoint)
            .post('/')
            .send({ amount: 999, currency: 'usd' })
            .expect(201)
            .then(res => {
                let receivedErrorResponse = res.body.error;
                expect(receivedErrorResponse).toEqual(expectedErrorResponse);
                done();
            }).catch(err => { throw err; });
    });
});


