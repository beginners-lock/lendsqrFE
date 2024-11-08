import './../styles/FilterModal.scss';

export const FilterModal = () => {
    return (
        <div id="FilterModal">
            <label>Organization</label>
            <select className='FilterSelect'>
                <option value="" disabled selected>Select</option>
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
            <select className='FilterSelect'>
                <option value="" disabled selected>Select</option>
                <option>Yooo</option>
            </select>

            <span>
                <button id="ResetBtn">Reset</button>
                <button id="FilterBtn">Filter</button>
            </span>
        </div>
    )
}
