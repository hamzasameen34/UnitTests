const getStub = () => {
    return {
        "meters": [
            {
                "number": 1234,
                "brand": "Asdf",
                "meterType": 1,
                "purchaseDate": "05/12/2021",
                "mf": ''
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
const identifier = "MF not provided > InvalidMF case 3"

module.exports = {
    getStub,
    expected,
    identifier
}