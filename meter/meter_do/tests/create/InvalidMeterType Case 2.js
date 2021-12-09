const getStub = () => {
    return {
        meters:
            [{
                number: 1234,
                brand: 'Abc',
                meterType: '',
                purchaseDate: '2021/01/22',
                mf: 1
            }],
        serviceData:
        {
            webServiceEndpoint: '/meter/make-meter',
            webServiceCode: 200,
            webServiceEndpointCode: 238,
            correlationID: 1636622761586
        }
    }
}

const expected = false;
const identifier = "Empty Meter Type input > InvalidMeterType Case 2."

module.exports = {
    getStub,
    expected,
    identifier
}