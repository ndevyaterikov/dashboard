import $api from './http'
import {AxiosResponse, HttpStatusCode} from "axios";
export interface IRequestForGadanie{
    id:number,
    userId:number,
    request:string,
    answer:string,
    createdAt: string,
}
export default class Service {

    static async getAllRequests():Promise<AxiosResponse<IRequestForGadanie[]>>{
        return $api.get('/interface')
    }

}

