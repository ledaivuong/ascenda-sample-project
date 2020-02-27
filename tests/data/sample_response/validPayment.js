let data = [
    {
        "test_name": "test_valid_payment_1",
        "card_number": "4242424242424242",
        "id": "ch_1DiD402eZvKYlo2Cz8XicVgK",
        "object": "charge",
        "amount": 999,
        "created": 1545018400,
        "currency": "usd",
        "customer": null,
        "description": "Successful charge",
        "outcome": {
            "network_status": "approved_by_network",
            "reason": null,
            "risk_level": "normal",
            "risk_score": 64,
            "seller_message": "Payment complete.",
            "type": "authorized"
        },
        "source": {
            "id": "card_1DiD3z2eZvKYlo2CilH44yQY",
            "object": "card",
            "address_city": null,
            "address_country": null,
            "address_line1": null,
            "address_line1_check": null,
            "address_line2": null,
            "address_state": null,
            "address_zip": null,
            "address_zip_check": null,
            "brand": "Visa",
            "country": "US",
            "customer": null,
            "cvc_check": null,
            "dynamic_last4": null,
            "exp_month": 12,
            "exp_year": 2019,
            "fingerprint": "Xt5EWLLDS7FJjR1c",
            "funding": "credit",
            "last4": "4242",
            "metadata": {
            },
            "name": null,
            "tokenization_method": null
        },
        "status": "succeeded"
    }
];
export default new Map(data.map((i) => [i.test_name, i]));