import express from 'express'
import {dbConnections} from './src/db.js'
import formRoutes from './src/routes/routes.js'
import cors from 'cors'
import morgan from 'morgan'
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.send('ctm martin')
})

app.use('/form', formRoutes)

dbConnections()
app.listen(3000, () => {
  console.log('server en el puerto 3000')
})
