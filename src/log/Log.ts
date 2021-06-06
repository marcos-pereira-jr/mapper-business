var moment = require('moment');

export class Log {
    static info(message){
        console.log(`LOG(INFO) - ${message} - ${moment(new Date()).format('YYYY-MM-DDHH:MM:SS')}`);
    }
}