import "./style.css";

import { merge, Observable, Observer } from "rxjs";

let paginaActual = 0;

const paginacionObs = new Observable((obs: Observer<number>) => {
  setInterval(() => obs.next(paginaActual++), 2000);
});

const ordenacionObs = new Observable((obs: Observer<Record<string, any>>) => {
  setInterval(() => obs.next({ name: "lastname", dir: "asc" }), 5000);
});

/* paginacionObs.subscribe({
  next: console.log,
});

ordenacionObs.subscribe({
  next: console.log,
}); */

const obs = merge(paginacionObs, ordenacionObs);
obs.subscribe({
  next: console.log,
});
