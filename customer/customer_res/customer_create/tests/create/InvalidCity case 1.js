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
                "city": "",
                "contacts": [
                    {
                        "contactType": "Mobile",
                        "contactValue": "00923151234568"
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
const identifier = "Empty City input > invalid city case 1"

module.exports = {
    getStub,
    expected,
    identifier
}