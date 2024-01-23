import { Service } from 'typedi';
import express, { Express, Request, Response } from 'express';
import { Logs } from '../libs/logs.lib';
import fs from 'fs';
@Service()
export class ExpressService {
    private logs: Logs;

    constructor(
    ){
        this.logs = new Logs();
        this.logs.info('ExpressService instantiated');
        let app: Express = express();
        let port = process.env.PORT || 3000;

        app.use(express.json());

        app.disable('x-powered-by');

        app.get('/', async (req: Request, res: Response) => {
            this.logs.info(`GET / from ${req.ip}`);
            try {
                let data = await fs.promises.readFile('src/views/index.html', 'utf-8');
                return res.status(200).send(data);
            } catch (error) {
                return res.status(500).json({error: error});
            }
        });

        
        
        app.listen(port, () => {
            this.logs.info(`Server listening on port ${port}`);
        });

    }
}