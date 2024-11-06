import './../styles/SideNavBar.scss';

type SideNavOptionProps = {
    activenav: string
    img: string
    option: string
    clickfunction: (arg: string)=>void
}

export const SideNavOption = ({ activenav, img, option, clickfunction }: SideNavOptionProps) => {
    return (
        <div className={`SideNavOption ${activenav===option.toLowerCase()?'ActiveSideNav':''}`} onClick={()=>{ clickfunction(option.toLowerCase()); }}>
            <img alt="navimg" className="SideNavImg" src={img}/>
            {option}
            <img alt="dropdown" className="SideNavDropdown" src="sidenavdropdown.png"/>
        </div>
    )
}
