import { useState, useEffect } from 'react';
import Input from './../input/Input';
import Select from './../select/Select';
import Label from './../label/Label';
import Modal from './../modal/Modal';
import { useContext } from "react";
import { UserContext } from '../App'

import { POST, GET, SafeFetch, SafeFetchJson } from '../helpers/fetch';



export default function Admin() {





    return (
        <>
            <Modal id="my_save" title="Admin">
                Save was succesful!
            </Modal>

            <form  className="mx-auto my-10">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <Label>Set up some admin functions here</Label>

                </fieldset>
            </form>
        </>
    );
}


