import express, { Application, Request, Response } from "express";
import cors from 'cors';

export class Server {
    private app:Application;
    private port:string;
    private api_paths={home:'/api/v1/home'}

constructor(){
    this.app = express();
    this.port = process.env.PORT || '3000';

    this.middlewares(); //Metodos iniciales
};

mi_primera_api(){
    this.app.get('/',(req:Request, res:Response)=>{
        res.status(200).json({msg:'Apifuncionando'})
    })
}

middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.mi_primera_api();
};

listen():void{
    this.app.listen(this.port,()=>{
        console.log('El servidor esta corriendo en el puerto ',this.port)
    })
}

};