import express from 'express'

import Logger from './configs/logger'

const app = express()

app.listen(8080, () => {
    return Logger.info(`server is listening on 8080`)
})

const log = () => {
    Logger.info('log1')
    Logger.info('log2')
    Logger.info('log3')
    setTimeout(log, 10)
}

log()
