const getStub = () => {
    return {
        meters:
            [{
                number: '123A',
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
const identifier = "Invalid meter number > InvalidNumber Case 5"

module.exports = {
    getStub,
    expected,
    identifier
}