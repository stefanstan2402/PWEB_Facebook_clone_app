import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})


export class EventService {

    public refreshHeader: EventEmitter<any> = new EventEmitter<any>;

    
    public reloadHeader: EventEmitter<any> = new EventEmitter<any>;

    
    public refreshMenuItems: EventEmitter<any> = new EventEmitter<any>;
    constructor() { }
  
    
}