import { useEffect, useState } from 'react';
import { storedDetails } from '../components/utilities/fakeDB';

const useUser = () => {
    const [users, setUsers] = useState(storedDetails());
    useEffect(() => {
        setUsers(storedDetails());
    }, [])
    return [users];
}

export default useUser;
