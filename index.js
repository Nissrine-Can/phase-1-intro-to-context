

//const recordArray = ["Gray", "Worm", "Security", 1]
/*let testEmployee = {}
const newKeys = {
    0: "firstName", 
    1: "familyName",
    2: "title",
    3: "payPerHour"
}*/
function createEmployeeRecord(recordArray) {
    return {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title: recordArray[2],
        payPerHour: recordArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}


/*function createEmployeeRecord(recordArray) {
     const initObj = Object.assign({}, recordArray)
      const keyValues = Object.keys(initObj).map(key => {
        const newKey = newKeys[key] || key;
        return { [newKey]: initObj[key] };
      });
      testEmployee = Object.assign({}, ...keyValues, {timeInEvents: []}, {timeOutEvents: []});
      return testEmployee;
}
createEmployeeRecord(recordArray)*/

      
function createEmployeeRecords(recordRows) {
    return  recordRows.map(recordArray => createEmployeeRecord(recordArray))
}


function createTimeInEvent(bpRecord, dateStamp) {
  const inEventObj  = {type: "TimeIn",
                                        date: dateStamp.slice(0, 10),
                                        hour: parseInt(dateStamp.slice(11))
                                             }
     bpRecord.timeInEvents.push(inEventObj)
     return bpRecord
}


function createTimeOutEvent(bpRecord, dateStamp) {
    const outEventObj  = {type: "TimeOut",
                                          date: dateStamp.slice(0, 10),
                                          hour: parseInt(dateStamp.slice(11))
                                               }
       bpRecord.timeOutEvents.push(outEventObj)
       return bpRecord
  }
  
  function hoursWorkedOnDate(cRecord, date) {

        let hourIn = cRecord.timeInEvents.find(el => {
            return el.date === date
        })
        let hourOut = cRecord.timeOutEvents.find(el => {
            return el.date === date
        })
        let hours = (hourOut.hour - hourIn.hour)/100
         return hours
}
  
function wagesEarnedOnDate(cRecord, date) {
  return hoursWorkedOnDate(cRecord, date)*cRecord.payPerHour
}

function allWagesFor(cRecord) {
    return wagesEarnedOnDate(cRecord, "0044-03-14") + wagesEarnedOnDate(cRecord, "0044-03-15")
}
function calculatePayroll(csvDataEmployees) {
    
   let wagesArray = csvDataEmployees.map(recordArray => wagesEarnedOnDate(recordArray, date))

    wagesArray.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue
    })
}