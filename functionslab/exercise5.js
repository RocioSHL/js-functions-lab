fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    //const pluck = (arr, key,key2) => arr.map(i => i[key],i[key2]);
    // const uncompleted = pluck(todos,'title','userID') // Complete this code
    //const uncompleted = todos.map(({userId,title})=> ({userId,title}))
    const uncompleted=[];
    todos.reduce(( prevoiusvalue,currentValue)=> {let title = currentValue.title; let userId = currentValue.userId; uncompleted.push({title,userId})})
     console.log(uncompleted)
     completed.forEach( (todo, index) => {
     
      {console.log(`${todo.title} - ${todo.completed}`)
     }
    })
  })
  .catch(function(err) { 
    console.log(err);
  });