const getStub = () => {
    return {
        "meters": [
            {
                "number": 1234,
                "brand": "Asdf",
                "meterType": 1,
                "purchaseDate": "",
                "mf": 1
            }
        ],
        "serviceData": {
            "webServiceEndpoint": "/meter/make-meter",
            "webServiceCode": 200,
            "webServiceEndpointCode": 238
        }
    }
}

const expected = false;
const identifier = "Purchase date not provided > InvalidPurchaseDate case 5"

module.exports = {
    getStub,
    expected,
    identifier
}