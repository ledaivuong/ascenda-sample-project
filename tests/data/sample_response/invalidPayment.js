let data = [
    {
        "test_name": "stolen_card",
        "card_number": "4000000000009979",
        "id": "ch_2DiD402eZvKYlo1Cz8XicVgK",
        "outcome": {
            "network_status": "declined_by_network",
            "reason": "stolen_card",
            "type": "issuer_declined"
        },
        "status": "failed"
    },
    {
        "test_name": "lost_card",
        "card_number": "4000000000009987",
        "id": "ch_1DiD402qZ2KYlo2Cz8XicVgK",
        "outcome": {
            "network_status": "declined_by_network",
            "reason": "lost_card",
            "type": "issuer_declined"
        },
        "status": "failed"
    },
    {
        "test_name": "blocked_card",
        "card_number": "4100000000000019",
        "id": "ch_1DiD402eZvKY123Cz8XicVgK",
        "object": "charge",
        "amount": 999,
        "created": 1545018400,
        "currency": "usd",
        "customer": null,
        "description": "Blocked charge",
        "outcome": {
            "network_status": "not_sent_to_network",
            "reason": "highest_risk_level",
            "type": "blocked"
        },
        "status": "blocked"
    },
    {
        "test_name": "insufficient_funds",
        "card_number": "4000000000009995",
        "text": "\"Max number of elements reached for this resource!\""
    },
    {
        "test_name": "invalid_credit_card_number",
        "card_number": "40000007600000",
        "error": {
            "message": "Invalid Primary Account Number provided",
            "type": "invalid_request_error"
        }
    }

];
export default new Map(data.map((i) => [i.test_name, i]));