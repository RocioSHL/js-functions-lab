fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    const pluck = (arr, key) => arr.map(i => i[key]);
     const todoTitles = pluck(todos,'title') // Complete this code
     console.log(todoTitles)
     completed.forEach( (todo, index) => {
     
      {console.log(`${todo.title} - ${todo.completed}`)
     }
    })
  })
  .catch(function(err) { 
    console.log(err);
  });