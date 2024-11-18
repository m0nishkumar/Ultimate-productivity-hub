
import { createContext,useEffect,useState } from "react";


export const AuthContext = createContext()

export const AuthContextProvider =({children})=>{
    /*const listAllUsers = (nextPageToken) => {

          auth.listUsers(1000, nextPageToken)
          .then((listUsersResult) => {
            listUsersResult.users.forEach((userRecord) => {
              console.log('user', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {

              listAllUsers(listUsersResult.pageToken);
            }
          })
          .catch((error) => {
            console.log('Error listing users:', error);
          });
      };
      // Start listing users from the beginning, 1000 at a time.
      listAllUsers();*/
    
    const [currentUserr,setCurrentUserr]=useState({uid:"132456",email:"monishkumar@gmail.com"})
    const [job,setJob]=useState("MERN Stack Developer")
    const [test_number,settest_number]=useState(false);
    useEffect(()=>{
          
                const user={displayName:"TempUser",email:"TempUser@gmail.com",phoneNumber:"7010220960",uid:"tempuserid"};
            
                setCurrentUserr(user);
            
            for (let i = 0; i <user.email.length-1; i++) {
                if(user.email.substring(i, i+1)=="." || user.email.substring(i, i+1)=="@"){
                    console.log(user.email.substring(0, i));
                    user.displayName =user.email.substring(0, i);
                    break;
                }
                
            }

    },[]);

    return(
    <AuthContext.Provider value={{currentUserr,setJob,job,settest_number,test_number}}>
        {children}
    </AuthContext.Provider>
    )
};
