import { BehaviorSubject } from "rxjs";

const operador = new BehaviorSubject(-1);
//const operador = new Subject()

let index = 0;

setInterval(() => {
  operador.next(++index);
}, 1000);

operador.subscribe({
  next: (data) => console.log("S1", data),
});

setTimeout(() => {
  operador.subscribe({
    next: (data) => console.log("S2", data),
  });
}, 3000);
