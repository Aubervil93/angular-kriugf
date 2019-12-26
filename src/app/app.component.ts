import { Component } from '@angular/core';
import {Observable,of, from } from 'rxjs';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

ngOnInit(){


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








}


}
