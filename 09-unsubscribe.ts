import "./style.css";

import { interval } from "rxjs";

const obs = interval(1000);

const subs = obs.subscribe({
  next: (data) => console.log(data * 2),
});

setTimeout(() => {
  subs.unsubscribe();
}, 10000);
