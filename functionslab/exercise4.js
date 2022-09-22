fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
     //const completed = todos.filter(todo => todo.completed==true)  // Complete this code
    // console.log(completed) 90 items
     let initialcompleted=0;
     let a=0;
     let totalcompleted =0
     totalcompleted= todos.reduce(( prevoiusvalue,currentValue)=>{if(currentValue.completed){a++;return a;}else return a;},0)
     //totalcompleted=a; 
     console.log(totalcompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });