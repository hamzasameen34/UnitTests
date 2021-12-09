const getStub = () => {
    return {
        meters:
            [{
                number: 1,
                brand: 'Abc',
                meterType: 1,
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
const identifier = "Meter already exists > InvalidNumber Case 6"

module.exports = {
    getStub,
    expected,
    identifier
}