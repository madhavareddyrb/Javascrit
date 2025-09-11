function fetchData(){
  return new Promise((reslove, reject) => {
    setTimeout( () =>{
        //let success = true;
        if (true){
            reslove({name: 'madhava', 
                registeredUser : 'yes'});
        } else{

            reject('Fetching failed registered user or not');
        }
        
    },3000);
  });
};

// fetchData().then((data) => console.log(data)).catch((error) => console.error(error))

/*async function getUserData(){
    try {
        console.log('fetching user data');
        const data = await fetchData();
        console.log(data);   
        console.log("Data Fectched Succcessfuly");             
        
    } catch (error) {
        console.log(error);        
    };
};
getUserData()
*/

// async await with just reslove promise parameter

function fetchUserData (){
    return new Promise((reslove) => {
        setTimeout (() => {
            reslove(['Madhava',20,'CSE']);
        },2000)
    })
}

/*async function fetch() {
    try {
      console.log('feching data');
      const data = await fetchUserData();
      console.log(data);
      console.log('Data Feched');
    } catch (error){
      console.log('Error feching data',error);
      
    }
}

fetch()

*/




// promise all to fetch 2 promises at one line
 
function fetchPostData() {
    return new Promise ((reslove) => {
        setTimeout(() => {
            reslove("POST data Fetched")
        },2000)
    })
}

function fetchCommentData (){
    return new Promise ((reslove) => {
        setTimeout(() => {
            reslove("Comment Data Feched")
        }, 3000);
    })
}

async function getBlogData (){
    try {
        console.log('Feching blog data');
        //const blogData= await fetchPostData();
        //const commentData = await fetchCommentData();
        const [blogData,commentData] = await Promise.all([fetchPostData(), fetchCommentData()])
        console.log(blogData);
        console.log(commentData);
        console.log('Completed Data Feching');
            
    } catch (error){
        console.error('error fetching data',error);
        
    }
}

getBlogData();