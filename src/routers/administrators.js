import { Router } from 'express'
import { login, registerInRoom, getDataRoom, setParamsinBlank, dietData } from '../controllers/administrators.js'
import { authLogin } from '../middlewares/authLogin.js'

export const router = Router()

router.post('/login', login)
router.get('/test', authLogin, (req, res) => res.send('test'))
// router.post('/register-patient', authLogin, registerPatient)
router.post('/register-in-habitation', authLogin, registerInRoom)
router.get('/data-habitation/:hNumber', authLogin, getDataRoom)
router.get('/set-params-in-blank/:hNumber', authLogin, setParamsinBlank)
router.get('/diet-data', authLogin, dietData)
