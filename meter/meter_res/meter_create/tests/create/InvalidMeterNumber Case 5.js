const getStub = () => {
    return {
        "meters": [
            {
                "number": '',
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
const identifier = "Meter number not provided > InvalidMeterNumber case 5"

module.exports = {
    getStub,
    expected,
    identifier
}