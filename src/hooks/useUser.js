import { useEffect, useState } from 'react';

const useUser = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem("users-info")));
    }, [])
    return [users];
}

export default useUser;