import { useEffect } from 'react';
import useTicketingSystemStore from '../../../store/useTicketingSystemStore';

const UserView = () => {
    const ticketingSystemStore = useTicketingSystemStore;
    const users = ticketingSystemStore(state => state.users);

    useEffect(() => {
        console.log('From User View: ', users);
    }, [users]);

    return (
        <h1>User View</h1>
    )
}

export default UserView;