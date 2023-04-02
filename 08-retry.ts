import "./style.css";

import { interval, retry } from "rxjs";

const obs = interval(1000);

obs.pipe(retry(3)).subscribe({
  next: console.log,
});
