import User  from '../models/user.model.js'

export const register = (req, res) => {
    res.send('register 1')
    console.log(req.body)
    const {username, email, password} = req.body
    
    console.log(username, email, password)

}
export const login = (req, res) => { res.send('login 1')}   