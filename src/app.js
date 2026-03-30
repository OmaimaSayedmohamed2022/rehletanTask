import  express from 'express'
import hotelsRoutes from './routes/hotels.routes.js'

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/hotels', hotelsRoutes)




export default app;