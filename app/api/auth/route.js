import {useSession} from 'next-auth/react';



const signin = () => {
    const session = useSession();

    return(<>
    <h1>{session}</h1>
    </>)
};

export default signin