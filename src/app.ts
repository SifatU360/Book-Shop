import express, { Application, Request, Response } from 'express'

const app = express();

app.get('/', (req:Request, res:Response) => {
   res.send({
    status: true,
    message:"Server Live"
   })
})


export default app;