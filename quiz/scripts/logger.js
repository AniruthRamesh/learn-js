// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

function logMsg(){
  console.log(`error message ${this.errMsg}`)
}

const e1 = {
  errMsg : "this is error 1"
}

const e2 = {
  errMsg : "this is error 2"
}

logMsg.call(e1)
logMsg.call(e2)



