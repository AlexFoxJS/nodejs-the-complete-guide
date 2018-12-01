const path = require('path')
const express = require('express')

const adminData = require('./admin')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/', (req, res, next) => {
	const { products } = adminData

	res.render('pages/shop', {
		path: '/',
		pageTitle: 'Shop',
		products,
		hasProducts: products.length > 0,
	})
})

module.exports = router
