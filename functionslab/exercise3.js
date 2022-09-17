fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    //const pluck = (arr, key,key2) => arr.map(i => i[key],i[key2]);
    // const uncompleted = pluck(todos,'title','userID') // Complete this code
    const uncompleted = todos.map(({userId,title})=> ({userId,title}))
     console.log(uncompleted)
     completed.forEach( (todo, index) => {
     
      {console.log(`${todo.title} - ${todo.completed}`)
     }
    })
  })
  .catch(function(err) { 
    console.log(err);
  });