import { useEffect, useState } from 'react';
import './../styles/UsersPageTable.scss';
import { Status } from './Status';
import { OptionsModal } from './OptionsModal';
import { FilterModal } from './FilterModal';
import { PagePicker } from './PagePicker';
import { DataType } from '../utils/types';
import { StatusTypes } from '../utils/types';

type Props = {
    updateCardData: (arg: DataType[])=>void
}

export const UsersPageTable = ({ updateCardData }: Props) => {
    const [data, setData] = useState<DataType[]>([]);
    const [showfilter, setShowfilter] = useState(false);
    const [showoptions, setShowoptions] = useState(false);
    const months = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun','Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'];
    const [coords, setCoords] = useState({ x:0, y:0 });

    const [itemsperpage, setItemsperpage] = useState(10); 
    const [currentpage, setCurrentpage] = useState(1);
    const [currentfilter, setCurrentfilter] = useState<{ status: StatusTypes }|null>(null);
    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [activeIndex, setActiveIndex] = useState<number|null>(null);

    useEffect(()=>{
        fetch('/json/generated.json').then((response)=>{
            console.log(response);
            return response.json();
        }).then((json)=>{
            setData(json);
            updateCardData(json);
            const el = document.getElementById('TablePageSelectTag') as HTMLSelectElement;
            if(el){
                el.value = "10";
            }
        });
    }, []);

    useEffect(()=>{
        if(currentfilter){
            const filtered = data.filter(data => data.status===currentfilter.status);
            setCurrentpage(1);
            setFilteredData(filtered);
        }
    }, [currentfilter])

    const formatDate = (arg: string) => {
        const date = arg.split(' ')[0];
        const time = arg.split(' ')[1];

        const hr = time.split(':')[0];
        let newtime = '';

        if(parseInt(hr)>12){
            newtime = time+' PM';
        }else{
            newtime = time+' AM';
        }

        const day = date.split('-')[1]
        const month = date.split('-')[0];
        const year = date.split('-')[2]; 

        const newdate = months[parseInt(month)-1]+' '+day+', '+year;

        return newdate+' '+newtime;

    }

    const closeModals = () => {
        setShowfilter(false); setShowoptions(false);
    }

    const toggleOptions = (e: React.MouseEvent, index: number) => {
        const { top, width, right, bottom } = document.getElementById('TableContainer')!.getBoundingClientRect();
        const scrollWidth = document.getElementById('TableContainer')!.scrollWidth;
        const remainder = scrollWidth % Math.floor(width);
        const numOfWidth = Math.floor(scrollWidth/width); //Number of table viewable width that makes up scrollable width (as an integer)
        const UserPageWidth = document.getElementById('App')!.getBoundingClientRect().width;
        const leftPadding = (UserPageWidth - width)
        
        //Checks to determine if modal would cut out probably because the selected record is too low (common among the last record)
        //It would then make the modal appear above the mouse click rather than below
        const y = bottom>e.clientY-top ? e.clientY-top : e.clientY-top-130;

        if(remainder>1){
            const xCoor = ((numOfWidth-1)*width)+(right-leftPadding)-Math.abs((remainder)-(right-leftPadding));
            console.log(xCoor);
            setCoords({ x: -xCoor+20, y: y});
            setShowoptions(true);
        }else{
            const xCoor = width-(right-leftPadding);
            setCoords({ x: xCoor-10, y: y});
            setShowoptions(true);
        }

        setActiveIndex(index)
    }

    const startingindex = () => {
        return (currentpage-1) * itemsperpage;
    }

    const lastindex = () => {
        return (currentpage*itemsperpage);
    }

    const changeItemsPerPage = (el: HTMLSelectElement) => {
        setItemsperpage(parseInt(el.value));
    }

    const resetFilter = () => {
        setCurrentfilter(null);
    }

    const activateuser = () => {
        if(activeIndex!==null){
            //Set the main data state
            const copy = [...data];
            copy[activeIndex].status = 'Active';
            setData(copy);
            updateCardData(copy);

            //If a filter is set update it as well
            if(currentfilter){
                const filtered = copy.filter(data => data.status===currentfilter.status);
                setCurrentpage(1);
                setFilteredData(filtered);
            }
        }
    }

    const blacklistuser = () => {
        if(activeIndex!==null){
            //Set the main data state
            const copy = [...data];
            copy[activeIndex].status = 'Blacklisted';
            setData(copy);
            updateCardData(copy);

            //If a filter is set update it as well
            if(currentfilter){
                const filtered = copy.filter(data => data.status===currentfilter.status);
                setCurrentpage(1);
                setFilteredData(filtered);
            }
        }
    }

    const saveuserdetails = () => {
        if(activeIndex!==null){
            localStorage.setItem('LendsqrUserDetails', JSON.stringify(data[activeIndex]));
        }
    }

    return (
        <div id="UsersPageBottomBody">
            <div id="TableContainer" onClick={()=>{ closeModals(); }}>
            <table id="UsersPageTable">
                <thead>
                <tr>
                    <th className='orgtd' onClick={(e)=>{ e.stopPropagation(); setShowfilter(true); }}><span>
                        ORGANIZATION
                        <img alt="filter" src="/filter.png"/>
                    </span></th>

                    <th className='usertd' onClick={(e)=>{ e.stopPropagation(); setShowfilter(true); }}><span>
                        USERNAME
                        <img alt="filter" src="/filter.png"/>
                    </span></th>

                    <th className='emailtd' onClick={(e)=>{ e.stopPropagation(); setShowfilter(true); }}><span>
                        EMAIL
                        <img alt="filter" src="/filter.png"/>
                    </span></th>

                    <th className='phonetd' onClick={(e)=>{ e.stopPropagation(); setShowfilter(true); }}><span>
                        PHONE NUMBER
                        <img alt="filter" src="/filter.png"/>
                    </span></th>

                    <th className='datetd' onClick={(e)=>{ e.stopPropagation(); setShowfilter(true); }}><span>
                        DATE JOINED
                        <img alt="filter" src="/filter.png"/>
                    </span></th>

                    <th className='statustd' onClick={(e)=>{ e.stopPropagation(); setShowfilter(true); }}><span>
                        STATUS
                        <img alt="filter" src="/filter.png"/>
                    </span></th>

                    <th className='moretd'>
                    </th>
                </tr>
                </thead>

                <tbody>
                {
                    currentfilter ?
                        filteredData.length>0?
                            filteredData.slice( startingindex() , lastindex() ).map((data, index)=>{
                                return(
                                    <tr key={data.id} style={{borderBottom:index===9?'none':'1px #213F7D1A solid'}}>
                                        <td>{data.organization}</td>
                                        <td>{data.fullname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{formatDate(data.date.toString())}</td>
                                        <td><Status status={data.status}/></td>
                                        <td className='moretd' onClick={(e)=>{ e.stopPropagation(); toggleOptions(e, data.index); }}><span><img alt="more" src="/more.png"/></span></td>
                                    </tr>
                                )
                            })
                        :   <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                    :   data.length>0?
                            data.slice( startingindex() , lastindex() ).map((data, index)=>{
                                return(
                                    <tr key={data.id} style={{borderBottom:index===9?'none':'1px #213F7D1A solid'}}>
                                        <td>{data.organization}</td>
                                        <td>{data.fullname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{formatDate(data.date.toString())}</td>
                                        <td><Status status={data.status}/></td>
                                        <td className='moretd' onClick={(e)=>{ e.stopPropagation(); toggleOptions(e, data.index); }}><span><img alt="more" src="/more.png"/></span></td>
                                    </tr>
                                )
                            })
                        :   <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                }
                </tbody>
            </table>

            <FilterModal
                show={showfilter}
                closemodal={()=>{ setShowfilter(false); }}
                setfilter={(arg)=>{ setCurrentfilter({status: arg}); }}
                reset={resetFilter}
            />
            <OptionsModal
                show={showoptions}
                closemodal={()=>{ setShowoptions(false); }}
                top={coords.y} right={coords.x}
                activateuser={activateuser}
                blacklistuser={blacklistuser}
                saveuserdetails={saveuserdetails}
            />
            </div>

            <div id="UsersPageTableBottom">
                <div id="TablePageSelectDiv">
                    Showing 
                    <select id="TablePageSelectTag" onChange={(e)=>{ changeItemsPerPage(e.target) }}>
                        <option value={'10'}>10</option>
                        <option value={'20'}>20</option>
                        <option value={'50'}>50</option>
                        <option value={'100'}>100</option>    
                    </select> 
                    out of 
                    <span>{currentfilter ? filteredData.length : data.length}</span> 
                </div>

                <PagePicker
                    datalength={currentfilter ? filteredData.length : data.length}
                    itemsperpage={itemsperpage}
                    currentpage={currentpage}
                    changePage={(page)=>{ setCurrentpage(page); }}
                />
            </div>
        </div>
    )
}
