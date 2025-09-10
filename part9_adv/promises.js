/* Steps:
1.create a  function return that function with promise
2.we must use new keyword to create Promise with callback of arrow function
3.Promise contains 2 permes one is resolve and reject (success or failure)
*/

function fetchData (){
  return new Promise((reslove,reject) => {
    setTimeout(() => {
      let success = false;
      if (success){
        reslove(`Data Fetched Successfully`);
      } else{
        reject('Error fetching Data');
      }
    }, 3000);

  });
}
//console.log(fetchData()); // promise Pending

//fetchData();
// fetchData().then((data) => console.log(data)).catch((error) => console.error(error));

/*
fetchData()
        .then((data) => console.log(data))
        .catch((error) => console.error(error))
*/

// Promise Chain

fetchData()
          .then((data) => {
            console.log(data);
            return data.toLowerCase();
          })
          .then((value) =>{
            console.log(value);            
          })
          .catch((error) => {
            console.log(error);            
          })