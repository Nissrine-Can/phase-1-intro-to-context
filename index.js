


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
   
        let reducedEmployee =  dateArray.reduce(function(previousElement, currentElement) {
            return previousElement + wagesEarnedOnDate(recordArray, currentElement)
           
        }, 0)
      return reducedEmployee
      
}


function calculatePayroll(employeesRecord) {
    

    return employeesRecord.reduce((memo, rec) => {
        
        return memo + allWagesFor(rec)
    },  0)
}
