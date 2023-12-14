import { useEffect, useState } from "react"
import moment from 'moment'

const Watches: React.FC<WatchesProps> = ({ name, timezone, watches, setWatches }) => {

    const [time, setTime] = useState();

    useEffect(() => {
        const interval = setInterval(() => setTime(moment().utc().add(timezone, 'h').format('hh:mm:ss a')), 100);
        return () => clearInterval(interval);
    }, []);

    const deleteClock = () => {
        setWatches(watches.filter(item => item.name !== name));
    }


    return (
        <li className="clock">
            <span className="clock-name">{name}</span>
            <span className="clock-time">{time}</span>
            <button className="clock-button" onClick={deleteClock}>&#10006;</button>
        </li>
    )
}

type WatchesProps = {
    name: string,
    timezone: number,
    watches: Item[],
    setWatches: React.Dispatch<React.SetStateAction<never[]>>,
}

type Item = {
    name: string,
    timezone: number
}

export default Watches