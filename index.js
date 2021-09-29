

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


function createTimeInEvent(recordArray, dateStamp) {
  const inEventObj  = {type: "TimeIn",
                                        date: dateStamp.slice(0, 10),
                                        hour: parseInt(dateStamp.slice(11))
                                             }
     recordArray.timeInEvents.push(inEventObj)
     return recordArray
}


function createTimeOutEvent(recordArray, dateStamp) {
    const outEventObj  = {type: "TimeOut",
                                          date: dateStamp.slice(0, 10),
                                          hour: parseInt(dateStamp.slice(11))
                                               }
       recordArray.timeOutEvents.push(outEventObj)
       return recordArray
  }
  
  function hoursWorkedOnDate(recordArray, date) {

        let hourIn = recordArray.timeInEvents.find(el => {
            return el.date === date
        })
        let hourOut = recordArray.timeOutEvents.find(el => {
            return el.date === date
        })
        let hours = (hourOut.hour - hourIn.hour)/100
         return hours
}
  
function wagesEarnedOnDate(recordArray, date) {
  return hoursWorkedOnDate(recordArray, date)*recordArray.payPerHour
}

function allWagesFor(recordArray) {
    
   let dateArray = recordArray.timeInEvents.map(el => el.date)
   //console.log(dateArray)
   
        let reducedEmployee =  dateArray.reduce(function(previousElement, currentElement) {
            return previousElement + wagesEarnedOnDate(recordArray, currentElement)
            
        })
      return reducedEmployee
}

function calculatePayroll(employeesRecord) {
    
//    let datesArray = employeesRecord.map(recordArray => recordArray.firstName.map(el => el.dates))

//    let dArray = datesArray.map(dateArray => dateArray.reduce(function(previousElement, currentElement) {
//      previousElement + wagesEarnedOnDate(recordArray, currentElement)
//       dArray.reduce(function(prevElement, currElement) {
//           return prevElement + currElement
//       })
// }))

    return employeesRecord.reduce((memo, rec) => {
        console.log(memo)
        console.log(rec)
        return memo + allWagesFor(rec)
    },  0)
}
//calculatePayroll(employeesRecord)