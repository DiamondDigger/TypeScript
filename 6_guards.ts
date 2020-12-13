type status = string | number

function checkStatus(type: status): void {
    if (typeof type === 'number'){
        type.toFixed(2)
        console.log(`status code: ${[ type ]}` );
    }
    if (typeof type === 'string'){
        type.trim()
        console.log(`status message: ${[ type ]}` );
    }
}

checkStatus(200)
checkStatus('download completed')

class MyResponse {
    header = 'response header'
    status = 'completed'
}

class MyError {
    header = 'error header'
    message = 'error'
}

function logger(instance: MyResponse | MyError) {
    if (instance instanceof MyResponse){
        console.log(instance.header);
        console.log(instance.status);
        return {
            info: instance.header + ' / ' + instance.status
        }

    }
    if (instance instanceof MyError){
        console.log(instance.header);
        console.log(instance.message);
        return {
            info: instance.header + ' / ' + instance.message
        }
    }
}

console.log(logger(new MyResponse()));
console.log(logger(new MyError()));

const response = new MyResponse()
const error = new MyError()

console.log(logger(response));
console.log(logger(error));

//------------->
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType){}

setAlertType('success')
setAlertType('danger')