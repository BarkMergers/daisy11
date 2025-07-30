import { useState, useEffect } from 'react';
import Input from './../input/Input';
import Select from './../select/Select';
import Modal from './../modal/Modal';
import { useContext } from "react";
import { UserContext } from '../App'

export default function Admin({ accounts }) {

    const globalData = useContext(UserContext);

    // Store the loaded data
    const [data, setData] = useState({
    });

    useEffect(() => {

        if (accounts.length != 1)
            return;

        updateData('agent', accounts[0].username);
        getAgent();
        
    }, [accounts]);


    const getAgent = async () => {
        //const url = `http://localhost:7039/api/GetAgent/${accounts[0].username}`;
        const url = `https://daisy11functions20250722145544.azurewebsites.net/api/GetAgent/${accounts[0].username}`;
        const response = await fetch(url);
        const currentData = await response.json();

        setData({
            firstname: currentData.firstname || '',
            lastname: currentData.lastname || '',
            age: currentData.age || 0,
            role: currentData.role || '',
            active: currentData.active || false
        });


    }


    const updateData = (field, value) => {
        setData({ ...data, [field]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //const url = `http://localhost:7039/api/SaveAgentDetail`;
        const url = `https://daisy11functions20250722145544.azurewebsites.net/api/SaveAgentDetail`;

        globalData.SetSpinnerVisible(true);

        fetch(url, { method: 'POST', body: JSON.stringify(data) })
        .then(() => {
            globalData.SetSpinnerVisible(false);
            document.getElementById('my_save').showModal();
        })
    }

    const roleList = ["Admin", "Comms", "Dev", "Agent"];

    return (
        <>

            <Modal id="my_save" title="Admin">
                Save was succesful!
            </Modal>

            <form onSubmit={handleSubmit} className="mx-auto my-10">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <Input value={data.firstname} type="text" title="First Name" placeholder="Your first name" onChange={(e) => updateData('firstname', e.target.value)}></Input>

                    <Input value={data.lastname} type="text" title="Last Name" placeholder="Your last name" onChange={(e) => updateData('lastname', e.target.value)}></Input>

                    <Input value={data.active} type="checkbox" title="Active" onChange={(e) => updateData('active', e.target.checked)}></Input>

                    <Input value={data.age} type="number" title="Age" placeholder="How old are you" onChange={(e) => updateData('age', e.target.value)}></Input>

                    <Select value={data.role} type="text" title="Role" data={roleList} onChange={(e) => updateData('role', e.target.value)}></Select>

                    <button type="submit" className="btn btn-neutral mx-auto mt-4">Save</button>

                </fieldset>
            </form>
        </>
    );

}