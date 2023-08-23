import useLocalStorage from "../hooks/useLocalStorage";


// export const signUp =(email:string,name:string, surname:string, password:string) =>{
//     const acc =
// }

const AuthService =() =>{
    const [storedValue, setStoredValue] =   useLocalStorage('user', null);

    const login =(username:string,password:string)=>{
        const acc ={username,password}
        setStoredValue(acc);
    }
    const signUp=(email:string,name:string, surname:string, password:string) =>{
        const acc ={email,name,surname,password}
        setStoredValue(acc)
    }
    const logOut=()=>{
        setStoredValue(null)
    }
    const isAuth =()=>{
        return !!storedValue;
    }
    const getUser =()=>{
        return storedValue;
    }
}

    


export default AuthService;

