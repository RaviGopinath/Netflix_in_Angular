import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const COMMON_DATA_SERVICE = new InjectionToken<CommonDataService>('CommonDataService');

@Injectable({
    providedIn: 'root',
    useValue: COMMON_DATA_SERVICE
})

export class CommonDataService {

    private userObjSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userObj') || '{}'));
    user$: Observable<any> = this.userObjSubject.asObservable();

    constructor() {
        const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
        
        this.userObjSubject.next(userObj);
    } 
    
    setUserData(data:any) {
        localStorage.setItem("userObj", JSON.stringify(data));
        this.userObjSubject.next(data);
    }

    removeAllSubject() {
        localStorage.removeItem("userObj");
    }    
}    