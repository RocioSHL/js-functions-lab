fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
     const completed = todos.filter(todo => todo.completed==true)  // Complete this code
     //console.log(todos);
     let completedperUser = {};
     let index = 0
    completedperUser= todos.reduce((prevoiusvalue,currentValue)=>{
   if(currentValue.completed)
   {
      if(prevoiusvalue[currentValue.userId]===undefined)
      {
        prevoiusvalue[currentValue.userId]=1;
      }
      else
      prevoiusvalue[currentValue.userId]+=1;

   }
   return prevoiusvalue;
    },{});
    console.log(completedperUser)
     completed.forEach( (todo, index) => {
     
      //{console.log(`${todo.title} - ${todo.completed}`)
     }
    )
  })
  .catch(function(err) { 
    console.log(err);
  });