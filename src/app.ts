import { createServer } from 'http'
import { Readable, ReadableOptions } from 'stream'
import { latestRoundData } from './oracle'
import { tokens } from './tokens.config'

class DataStream extends Readable {
    constructor(opts?: ReadableOptions) {
        super(opts)
    }

    _read(size?: number) { }
}

const priceCache = new Map()

setInterval(() => {
    process.nextTick(() =>
        Promise.all(
            tokens().map(tokenInfo => latestRoundData(tokenInfo.name)
                .then(roundData => priceCache.set(tokenInfo.name, roundData.answer))
            ))
    )
}, 1000)

const streamer = (stream: Readable) => {
    return setInterval(() => {
        // clear cli
        stream.push('\x1B[2J\x1B[3J\x1B[H')
        // show contents
        // stream.push(arr[index], 'utf-8')
        stream.push(priceCache.get('ETH'), 'utf-8')

        // index = (index + 1) % 4
    }, 1000)
}

const server = createServer((req, res) => {
    if (
        req.headers &&
        req.headers['user-agent'] &&
        !req.headers['user-agent'].includes('curl')
    ) {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ errorMsg: 'Try again using curl.' }))
    }

    const stream = new DataStream()
    stream.pipe(res)
    const interval = streamer(stream)

    req.on('close', () => {
        stream.destroy()
        clearInterval(interval)
    })
})

server.on('error', (err) => { throw err })

const port = process.env.PORT || 3010

server.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})