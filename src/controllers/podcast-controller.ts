import {IncomingMessage, ServerResponse} from 'http'
import {serverListEpisodes} from '../servers/list-episodes-serve'
import { serviceFilterEpisodes } from '../servers/filter-episodes-serve';
import { ContentType } from '../utils/content-type';
import { FilterPodcastModule } from '../models/filter-podcast-model';

const DEFAULT_CONTENT = {"content-Type": ContentType.JSON}

export const getListEpisodies = async(request:IncomingMessage, response:ServerResponse)=>{
    const content: FilterPodcastModule = await serverListEpisodes()

    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.end(JSON.stringify(content.body))
}
      
export const getFilterEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    
    const content = await serviceFilterEpisodes(req.url)
  
    res.writeHead(content.statusCode, DEFAULT_CONTENT);
    res.end(JSON.stringify(content.body))
}