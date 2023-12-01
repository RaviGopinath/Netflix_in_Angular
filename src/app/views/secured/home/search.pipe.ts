import { Pipe, PipeTransform } from '@angular/core';
import { HomeController } from './home.controler';
@Pipe({ name: 'searchByName' })

export class SearchByMovieName implements PipeTransform {

    constructor(private service:HomeController){}
    resultData:any=[];
    
    transform(arrayValue: any, searchText: any) {

        if (searchText == "") {
            this.resultData=arrayValue;
            this.service.lengthCheck(this.resultData)
            return arrayValue;
        }
        else {
           this.resultData=arrayValue.filter((movie: any) => {
                if (movie.Title.toLowerCase().includes(searchText.toLowerCase())) {
                    return movie.Title
                }
            })
            this.service.lengthCheck(this.resultData)
            return this.resultData
        }
    }

    

}