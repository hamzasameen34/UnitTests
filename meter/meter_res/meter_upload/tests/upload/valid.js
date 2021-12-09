const getStub = () => {
    return {
        data:
        {
            meters:
                'meter number,type code,purchase date,mf@#2,1,29/11/2021,1@#35,1,29/11/2021,1.4@#',
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

const expected = true;
const identifier = "All valid. Should result in all meters upload."

module.exports = {
    getStub,
    expected,
    identifier
}