import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='project';
  password = '';

  length:number=0;
  includeLetters:boolean =false;
  includeNumbers:boolean =false;
  includeSymbols:boolean =false;

  modifyLength(value:string){
      const parsedValue=parseInt(value);

      if(!isNaN(parsedValue)){
        debugger;
        this.length=parsedValue;

      }
  }
  modifyLetters(){
    this.includeLetters= !this.includeLetters;
  }
  modifyNumbers(){
    this.includeNumbers= !this.includeNumbers;
  }
  modifySymbols(){
    this.includeSymbols= !this.includeSymbols;
  }
  buttonclick(){


    const numbers='1234567890';
    const lettters='abcdefghijklmnoprstuvwyz';
    const symbols='!:,.()/&%+-*#^~[]';

    let word = '';

    if(this.includeLetters){
      word+=lettters;
    }
    if(this.includeNumbers){
      word+=numbers;
    }
    if(this.includeSymbols){
      word+=symbols;
    }

    let generatedPassword='';

    for(let i=0;i<this.length;i++){

      const a= Math.floor(Math.random()*word.length);
      generatedPassword+=word[a];
    }
    this.password=generatedPassword;
  }

}

