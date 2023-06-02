import axios from 'axios'
const baseUrl='http://localhost:8800'
let message;
export  function createUser(data,setsnackmsg){
    axios.post(baseUrl+`/api/auth/signUp`,data)
    .then((data)=>{
        console.log(data.data.message)
      setsnackmsg(data.data.message)
    })
    .catch(err=>{
        console.log('error while creating user'+err)
        return(err)
    }
      
        )
}
export  async function login(data){
    console.log(data)
    axios.post(baseUrl+'/api/auth/signin',data)
    .then((data)=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
}

