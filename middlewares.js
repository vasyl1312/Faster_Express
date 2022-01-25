import colors from "colors";//add color

//add time when request was done
export function requestTime(req, res, next) {
req.requestTime = Date.now();
next(); //next(), that express can to continue 
}

export function logger(req, res, next) {
console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`))
    next();
}
