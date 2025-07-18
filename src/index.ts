import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
    let  helloMessage = `Hello World!`;
    res.send(helloMessage);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});