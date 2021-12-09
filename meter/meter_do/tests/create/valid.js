const getStub = () => {
    return {
        meters:
            [{
                number: 1234,
                brand: 'Abc',
                meterType: 1,
                purchaseDate: '22/01/2021',
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

const expected = true;
const identifier = "All valid. Should result in meter creation."

module.exports = {
    getStub,
    expected,
    identifier
}