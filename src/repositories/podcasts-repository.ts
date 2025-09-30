import { promises } from 'dns'
import fs from 'fs'
import path from 'path'
import { podcastModel } from '../models/podcast-model'


const pathData = path.join(__dirname, '../repositories/podcast.json')

export const repoPodcast = async(podcastName?:string):Promise<podcastModel[]>=>{
    const language ='utf-8'

    const data = fs.readFileSync(pathData,language)
    let jsonFile = JSON.parse(data)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:podcastModel)=>{
            return podcast.podcastName === podcastName  
            
        })
    }
    
    console.log(jsonFile)
    return jsonFile
}