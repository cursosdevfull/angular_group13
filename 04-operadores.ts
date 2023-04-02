import "./style.css";

import { catchError, map, Observable, Observer, tap, throwError } from "rxjs";

//const obs = interval(2000);
const obs = new Observable((obs: Observer<any>) => {
  setInterval(() => {
    obs.next({
      trace: "abcd",
      results: [
        { user: "user01", age: 20 },
        { user: "user02", age: 30 },
        { user: "user03", age: 40 },
      ],
    });
  }, 3000);

  //setTimeout(() => obs.error('Error!!!!'), 4000);
});

obs
  .pipe(
    tap(() => console.log("inicio")),
    map((data) => data.results),
    map((data) => data.length),
    catchError((err) => throwError(() => new Error(err)))
  )
  .subscribe({
    next: (value) => console.log("subscriptor1", value),
  });
