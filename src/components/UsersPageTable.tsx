import { useEffect, useState } from 'react';
import './../styles/UsersPageTable.scss';
import { Status } from './Status';
import { OptionsModal } from './OptionsModal';
import { FilterModal } from './FilterModal';

type DataType = {
    organization: string
    username: string
    email: string
    phone: string
    date: string
    status: 'Inactive'|'Active'|'Pending'|'Blacklisted'
}


export const UsersPageTable = () => {
    const [data, setData] = useState<DataType[]>([]);
    const months = ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun','Jul', 'Aug','Sep', 'Oct','Nov', 'Dec'];

    useEffect(()=>{
        fetch('/json/generated.json').then((response)=>{
            console.log(response);
            return response.json();
        }).then((json)=>{
            setData(json);
        });
    }, []);

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

    return (
        <div id="TableContainer">
        <table id="UsersPageTable">
            <thead>
            <tr>
                <th className='orgtd'><span>
                    ORGANIZATION
                    <img alt="filter" src="/filter.png"/>
                </span></th>

                <th className='usertd'><span>
                    USERNAME
                    <img alt="filter" src="/filter.png"/>
                </span></th>

                <th className='emailtd'><span>
                    EMAIL
                    <img alt="filter" src="/filter.png"/>
                </span></th>

                <th className='phonetd'><span>
                    PHONE NUMBER
                    <img alt="filter" src="/filter.png"/>
                </span></th>

                <th className='datetd'><span>
                    DATE JOINED
                    <img alt="filter" src="/filter.png"/>
                </span></th>

                <th className='statustd'><span>
                    STATUS
                    <img alt="filter" src="/filter.png"/>
                </span></th>

                <th className='moretd'>
                </th>
            </tr>
            </thead>

            <tbody>
            {
                data.length>0?
                    data.slice(0,10).map((data, index)=>{
                        return(
                            <tr style={{borderBottom:index===9?'none':'1px #213F7D1A solid'}}>
                                <td>{data.organization}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{formatDate(data.date.toString())}</td>
                                <td><Status status={data.status}/></td>
                                <td className='moretd'><span><img alt="more" src="/more.png"/></span></td>
                            </tr>
                        )
                    })
                : ''
            }
            </tbody>
        </table>

        <FilterModal/>
        <OptionsModal/>
        </div>
    )
}
