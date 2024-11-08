import './../styles/OptionsModal.scss';

export const OptionsModal = () => {
  return (
    <div id="OptionsModal">
        <span>
            <img alt="modalview" src="/modalview.png"/>
            View Details
        </span>

        <span>
            <img alt="modalview" src="/modalcross.png"/>
            Blacklist User
        </span>

        <span>
            <img alt="modalview" src="/modalcheck.png"/>
            Activate User
        </span>
    </div>
  )
}
