
import Input from './../input/Input';

export default function Admin() {





    return (
    
        <>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto my-10 border p-4">

                <Input type="text" title="First Name" placeholder="Your first name"></Input>

                <Input type="text" title="Last Name" placeholder="Your last name"></Input>

                <Input type="checkbox" title="Active"></Input>

                <button className="btn btn-neutral mx-auto mt-4">Save</button>

            </fieldset>

        </>
    
    
    );





}