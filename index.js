

const recordArray = ["Gray", "Worm", "Security", 1]
let testEmployee = {}
const newKeys = {
    0: "firstName", 
    1: "familyName",
    2: "title",
    3: "payPerHour"
}
function createEmployeeRecord(recordArray) {
     const initObj = Object.assign({}, recordArray)
      const keyValues = Object.keys(initObj).map(key => {
        const newKey = newKeys[key] || key;
        return { [newKey]: initObj[key] };
      });
      testEmployee = Object.assign({}, ...keyValues, {timeInEvents: []}, {timeOutEvents: []});
      return testEmployee;
}
createEmployeeRecord(recordArray)

let employeeRecords;
let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]
      
function createEmployeeRecords(twoRows) {
    employeeRecords = twoRows.map(recordArray => createEmployeeRecord(recordArray))
    return employeeRecords
}
createEmployeeRecords(twoRows)

let dataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
  ]

  function createEmployeeRecords(dataEmployees) {
    employeeRecords = dataEmployees.map(recordArray => createEmployeeRecord(recordArray))
    return employeeRecords
}
createEmployeeRecords(dataEmployees)


let bpRecord = {
    firstName: "Byron",
    familyName: "Poodle",
    title: "Mascot",
    peyPerHour: 3,
    timeInEvents: [],
    timeOutEvents: []
}

let dateStamp = "2014-02-28 1400"


function createTimeInEvent(bpRecord, dateStamp) {
  const inEventObj  = {type: "TimeIn",
                                        date: dateStamp.slice(0, 10),
                                        hour: parseInt(dateStamp.slice(11))
                                             }
     bpRecord.timeInEvents.push(inEventObj)
     return bpRecord
}
createTimeInEvent(bpRecord, dateStamp)

dateStamp = "2015-02-28 1700"
function createTimeOutEvent(bpRecord, dateStamp) {
    const outEventObj  = {type: "TimeOut",
                                          date: dateStamp.slice(0, 10),
                                          hour: parseInt(dateStamp.slice(11))
                                               }
       bpRecord.timeOutEvents.push(outEventObj)
       return bpRecord
  }
  createTimeOutEvent(bpRecord, dateStamp)

  cRecord = {
    firstName: "Julius",
    familyName: "Caesar",
    title: "General",
    peyPerHour: 1000,
    timeInEvents: [{
        type: "TimeIn",
        date: "0044-03-15",
        hour: 0900
    }],
    timeOutEvents: [{
        type: "TimeOut",
        date: "0044-03-15",
        hour: 1100
    }]
  }
  
  function hoursWorkedOnDate(cRecord, date) {

        let hourIn = cRecord.timeInEvents[0].hour
        let hourOut = cRecord.timeOutEvents[0].hour
        let hours = (hourOut - hourIn)/100
         return hours
         
        
}
  hoursWorkedOnDate(cRecord, "0044-03-15")

  /*let timeOut  = new Date("0044-03-15 1100")
  let timeIn = new Date("0044-03-15 900")
  let hours = parseInt(timeOut) - parseInt(timeIn)*/