import { Observable, Observer } from "rxjs";

const observable = new Observable((obs: Observer<string>) => {
  setTimeout(() => {
    obs.next("Llegó correspondencia");
  }, 2000);

  setTimeout(() => {
    obs.next("El gasfitero se retiró");
  }, 4000);

  setTimeout(() => {
    obs.complete();
  }, 5000);

  setTimeout(() => {
    obs.error("La casa se quemó");
  }, 6000);

  setTimeout(() => {
    obs.next("Llegó la policía");
  }, 8000);
});

observable.subscribe({
  next: (data) => console.log(data),
  error: (err) => console.log(err),
  complete: () => console.log("Tarea completada"),
});
