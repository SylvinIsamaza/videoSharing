import axios from 'axios'
import{loginSuccess,loginFailure} from '../redux/userState'

import { useDispatch} from 'react-redux';

const baseUrl='http://localhost:8800'

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
    let dispatch=useDispatch()
    console.log(data)
    axios.post(baseUrl+'/api/auth/signin',data)
    .then((data)=>dispatch(loginSuccess(data.data)))
    .catch(err=>dispatch(loginFailure())
    )
}

