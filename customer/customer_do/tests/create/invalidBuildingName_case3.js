
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
                    buildingName: '12121211221121211212sd1v21sd21v2d1v2sd1f2d12v1d2v1d21v2d1v2d1v2v12d12e12v1w121f21v2w12121v2', //Required. MinLen: 1, MaxLen: 50
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
const identifier = "Invalid building name input > invalid building name case 3"

module.exports = {
    getStub,
    expected,
    identifier
}