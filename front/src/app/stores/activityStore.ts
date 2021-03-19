import { makeObservable, observable } from "mobx";

export default class ActivityStore {
    title = 'From MobX';

    constructor(){
        makeObservable(this, {
            title: observable
        })
    }
}