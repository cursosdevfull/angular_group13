import "./style.css";

import { debounceTime, fromEvent } from "rxjs";

const input = document.getElementById("textoIngresado");

const evt = fromEvent(input, "input");

evt.pipe(debounceTime(2000)).subscribe({
  next: (evt: any) => console.log(evt.target.value),
});

//input.addEventListener("input", () => {})

//const obs = of([1, 2, 3, 4]);

/*obs.subscribe({
  next: console.log,
});*/
