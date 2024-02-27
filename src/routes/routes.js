import { Router } from 'express'
import { FormController } from '../controllers/forms.js'
const router = Router()

router.post('/create-form', FormController.createForm)
router.get('/read-form', FormController.readForm)
//router.put('/update-form', FormController.updateForm)
router.delete('/delete-form/:id', FormController.deleteForm)

export default router
