import { podcastModel } from "./podcast-model";

export interface FilterPodcastModule{
    statusCode : number,
    body: podcastModel[]
}