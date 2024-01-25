import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserData} from '../../../features/profileSlice';

const Profile = () => {
   
    const dispatch = useDispatch()
    const profile = useSelector((state)=> state.profile)
    //console.log(profile);
    const token  = useSelector((state)=> state.user.token)
    console.log(profile);
    useEffect(() => {
        dispatch(UserData(token));
    }, [dispatch, token]);

    return (
        <>
         
        </>
     
    );
};

export default Profile;
