const getStub = () => {
    return {
        data:
        {
            users:
                'customer number,name,cnic,building number,bulding name,shop number,street,block,society,city,country,contact type,contact,additional information,title@#52,Freda,39706-6089523-5,1,Juliana,896,h4,U,Izmir,Lahore,1,Mobile,+923000000000,nothing,Mr@#42,Freda,39700-6089523-5,1,Juliana,896,h4,U,Izmir,Lahore,1,Mobile,+923000000000,nothing,Mr@#',
            correlationID: 1637910361111,
            token: '34e08e2e7fd1ba6c85250e70748a1e35581c',
            originalUrl: '/process/register-process-instance'
        },
        serviceData:
        {
            correlationID: 1637910361111,
            webServiceEndpoint: 'upload-customers'
        },
        processInstanceId: 15591
    }
}

const expected = true;
const identifier = "All valid. Should result in all customers upload."

module.exports = {
    getStub,
    expected,
    identifier
}