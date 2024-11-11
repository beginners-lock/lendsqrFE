type PagePickerProps = {
    datalength: number
    itemsperpage: number
    changePage: (page: number)=>void
    currentpage: number
}

export function PagePicker({currentpage, datalength, itemsperpage, changePage}: PagePickerProps){
    const numberOfPages = Math.ceil(datalength/itemsperpage);
    const lastThreePageFormat = numberOfPages-3;

    //Checks if the current page is within the range of three to determine if you'll show the three dots or not
    const rangeOfThree = (index: number) => {
        if(currentpage===1){
            if(index<currentpage+3){
                return true;
            }else{
                return false;
            }
        }else{
            if(index>=currentpage-1 && index<=currentpage+1){
                return true;
            }else{
                return false;
            }
        }
    }

    const prevpage = () => {
        if(currentpage>1){
            changePage(currentpage-1);
        }
    }

    const nextpage = () => {
        if(currentpage<Math.ceil(numberOfPages)){
            changePage(currentpage+1);
        }
    }

    return(
        <div id="PagePicker" style={{display:numberOfPages<1?'none':'flex'}}>
            <div className="PageArrow" onClick={()=>{ prevpage(); }}>
                <img alt="back" src="/left.png"/>
            </div>

            <div 
                style={{display:numberOfPages>6 && currentpage>2?'flex':'none'}}
                className="PagePickerDots"
            >
                ...
            </div>
            {
                numberOfPages<=6 ?
                    Array(Math.ceil(numberOfPages)).fill('').map((_, index)=>{
                        return(
                            <div 
                                key={(index+1)+lastThreePageFormat}
                                className={`${currentpage===index+1?'activepage':'inactivepage'} PagePickerPageDiv`} onClick={()=>{ changePage(index+1); }}>
                                {index+1}
                            </div>
                        );
                    })
                :   Array(Math.ceil(numberOfPages)).fill('').slice(0, lastThreePageFormat).map((_, index)=>{
                        return(
                            <div 
                                key={(index+1)+lastThreePageFormat}
                                style={{display:rangeOfThree(index+1)?'flex':'none'}}
                                className={`${currentpage===index+1?'activepage':'inactivepage'} PagePickerPageDiv`} 
                                onClick={()=>{ changePage(index+1); }}>
                                {index+1}
                            </div>
                        );
                    })
            }

            <div 
                style={{display:currentpage+1 < lastThreePageFormat?'flex':'none'}}
                className="PagePickerDots"
            >
                ...
            </div>

            {   
                numberOfPages>6 &&
                Array(Math.ceil(numberOfPages)).fill('').slice(lastThreePageFormat).map((_, index)=>{
                    return(
                        <div
                            key={(index+1)+lastThreePageFormat}
                            className={`${currentpage===(index+1)+lastThreePageFormat?'activepage':'inactivepage'} PagePickerPageDiv`} 
                            onClick={()=>{ changePage( (index+1)+lastThreePageFormat ); }}>
                            { (index+1)+lastThreePageFormat }
                        </div>
                    );
                })  
            }

            <div className="PageArrow" onClick={()=>{ nextpage(); }}>
                <img alt="next" src="/right.png"/>
            </div>
        </div>
    );
}