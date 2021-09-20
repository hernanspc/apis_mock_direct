import express from "express";
import { serverController } from '../controller/serverController'

const api = express.Router()

api.get('/internetxdia', serverController.internetdia)
api.post('/internetxdia', serverController.internetdiapost)

api.get('/invoicing', serverController.invoicing)
api.get('/invoicingid', serverController.invoicingid)
api.get('/invoicingidnf', serverController.invoicingidnofile)

api.get('/guarda_saved', serverController.guarda_saved)
api.get('/guarda_nosaved', serverController.guarda_nosaved)
api.get('/guarda_error', serverController.guarda_error)

api.get('/login_rem', serverController.login_rem)
api.post('/login_post', serverController.login_post)

api.get('/last_movements', serverController.last_movements)

api.get('/', serverController.last_movements)


export { api }