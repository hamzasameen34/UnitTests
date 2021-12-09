const getStub = () => {
    return{
      serviceData: {
        webServiceEndpoint: "/organization/make-service",
        webServiceCode: 200,
        webServiceEndpointCode: 201,
        correlationID: 1637216480246
      },
      service: {
        billingCycle: "monthly",
        name: "Izmir Service1033",
        dueDateOffset: 10,
        description: "This is Izmir service.",
        code: "IZM1033",
        values: [
          {
            compNameLookupID: 46,
            columnName: "comp1",
            accountID: null,
            name: "Elec Rate",
            order: 1,
            accountType: "None",
            componentType: "Variable",
            paymentPriority: null,
            status: 1,
            ts: null
          },
          {
            compNameLookupID: 47,
            columnName: "comp2",
            accountID: null,
            name: "LP Factor",
            order: 2,
            accountType: "None",
            componentType: "Variable",
            paymentPriority: null,
            status: 1,
            ts: null
          },
          {
            compNameLookupID: 78,
            columnName: "comp15",
            accountID: null,
            name: "Nothing",
            order: 3,
            accountType: "None",
            componentType: "Variable",
            paymentPriority: null,
            status: 1,
            ts: null
          }
        ],
        components: [
          {
            compNameLookupID: 48,
            columnName: "comp3",
            accountID: 700,
            name: "Electricity Charges",
            order: 1,
            accountType: "payable",
            componentType: "Calculated",
            paymentPriority: 4,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 49,
            columnName: "comp4",
            accountID: 701,
            name: "WHT",
            order: 2,
            accountType: "payable",
            componentType: "Calculated",
            paymentPriority: 1,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 50,
            columnName: "comp5",
            accountID: 702,
            name: "Other",
            order: 3,
            accountType: "income",
            componentType: "Manual",
            paymentPriority: 8,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 52,
            columnName: "comp7",
            accountID: 704,
            name: "G1 Street Light",
            order: 4,
            accountType: "payable",
            componentType: "Calculated",
            paymentPriority: 3,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 53,
            columnName: "comp8",
            accountID: 705,
            name: "G1 Garbage",
            order: 5,
            accountType: "income",
            componentType: "Calculated",
            paymentPriority: 7,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 54,
            columnName: "comp9",
            accountID: 706,
            name: "G1 Maintenance",
            order: 6,
            accountType: "income",
            componentType: "Calculated",
            paymentPriority: 6,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 55,
            columnName: "comp10",
            accountID: 707,
            name: "G1 Water",
            order: 7,
            accountType: "income",
            componentType: "Calculated",
            paymentPriority: 5,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 56,
            columnName: "comp11",
            accountID: 708,
            name: "G1 PTV",
            order: 8,
            accountType: "payable",
            componentType: "Calculated",
            paymentPriority: 2,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 57,
            columnName: "comp12",
            accountID: null,
            name: "Current Bill",
            order: 9,
            accountType: null,
            componentType: "Calculated",
            paymentPriority: null,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 51,
            columnName: "comp6",
            accountID: 703,
            name: "LP Charges",
            order: 10,
            accountType: "income",
            componentType: "Calculated",
            paymentPriority: 9,
            latePayment: 1,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 58,
            columnName: "comp13",
            accountID: null,
            name: "Payable within Due Date",
            order: 11,
            accountType: null,
            componentType: "Calculated",
            paymentPriority: null,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          },
          {
            compNameLookupID: 59,
            columnName: "comp14",
            accountID: null,
            name: "Payable after Due Date",
            order: 12,
            accountType: null,
            componentType: "Calculated",
            paymentPriority: null,
            latePayment: 0,
            status: 1,
            ts: null,
            calculationOrder: null,
            serviceCode: "IZM103"
          }
        ],
        connectionInputs: [
          {
            columnName: "connParam1",
            label: "G1 Code",
            dataType: "List",
            value: "1 (2 K),2 (1 K),3 (10 M),4 (8-M),5 (7 M),6 (5 M),7 (Flat),8 (Shop),9 (Commercial),10 (Com-10-M),11 (Bank),12 (school),13 (tower),14 (office),15 (mosque),16 (shop1),17 (Btyplr),18 (mghall),19 (comflat),20 (sui/ptcl),21 (hotel),22 (gim),23 (jmal),24 (office2),25 (disp),26 (tower2),27 (tower1),28 (flatcom),29 (comtemp),30 (complot),31 (comtemp1),32 (complot1),33 (school2),34 (temp),35 (temp1),36 (In house),37 (2 K 2nd),38 (2 K temp),39 (2 K temp1),40 (1 K 2nd),41 (1 K temp),42 (1 K tmp1),43 (10 M 2nd),44 (10 M temp),45 (10 M temp1),46 (8 M 2nd),47 (8 M temp),48 (8 M temp1),49 (7 M 2nd),50 (7 M temp),51 (7 M temp1),52 (5 M 2nd),53 (5 M temp),54 (5 M temp1),55 (8 K),56 (6 K),57 (4 K),58 (10 K),59 (12 K),60 (14 K),61 (16 K),62 (2 Kanal),63 (Madrasa),64 (stonly),65 (4 K temp),66 (5 M temp2),67 (Group),68 (Group1),69 (office3),70 (16Mcom),71 (2K temp2),72 (Club),73 (temp3),74 (office2),75 (2K),76 (all),77 (MosqueF),78 (12 K Temp),79 (4 K temp1)",
            position: [
              null
            ],
            serviceCode: "IZM103",
            ts: null,
            parameterID: 14,
            name: "G1 Code",
            type: "List",
            values: "1 (2 K),2 (1 K),3 (10 M),4 (8-M),5 (7 M),6 (5 M),7 (Flat),8 (Shop),9 (Commercial),10 (Com-10-M),11 (Bank),12 (school),13 (tower),14 (office),15 (mosque),16 (shop1),17 (Btyplr),18 (mghall),19 (comflat),20 (sui/ptcl),21 (hotel),22 (gim),23 (jmal),24 (office2),25 (disp),26 (tower2),27 (tower1),28 (flatcom),29 (comtemp),30 (complot),31 (comtemp1),32 (complot1),33 (school2),34 (temp),35 (temp1),36 (In house),37 (2 K 2nd),38 (2 K temp),39 (2 K temp1),40 (1 K 2nd),41 (1 K temp),42 (1 K tmp1),43 (10 M 2nd),44 (10 M temp),45 (10 M temp1),46 (8 M 2nd),47 (8 M temp),48 (8 M temp1),49 (7 M 2nd),50 (7 M temp),51 (7 M temp1),52 (5 M 2nd),53 (5 M temp),54 (5 M temp1),55 (8 K),56 (6 K),57 (4 K),58 (10 K),59 (12 K),60 (14 K),61 (16 K),62 (2 Kanal),63 (Madrasa),64 (stonly),65 (4 K temp),66 (5 M temp2),67 (Group),68 (Group1),69 (office3),70 (16Mcom),71 (2K temp2),72 (Club),73 (temp3),74 (office2),75 (2K),76 (all),77 (MosqueF),78 (12 K Temp),79 (4 K temp1)"
          },
          {
            columnName: "connParam2",
            label: "G1 Street Light Applied",
            dataType: "List",
            value: "YES,NO",
            position: [
              null
            ],
            serviceCode: "IZM103",
            ts: null,
            parameterID: 15,
            name: "G1 Street Light Applied",
            type: "List",
            values: "YES,NO"
          },
          {
            columnName: "connParam3",
            label: "G1 Garbage Applied",
            dataType: "List",
            value: "YES,NO",
            position: [
              null
            ],
            serviceCode: "IZM103",
            ts: null,
            parameterID: 16,
            name: "G1 Garbage Applied",
            type: "List",
            values: "YES,NO"
          },
          {
            columnName: "connParam4",
            label: "G1 Maintenance Applied",
            dataType: "List",
            value: "YES,NO",
            position: [
              null
            ],
            serviceCode: "IZM103",
            ts: null,
            parameterID: 17,
            name: "G1 Maintenance Applied",
            type: "List",
            values: "YES,NO"
          },
          {
            columnName: "connParam5",
            label: "G1 Water Applied",
            dataType: "List",
            value: "YES,NO",
            position: [
              null
            ],
            serviceCode: "IZM103",
            ts: null,
            parameterID: 18,
            name: "G1 Water Applied",
            type: "List",
            values: "YES,NO"
          },
          {
            columnName: "connParam6",
            label: "G1 PTV Applied",
            dataType: "List",
            value: "YES,NO",
            position: [
              null
            ],
            serviceCode: "IZM103",
            ts: null,
            parameterID: 19,
            name: "G1 PTV Applied",
            type: "List",
            values: "YES,NO"
          },
          {
            columnName: "connParam7",
            label: "Connection Type",
            dataType: "List",
            value: "Commercial,Residential",
            position: [
              null
            ],
            serviceCode: "IZM103",
            ts: null,
            parameterID: 20,
            name: "Connection Type",
            type: "List",
            values: "Commercial,Residential"
          },
          {
            columnName: "connParam8",
            label: "KWH Meter",
            dataType: "List",
            value: "Connected,Disconnected",
            ts: null,
            serviceCode: "IZM103",
            parameterID: null,
            name: "KWH Meter",
            type: "List",
            values: "Connected,Disconnected"
          }
        ],
        meteredInputs: [
          {
            columnName: "usageParam1",
            label: "KWH",
            dataType: "Number",
            value: null,
            estimationMethod: 1,
            position: [
              null
            ],
            ts: null,
            serviceCode: "IZM103",
            parameterID: 21,
            name: "KWH",
            type: "Number",
            values: null
          }
        ],
        unmeteredInputs: [],
        bankAccounts: [
          {
            name: "Meezan",
            accNum: "123456",
            position: [
              null
            ],
            serviceAccountID: 72,
            ts: null,
            serviceCode: "",
            internalAccountNumber: 699,
            bank: "Meezan",
            bankAccountNumber: ""
          }
        ],
        batches: [
          {
            serviceCode: "",
            batchCode: "B01",
            position: [
              null
            ],
            ts: null,
            code: "B01"
          }
        ]
      }
    }
  }
  
  let expected = false;
  let identifier = "bankAccountNumber must be of type alphaNumeric > bank case 3"

  module.exports = {
    getStub,
    expected,
    identifier
  }