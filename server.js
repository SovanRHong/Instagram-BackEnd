const express = require('express')
const app = express()

app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

app.use(express.json())
app.use(require('cors')())

const userRoutes = require('./routes/userRoutes')
app.use('', userRoutes)

const postRoutes = require('./routes/postRoutes')
app.use('', postRoutes)

const commentRoutes = require('./routes/commentRoutes')
app.use('',commentRoutes)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
  routesReport.print()
})