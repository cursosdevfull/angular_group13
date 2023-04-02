import "./style.css";

import { Observable, Observer } from "rxjs";

const observable = new Observable((obs: Observer<string>) => {
  const obj = new XMLHttpRequest();

  obj.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      obs.next(JSON.parse(obj.responseText));
      //console.log(JSON.parse(obj.responseText))
    } else if (this.readyState === 4) {
      obs.error("Ocurrió un error");
    }
  };

  obj.open("get", "https://jsonplaceholder.typicode.com/todos/1");
  obj.send();
});

observable.subscribe({
  next: (data) => console.log(data),
  error: (err) => console.log(err),
  complete: () => console.log("Tarea completada"),
});
