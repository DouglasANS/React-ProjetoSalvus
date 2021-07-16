import { useContext, useState } from 'react'
import Axios from 'axios';
import styles from '../styles/Login.module.css'
import { AuthContext } from '../context/AuthContext'
import { saveToken } from '../context/tokenService';

export default function LoginComponent() {
  const auth = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  function checkLogin(){
    Axios.post ('http://localhost:3002/api/login',{
      userEmail: email,
      userPassword: password,
    }).then((response) => {
        
        if(response.data.message){
          //Não encontrado
          console.log('1' + response.data.message)
          console.log('email: ' + email + '  Senha: ' + password)
        }else{          
          //Usuário encontrado 
          auth.setLogin(true)
          console.log('3' + auth.login)
          saveToken(email)
        }
    })
  }




  return (
    <div className={styles.container}>
        <div className={styles.image}>
          
          </div>
        <div className={styles.login}>
            <div className={styles.logo}></div>
              <h2>Bem vindo!</h2>
                <h3>Conectando a Saúde para melhorar a Vida das pessoas.</h3>
                <h1>Login</h1>
            <div >
                
                <input placeholder="Email" type="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
               
            </div>
            <div>
                <input placeholder="Password"  type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            
            <div>
                <a href="/dashboard"><button onClick={checkLogin}>Login</button></a>
            </div>

           
            <h3>
                Faça parte dessa rede de profissionais para que 
                juntos possamos melhorar o <br/>cuidado, satisfação e  
                qualidade de vida de quem mais precisa.<br/>

                Através do sistema Salvus podemos direcionar profissionais em diferentens<br/> localidades 
                do país, de forma rápida e segura.
            </h3>
            <div >
                <a href="/registerProfessional"><button>Register</button></a>
            </div>

        </div>
        
      




    
        
    </div>
  )
}
  //<img src='imglogin.jpg' alt="Video_call"/>