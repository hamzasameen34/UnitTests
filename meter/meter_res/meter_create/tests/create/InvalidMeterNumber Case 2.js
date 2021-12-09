const getStub = () => {
    return {
        "meters": [
            {
                "number": -21,
                "brand": "Asdf",
                "meterType": 1,
                "purchaseDate": "05/12/2021",
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
const identifier = "Invalid meter number input > InvalidMeterNumber case 2"

module.exports = {
    getStub,
    expected,
    identifier
}