const getStub = () => {
    return {
        data:
        {
            meters:
                'meter number,type code,purchase date,mf@#2,1,2021.10.25,1@#35,1,2021/11/29,1.4@#',
            correlationID: 1638255173380,
            token: '34e08e2e7fd1ba6c85250e70748a1e35581c',
            originalUrl: '/process/register-process-instance'
        },
        serviceData:
        {
            correlationID: 1638255173380,
            webServiceEndpoint: 'upload-meters'
        },
        processInstanceId: 16021
    }
}

const expected = false;
const identifier = "Invalid purchase date format > InvalidPurchaseDate case 9"

module.exports = {
    getStub,
    expected,
    identifier
}