import { Component } from '@angular/core';
import {Observable , forkJoin} from 'rxjs';

import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
obsNom : Observable<any>;
obsAge: Observable<any>;

ngOnInit(){

//this.test01();
this.test02();


}
test02(){
  console.log('Debut test02 ........');

this.obsNom = new Observable((observer) => {
    let listOfFriends = ["Damien", "Thomas", "Laurent", "Jean"];
    listOfFriends.forEach((friend: string) => {
        observer.next(friend);
    });
    observer.complete();
});
this.obsAge = new Observable((observer) => {
    let listOfAges = ["20", "18", "36", "42"];
    listOfAges.forEach((age: string) => {
        observer.next(age);
    });
    observer.complete();
});

this.obsNom.subscribe({
    next(value) { console.log('Nom  ', value); },
    complete() { console.log("Nom fini!"); }
});

this.obsAge.subscribe({
    next(value) { console.log('Age  ', value); },
    complete() { console.log("Age fini!"); }
});


const obsForkJoinDico = forkJoin({
  obsNom: this.obsNom,
  obsAge: this.obsAge
});

const obsForkJoinTab = forkJoin([
  this.obsNom,
  this.obsAge
]);

obsForkJoinDico.subscribe({
 next: value => console.log('obsForkJoinDico'),
 complete: () => console.log('This is how it ends!'),
});

obsForkJoinTab.subscribe({
 next: value => console.log('obsForkJoinTab - ', value),
 complete: () => console.log('This is how it ends!'),
});




}



test01(){
  console.log('Debut test01');
let monObservable = new Observable((observer) => {
    let listOfFriends = ["Damien", "Thomas", "Laurent", "Jean"];
    listOfFriends.forEach((friend: string) => {
        observer.next(friend);
    });
    observer.complete();
});

/*
monObservable.subscribe({
    next(value) { console.log(value); },
    complete() { console.log("C'est fini!"); }
});
// Nous allons afficher Damien, Thomas, Jean-Claude Dusse et enfin C'est fini!
monObservable.subscribe({
    next(value) { console.log('encore ', value); },
    complete() { console.log("C'est encore fini!"); }
});
*/
console.log('debut');
setTimeout(() => {
    monObservable.subscribe({
        next(value) { console.log(value + '2'); },
        complete() { console.log("C'est fini!2"); }
    });
}, 2000);
console.log('fin');
/*
monObservable.subscribe({
    next(value) { console.log(value + '1'); },
    complete() { console.log("C'est fini!1"); }
});
*/

// Nous allons afficher Damien1, Thomas1, Jean-Claude Dusse1 et enfin C'est fini!1
// Après 2 secondes : Damien2, Thomas2, Jean-Claude Dusse2 et enfin C'est fini!2






console.log('Fin test01');

}


}
