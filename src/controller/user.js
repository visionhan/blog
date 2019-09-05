const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
    // username = escape(username)
    
    // 生成加密密码
    // password = genPassword(password)
// console.log('1',password)
    
    password = escape(password)
// console.log(username)
// console.log(password)

    const sql = `
        select username, realname from users where username=${escape(username)} and password=${password}
    `
    // console.log('sql is', sql)
    return exec(sql).then(rows => {

        return rows[0] || {}
    })
}

module.exports = {
    login
}