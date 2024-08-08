import express from 'express'
import path from 'path'
import { connection as db} from './config/index.js'
import { createToken} from './middleware/AuthenticateUser.js'
import {hash} from 'bcrypt'
import bodyParser from 'body-parser'

//Create an express app
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()
//Middleware
app.use(router, 
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
    }))
router.use(bodyParser.json())
//Endpoint
router.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
router.get('/users', (req, res) => {
    try {
        const strQry = `
        SELECT userID, firstName, lastName, age,
        emailAdd
        FROM Users;
        `
        db.query(strQry, (err, result) => {
            if(err) throw new Error(`Unable to fetch all users`)
                res.json({
            status: res.statusCode,
            result: result[0]
            })
        })
    } catch (e) {
        res.json({
            status: 404,
            msg: e.message
        })
    }
})
router.get('/user/:id', (req, res) => {
    try {
        const strQry = `
        SELECT userID, firstName, lastName, age,
        emailAdd
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(strQry, (err, result) => {
            if(err) throw new Error(`Unable to fetch all users`)
                res.json({
            status: res.statusCode,
            result: result[0]
            })
        })
    } catch (e) {
        res.json({
            status: 404,
            msg: e.message
        })
    }
})
router.post('/register', async (req, res) =>{
    try {
        let data = req.body
            data.pwd = await hash(data.pwd, 12)
            // Payload
            let user = {
                emailAdd: data.emailAdd,
                pwd: data.pwd
            }
            let strQry = `
            INSERT INTO Users
            SET ?;
            `
            db.query(strQry, [data], (err) => {
                if(err) {
                    res.json({
                        status: res.statusCode,
                        msg: 'This email has already been taken'
                    })
                } else {
                    const token = createToken(user)
                    res.json({
                        token,
                        msg: 'You are now registered.'
                    })
                }
            })
    } catch (e) { 

    }
})
router.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

