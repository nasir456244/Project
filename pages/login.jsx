import React from 'react'
import { useRouter } from 'next/router';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'



const Login = () => {
    const router = useRouter()
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    const SignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
         .then((response) => {
            alert('You logged in')
            sessionStorage.setItem('Token', response.user.accessToken)
            router.push('/')
           })
           .catch((error) => {
            console.error(error)
           })
    }

   
  return (
    <div className='text-[#fff]  w-screen h-screen flex items-center justify-center'>
        {auth?.currentUser ? 
        <div className='flex flex-col items-center'>
            <p>You are logged in</p>
            <a onClick={() => router.push('/')} className='underline cursor-pointer'>Please go back to home page</a>
        </div>
        :
        <>
                <div>
                <div className='flex cursor-pointer mb-5 flex-row items-center p-[1.5px] justify-between w-full h-[45px] bg-[#4285f4] radius-[2px] shadow-xl hover:shadow-2xl' >
                    <div className='w-[40px] flex justify-center items-center h-full radius-[2px] bg-[#fff]'>
                        <img className='h-full w-[30px]'  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <button onClick={SignInWithGoogle} className='ml-3 text-[#fff] spacing-[0.2px] mr-1 text-[14px]'><b>Sign in with Google</b></button>
                </div>
                
                </div>
        
        </>
        }
    </div>
  )
}

export default Login


// export async function getServerSideProps(context) {

//     const providers = await getProviders(context)
//     const session = await getSession(context)

//     if(session) {
//         return {
//             redirect: {
//                 destination: '/'
//             }
//         }
//     }
//     return {
//         props: {
//             providers
//         }
//     }
// }

