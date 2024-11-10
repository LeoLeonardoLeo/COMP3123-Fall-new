import React from 'react'
import { useRef } from 'react'

export default function DataEntry() {
    var emailRef = useRef()
    var fullnameRef = useRef()
    var address1Ref = useRef()
    var address2Ref = useRef()
    var provinceRef = useRef();
    var cityRef = useRef()
    var postalCodeRef = useRef()

    //store data into array
    const arrayData = [emailRef, fullnameRef, address1Ref, address2Ref, provinceRef, cityRef, postalCodeRef]

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: emailRef.current.value,
            fullname: fullnameRef.current.value,
            address1: address1Ref.current.value,
            address2: address2Ref.current.value,
            province: provinceRef.current.value,
            city: cityRef.current.value,
            postalcode: postalCodeRef.current.value
        };

        console.log(data)
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h1>Data Form Entry</h1>
            <form onSubmit={handleSubmit}>
                Email: <input type='text' ref={emailRef} placeholder='Enter email'/> <br/>
                Full Name: <input type='text' ref={fullnameRef} placeholder='Enter Full Name'/> <br/>
                Address 1: <input type='text' ref={address1Ref} placeholder='Enter Address 1'/> <br/>
                Address 2: <input type='text' ref={address2Ref} placeholder='Enter Address 2'/> <br/>
                
                Province:    

                <select ref={provinceRef}>
                    <option>Alberta</option>
                    <option>British Columbia</option>
                    <option>Manitoba</option>
                    <option>New Brunswick</option>
                    <option>Newfoundland and Labrador</option>
                    <option>Nova Scotia</option>
                    <option>Ontario</option>
                    <option>Prince Edward Island</option>
                    <option>Quebec</option>
                    <option>Saskatchewan</option>

                </select>

                City: <input type='text' ref={cityRef} placeholder='Enter City'/> <br/>
                Postal Code: <input type='text' ref={postalCodeRef} placeholder='Enter postal code'/>


                <input type='submit' value='Submit'/>
            </form>

        </div>
      )
}