const { check }= require('express-validator')
const { isEmpty } = require('underscore')
const {validateResult}= require('../helpers/validateHelper')

const validateCreate = [
    check('nombre')
    .exists()
    .isEmail()
    .not()
    .isEmpty(),
    check('password_user')
    .exists()
    .not()
    .isEmpty(),
    (req,res,next)=>{
        validateResult(req,res,next)
    }

]

module.exports = {validateCreate}