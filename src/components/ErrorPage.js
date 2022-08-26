import { useContext} from 'react';
import { UserContext } from '../contexts/User';

export default function ErrorPage() {
    const { err, setErr } = useContext(UserContext);

    if(err){
        return (
            <p>{err.err.message}</p>
        )
    }else{
        return (
            <p>Invalid URL Path! 🚫</p>
        )
    }
}