async function llamada() {
  const promise = new Promise((resolve, reject) => {
    const obj = new XMLHttpRequest();

    obj.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(obj.responseText));
        //console.log(JSON.parse(obj.responseText))
      } else if (this.readyState === 4) {
        reject("Ocurrió un error");
      }
    };

    obj.open("get", "https://jsonplaceholder.typicode.com/todos/-1");
    obj.send();
  });

  console.log("Tarea 1");

  try {
    console.log("ejecución");
    const result = await promise.then();
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  /*promise.then((data)=>{
      console.log("promesa cumplida");
      console.log(data)
    })
  
    promise.catch((error)=>{
      console.log(error)
    })*/

  /*promise.then((data)=>{
      console.log("promesa cumplida");
      console.log(data)
    }, (error)=>{
      console.log(error)
    })*/
  console.log("Tarea 2");
}

llamada();
