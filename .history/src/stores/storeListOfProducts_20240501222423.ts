import { action, makeObservable, observable } from "mobx";

interface IList {
    id: number,
    title: string,
    price: number
}

class ListOfProducts {
    list: [
        id: number,
        title: string,
        price: number,
    ] | undefined 

    constructor()  {
        makeObservable(this, {
            this.list
        })
    }
 
}
