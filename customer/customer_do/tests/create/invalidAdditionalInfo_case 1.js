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
                    additionalInfo: '@!123wer78787as87xs8as8x78as7d87asd87as8c7d8azcs8c48s4c8sa4x8s4d8s8d8qs48s4q8x4q8x48a', //Optional. Min: 1, Max: 50
                    buildingNo: 5, //Optional. Min: 1, Max: Infinity
                    buildingName: 'Cleopetra', //Optional. MinLen: 1, MaxLen: 50
                    street: 'Movenpick', //Required. MinLen: 1, MaxLen: 50
                    block: 'G-II', //Optional. MinLen: 1, MaxLen: 25
                    society: 'Lake City', //Optional. MinLen: 1, MaxLen: 50
                    city: 'Lahore', //Required. MinLen: 1, MaxLen: 50
                    contacts: //Contacts will only be accepted in Intl format. 00923... and +923.. Both are valid
                        [
                            { contactType: "Mobile", contactValue: "+923133605457" },
                            { contactType: "Land line", contactValue: "+924212312312" },
                            { contactType: "Whatsapp", contactValue: "00923133605457" }
                        ]
                }
            ]
    }
}

const expected = false;
const identifier = "Additional Info invalid input > additional info case 1"

module.exports = {
    getStub,
    expected,
    identifier
}