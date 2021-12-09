const getStub = () => {
    return {
        users:
            [
                {
                    partyNumber: 1, 
                    tenantID: 1, //Unrelated
                    countryLookupID: 1, //Unrelated
                    roleID: 2, //Unrelated
                    name: 'Rehan', //Required. MinLen: 3, MaxLen: 50
                    cnic: '12345-1234567-1', //Required. Format: ABCDE-ABCDEFG-A
                    title: 'Mr.', //Required. MinLen: 1, MaxLen: 10
                    shopNo: 45, 
                    additionalInfo: 'nothing special', //Optional. Min: 1, Max: 50
                    buildingNo: 5, //Optional. Min: 1, Max: Infinity
                    buildingName: 'Cleopetra', //Optional. MinLen: 1, MaxLen: 50
                    street: 'Movenpick', //Required. MinLen: 1, MaxLen: 50
                    block: 'G-II', //Optional. MinLen: 1, MaxLen: 25
                    society: 'Lake City', //Optional. MinLen: 1, MaxLen: 50
                    city: 'Lahore', //Required. MinLen: 1, MaxLen: 50
                    }
            ]
    }
}

const expected = false;
const identifier = "Contacts Feild missing > invalid contacts case 1"

module.exports = {
    getStub,
    expected,
    identifier
}