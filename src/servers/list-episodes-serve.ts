import { FilterPodcastModule } from "../models/filter-podcast-model"
import { repoPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serverListEpisodes = async (): Promise<FilterPodcastModule>=>{

   let responseFormat:FilterPodcastModule = {
        statusCode :0,
        body:[]
    }

    const data = await repoPodcast()

    if(data.length !== 0 ){
            responseFormat.statusCode = StatusCode.OK
        } else {
            responseFormat.statusCode = StatusCode.NO_CONTENT
        }
    
    responseFormat.body = data

    return responseFormat
}