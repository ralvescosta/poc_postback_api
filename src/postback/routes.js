const {Router} = require('express')
const routes = Router();

const PostbackController = require('./controller')
const PostbackService = require('./service')
const WriteJsonRepository = require('./writeJsonRepository')

const writeJsonRepository = new WriteJsonRepository()
const postbackService = new PostbackService(writeJsonRepository)
const postbackController = new PostbackController(postbackService)

routes.post('/postback', postbackController.Post.bind(postbackController))

module.exports = routes