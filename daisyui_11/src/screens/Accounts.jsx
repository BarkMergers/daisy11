

import { React } from 'react'
import Modal from './../modal/Modal'

export default function Accounts() {


    return (
    
        <>

            <div>
                Here are your accounts
            </div>

            <div>
                <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Random Account</button>
            </div>


            <Modal id="my_modal_1" title="Random Account">
                Feature not ready - Its only a test of modal dialog boxes!
            </Modal>

        </>


    );


}
