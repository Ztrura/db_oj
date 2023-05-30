// api路由
// userApi.js —— 测试用 API 示例

const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')
    // 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()
const jsonWrite = function(res, ret) {
        if (typeof ret === 'undefined') {
            res.json({
                code: '1',
                msg: '操作失败'
            })
        } else {
            res.json(
                ret
            )
        }
    }
    // 增加用户接口
router.post('/addUser', (req, res) => {
    const sql = $sql.user.add
    const params = req.body
    console.log(params)
    conn.query(sql, [params.username, params.password], function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})

router.get('/query', (req, res) => {
    conn.query('select * from studs', function(err, row) {
        if (err) {
            console.log(err)
        }
        console.log(typeof row)
        const data = JSON.stringify(row)
        res.end(data)
    })
})

router.post('/getQuestion', (req, res) => {
    console.log('getQuestion')
    console.log(req.body)
    const sql = 'select description from question where pid = ?'
    const params = req.body
    const sqlParams = [params.pid]
    conn.query(sql, sqlParams, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result)
        }
    })
})

router.post('/getTitle', (req, res) => {
    console.log('getTitle')
    console.log(req.body)
    const sql = 'select title from question where pid = ?'
    const params = req.body
    const sqlParams = [params.pid]
    conn.query(sql, sqlParams, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result)
        }
    })
})

router.post('/getDeadline', (req, res) => {
    console.log('getDeadline')
    console.log(req.body)
    const sql = 'select deadline from question where pid = ?'
    const params = req.body
    const sqlParams = [params.pid]
    conn.query(sql, sqlParams, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result)
        }
    })
})

router.post('/getFenzhi', (req, res) => {
    console.log('getFenzhi')
    console.log(req.body)
    const sql = 'select score from question where pid = ?'
    const params = req.body
    const sqlParams = [params.pid]
    conn.query(sql, sqlParams, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result)
        }
    })
})

router.post('/getTable', (req, res) => {
    console.log('getTable')
    console.log(req.body)
    const sql = 'select * from '
        // const params = req.body
        // console.log(req.body.tname)
        // const sqlParams = [params.tname]
    const newsql = sql + req.body.tname
    console.log('>>', newsql)
    conn.query(newsql, function(err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            res.send(result)
        }
    })
})

router.post('/runSQL', (req, res) => {
    console.log('runSQL')
    console.log(req.body)
    const sql = req.body.sql_sentence
    conn.query(sql, function(err, result) {
        if (err) {
            res.send(err.sqlMessage)
        }
        if (result) {
            res.send(result)
        }
    })
})

router.post('/addHistory', (req, res) => {
    console.log('addHistory')
    console.log(req.body)
    const params = req.body
    const uid = 1
    const sql = 'insert into history values(null, ?, ?, ?, ?)'
    const sqlParams = [1, params.execute_time, params.instruction, params.result]
    conn.query(sql, sqlParams, function(err, result) {
        console.log(err)
        console.log(result)
    })
})

router.post('/getHistory', (req, res) => {
    console.log('getHistory')
    console.log(req.body)
    const params = req.body
    const sql = 'select execute_time, instruction from history where uid = ?'
    const sqlParams = [1]
    conn.query(sql, sqlParams, function(err, result) {
        console.log(err)
        console.log(result)
        res.send(result)
    })
})

module.exports = router