import winston from 'winston'
import appRoot from 'app-root-path'

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
}

winston.addColors(colors)

const { printf, colorize, combine } = winston.format

const myFormat = printf(({ level, message, timestamp }) => `${timestamp} [${level}] : ${message} `)

// const level = () => {
//     const env = process.env.NODE_ENV || 'development'
//     const isDevelopment = env === 'development'
//     return isDevelopment ? 'debug' : 'debug'
// }

// define the custom settings for each transport (file, console)
const options = {
    file: {
        level: 'http',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        format: combine(
            winston.format.timestamp(),
            myFormat,
            colorize({
                all: true
            })
        )
    }
}

const transports = [new winston.transports.File(options.file), new winston.transports.Console(options.console)]

// instantiate a new Winston Logger with the settings defined above
const Logger = winston.createLogger({
    levels,
    transports,
    exitOnError: false // do not exit on handled exceptions
})

export default Logger
