import { useEffect, useState } from 'react'
import useTicketingSystemStore from '../../../store/useTicketingSystemStore'
import CardView from './CardView/CardView';
import ListView from './ListView/ListView';


const TicketView = () => {
    const ticketingSystemStore = useTicketingSystemStore
    const ticketViewType = ticketingSystemStore(state => state.ticketViewType)

    const [viewType, setViewType] = useState('')

    useEffect(() => {
        setViewType(ticketViewType);
    }, [ticketViewType])

    return (
        <div>
            {
                viewType == 'card' ? (
                    <CardView />
                ) : (
                    <ListView />
                )
            }
        </div>
    )
}

export default TicketView;