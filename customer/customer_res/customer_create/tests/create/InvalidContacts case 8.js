const getStub = () => {
    return {
        "users": [
            {
                "partyNumber": 123,
                "tenantID": 1,
                "countryLookupID": 1,
                "roleID": 2,
                "name": "Rehan",
                "cnic": "21201-1234567-1",
                "title": "Mr.",
                "shopNo": 123,
                "additionalInfo": "123",
                "buildingNo": 123,
                "buildingName": "asdf",
                "street": "assdf",
                "block": "adsf",
                "society": "asdf",
                "city": "asdf",
                "contacts": [
                    {
                        "contactType": "Land line",
                        "contactValue": "04212312312"
                    }
                ]
            }
        ],
        "serviceData": {
            "webServiceEndpoint": "/user/make-user",
            "webServiceCode": 200,
            "webServiceEndpointCode": 215
        }
    }
}

const expected = false;
const identifier = "Invalid contacts input > invalid contacts case 8"

module.exports = {
    getStub,
    expected,
    identifier
}