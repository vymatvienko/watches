import Watches from './Watches';

const Data: React.FC<DataProps> = ({ watches, setWatches }) => {

    return (
        <div>
            <ul>
                {watches.map((item, index) => 
                    <Watches key={index} name={item.name} timezone={item.timezone} watches={watches} setWatches={setWatches} />    
                )}
            </ul>
        </div>
    )
}

type DataProps = {
    watches: Item[],
    setWatches: React.Dispatch<React.SetStateAction<never[]>>,
}

type Item = {
    name: string,
    timezone: number
}

export default Data