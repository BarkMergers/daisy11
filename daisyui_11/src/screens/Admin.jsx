import { useState, useEffect } from 'react';
import Input from './../input/Input';
import Select from './../select/Select';
import Modal from './../modal/Modal';
import { useContext } from "react";
import { UserContext } from '../App'

import { POST, GET } from '../helpers/fetch';

export default function Admin({ accounts }) {

    // Access global functions
    const globalData = useContext(UserContext);

    // Store the record loaded from the server
    const [data, setData] = useState({});

    // Trigger the loading of the record when the component mounts
    useEffect(() => {
        if (accounts.length == 1)
            getAgent();
    }, [accounts]);


    // Load from the server - an Async function
    const getAgent = async () => {
        const DAISY_SERVER_ROOT = import.meta.env.VITE_DAISY_SERVER_ROOT;
        const url = `${DAISY_SERVER_ROOT}api/GetAgent/${accounts[0].username}`;
        const response = await fetch(url, GET());
        setData(await response.json());
    }





    // Submit the record held in 'data' to the server
    const handleSubmit = async (event) => {
        event.preventDefault();

        const DAISY_SERVER_ROOT = import.meta.env.VITE_DAISY_SERVER_ROOT;
        const url = `${DAISY_SERVER_ROOT}api/SaveAgent`;

        globalData.SetSpinnerVisible(true);

        await fetch(url, POST(data))
        .then(() => {
            globalData.SetSpinnerVisible(false);
            document.getElementById('my_save').showModal();
        });
    }




    // Update the 'data' record held in the useState
    const updateData = (field, value) => {
        setData({ ...data, [field]: value });
    }

    const roleList = ["Admin", "Comms", "Dev", "Agent"];

    // The form contains the onSubmit event, each Input component has a 'value' to populate it with the 
    // starting value and an 'onChange' event to call the 'updateData()' function to update 'data'

    return (
        <>
            <Modal id="my_save" title="Admin">
                Save was succesful!
            </Modal>

            <form onSubmit={handleSubmit} className="mx-auto my-10">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <Input value={data.firstname} type="text" title="First Name" placeholder="Your first name" onChange={(e) => updateData('firstname', e.target.value)} />

                    <Input value={data.lastname} type="text" title="Last Name" placeholder="Your last name" onChange={(e) => updateData('lastname', e.target.value)} />

                    <Input value={data.active} type="checkbox" title="Active" onChange={(e) => updateData('active', e.target.checked)} />

                    <Input value={data.age} type="number" title="Age" placeholder="How old are you" onChange={(e) => updateData('age', e.target.value)} />

                    <Select value={data.role} type="text" title="Role" data={roleList} onChange={(e) => updateData('role', e.target.value)} />

                    <button type="submit" className="btn btn-neutral mx-auto mt-4">Save</button>

                </fieldset>
            </form>
        </>
    );
}


