const { check }= require('express-validator')
const { isEmpty } = require('underscore')
const {validateResult}= require('../helpers/validateHelper')

const validateCreate = [
    check('nombre')
    .exists
    .not()
    .isEmpty(),
    check('')
    .exists
    .not()
    .isEmpty()

]

module.exports = {validateCreate}