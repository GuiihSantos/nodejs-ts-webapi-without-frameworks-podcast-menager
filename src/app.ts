import * as http from 'http';
import {getFilterEpisodes, getListEpisodies} from './controllers/podcast-controller'
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

export const app = async (req:http.IncomingMessage, res:http.ServerResponse)=>{

        const baseUrl = req.url?.split('?')[0]

        if(req.method === HttpMethods.GET && baseUrl === Routes.LIST){
        await getListEpisodies(req, res)
        }

        if(req.method === HttpMethods.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res)
        }
    }
