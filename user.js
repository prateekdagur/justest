const express = require('express')
const UsersModel = require('../models/user.js')
const UserAccessToken = require('../models/access_token.js')
const userAuthentication = require('../middleware/auth.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const sgMail = require('@sendgrid/mail')
const secret_jwt = process.env.SECRET_TOKEN
const saltRounds = 10;
const router = express.Router()

//const sendgridAPIKey = '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'
const sendgridAPIKey = process.env.sendgrid_KEY
sgMail.setApiKey(sendgridAPIKey)
const sendGridMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'prateekdagur8@gmail.com',
        subject: 'Sending with SendGrid',
        text: `user ${name} has been created`,

    })
}
router.post('/sign_up', async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hash
        req.body.salt = salt
        const user = new UsersModel(req.body);
        let data = await user.save();
        sendGridMail(user.email, user.name)
        res.send(data)
    }
    catch (err) {
        res.status(500).send(err);

    }
})
router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await UsersModel.findOne({"email": email })

        if (!user) {
            throw new Error("No such username")
        }
        isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            throw new Error("No any matches of password")
        }
        const token = jwt.sign({id: user.id}, secret_jwt)
        const data = await UserAccessToken.create({
            user_id: user._id,
            access_token: token
        })
        res.send(data)
    }
    catch (err) {
        res.status(500).send(err);

    }
})

router.put('/logout/:_id', async (req, res) => {
    try {
        const user_id = req.params._id
        const deletelogin = await UserAccessToken.findOneAndRemove({ "_id": user_id })
        res.json({ message: 'user logged out' })
    }
    catch (err) {
        res.status(500).send(err);

    }
})

router.get('/get/:_id', async (req, res) => {
    try {
        const user_id = req.params._id
        const user = await UsersModel.findOne({ "_id": user_id })
        if (!user) {
            res.json({ message: 'invalid user' })
        }
        res.send(user)

    } catch (e) {
        res.status(401).send(e.message)
    }
});
router.put('/delete', userAuthentication.auth, async (req, res) => {
    try {
        const user_id = req.user.user_id
        const deleteUser = await UsersModel.findOneAndRemove({ "_id": user_id })
        res.json({ message: 'user deleted' })
    } catch (e) {
        res.status(401).send(e.message)
    }
});

module.exports = router