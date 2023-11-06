import {makeAutoObservable} from "mobx";
import Service, {IRequestForGadanie} from "../service/service";

export default class Store {
    _isLoading: boolean = false
    requestFoGadanie : IRequestForGadanie[] = []

    constructor() {
        this._isLoading = false
        makeAutoObservable(this)
    }

    setrequestForGadanie(dto:IRequestForGadanie[]) {
        this.requestFoGadanie = dto
    }

    getrequestForGadanie() {
        return this.requestFoGadanie
    }

    setIsLoading(bool:boolean) {
        this._isLoading = bool
    }

    getIsLoading() {
        return this._isLoading
    }

    async requestGadanieData() {
        this.setIsLoading(true)

        try {
            const response = await Service.getAllRequests()

            this.setrequestForGadanie(response.data)
            return response
        } catch (e: any) {
           return e
        }finally {
            this.setIsLoading(false)
        }
    }

}
