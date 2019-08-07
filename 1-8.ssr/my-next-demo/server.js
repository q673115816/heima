const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({
    dev
})
const handle = app.getRequestHandler()

const { parse } = require('url')

app.prepare()
    .then(() => {
        const server = express()



        server.get('/movie/:type', (req, res) => {
            // console.log(req,res)
            console.log(11);
            
            const actualPage = '/movie/type'
            const queryParams = {
                type: req.params.type
            }
            app.render(req, res, actualPage, queryParams)
        })


        server.get('/next-route/teather/:id', (req, res) => {
            const actualPage = '/next-route/teather/detail'
            const queryParams = {
                id: req.params.id
            }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })