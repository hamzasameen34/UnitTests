const getStub = () => {
    return {
        meters:
            [{
                number: 1234,
                brand: 'Abc',
                meterType: 1,
                purchaseDate: '2021/01/22',
                mf: 'ABC'
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
const identifier = "MF not provided > InvalidMF case 2"

module.exports = {
    getStub,
    expected,
    identifier
}