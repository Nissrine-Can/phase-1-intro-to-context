

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
let updatedBpRecord 
let newEvent = []

function createTimeInEvent(bpRecord, dateStamp) {
  newEventObj  = {type: "TimeIn",
                                               date: dateStamp.slice(0, 10),
                                               time: dateStamp.slice(11)
                                             }
    updatedBpRecord = Object.values(bpRecord).map(value => {
        if (value === timeInEvents) {
            newEvent.push(newEventObj)
        }
        
    })
    //newEvent.push(newEventObj)
    //console.log(newEvent)
    
    
    
    console.log(updatedBpRecord)

   
}
createTimeInEvent(bpRecord, dateStamp)
