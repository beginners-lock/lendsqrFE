import { useRef } from 'react';
import './../styles/FilterModal.scss';
import { StatusTypes } from '../utils/types';

type Props = {
    show: boolean
    closemodal: ()=>void
    setfilter: (status: StatusTypes)=>void
    reset: ()=>void
}

export const FilterModal = ({ show, closemodal, setfilter, reset }: Props) => {
    const statusSelectRef = useRef<HTMLSelectElement|null>(null);

    const setStatus = () => {
        const value = statusSelectRef.current!.value;

        switch (value) {
            case 'Inactive':
                setfilter(value);
                break;
            case 'Active':
                setfilter(value);
                break;
            case 'Pending':
                setfilter(value);
                break;
            case 'Blacklisted':
                setfilter(value);
                break;
            default:
                break;
        }
    }

    return (
        <div id="FilterModal" style={{display:show?'flex':'none'}} onClick={(e)=>{ e.stopPropagation(); }}>
            <label>Organization</label>
            <select className='FilterSelect' defaultValue={''}>
                <option value="" disabled>Select</option>
            </select>

            <label>Username</label>
            <input className='FilterInput' placeholder='Username'/>

            <label>Email</label>
            <input className='FilterInput' placeholder='Email'/>

            <label>Date</label>
            <input className='FilterInput' placeholder='Date'/>

            <label>Phone Number</label>
            <input className='FilterInput' placeholder='Phone Number'/>

            <label>Status</label>
            <select ref={statusSelectRef} className='FilterSelect' defaultValue={''}>
                <option value="" disabled>Select</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
                <option value="Blacklisted">Blacklisted</option>
            </select>

            <span>
                <button id="ResetBtn" onClick={()=>{ statusSelectRef.current!.value=""; reset(); closemodal(); }}>Reset</button>
                <button id="FilterBtn" onClick={()=>{ setStatus(); closemodal(); }}>Filter</button>
            </span>
        </div>
    )
}
