const getStub = () => {
    return {
        "meters": [
            {
                "number": 1234,
                "brand": "Asdf",
                "meterType": 1,
                "purchaseDate": "2021/09/12",
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
const identifier = "Invalid purchase date > InvalidPurchaseDate case 6"

module.exports = {
    getStub,
    expected,
    identifier
}