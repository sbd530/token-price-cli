import { createServer } from 'http'
import { Readable, ReadableOptions } from 'stream'

class DataStream extends Readable {
    constructor(opts?: ReadableOptions) {
        super(opts)
    }

    _read(size?: number) { }
}

const streamer = (stream: Readable) => {
    return setInterval(() => {
        // clear cli
        stream.push('\x1B[2J\x1B[3J\x1B[H')
        // show contents
        stream.push('zzzzzaabsb', 'utf-8')
    }, 100)
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