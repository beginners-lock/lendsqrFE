import { useContext } from 'react';
import './../styles/TopNavBar.scss';
import { ActiveModalContext } from '../App';

export const SearchModal = () => {
    const { activeModal } = useContext(ActiveModalContext);

    return (
        <div id="SearchModal" className={`${activeModal==='search'?'activesearchmodal':'inactivesearchmodal'}`}>
            <div>
                <input type="search" placeholder='Search for anything'/>
                <span>
                    <img alt="search" src="/search.png"/>
                </span>
            </div>     
        </div>
    )
}
