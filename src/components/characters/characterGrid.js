import React from 'react';
import CharacterItem from './characterItem';
import Spinner from '../ui/spinner';

const CharacterGrid = ({items, isLoading}) =>
{
    return isLoading ? (<Spinner></Spinner>): (<section className="cards">
        {items.map(item =>
        {
            return <CharacterItem key={item.char_id} item={item}></CharacterItem>
        })}
    </section>);
}

export default CharacterGrid;