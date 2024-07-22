import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirst_name] = useState('');
    const [middle_name, setMiddle_name] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [place_of_birth, setPlace_of_birth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivil_status] = useState('');
    const [height_m, setHeight_m] = useState('');
    const [weight_kg, setWeight_kg] = useState('');
    const [blood_type, setBlood_type] = useState('');
    const [gsis_no, setGsis_no] = useState('');
    const [pagibig_no, setPagibig_no] = useState('');
    const [philhealth_no, setPhilhealth_no] = useState('');
    const [sss_no, setSss_no] = useState('');
    const [tin_no, setTin_no] = useState('');
    const [spouse_surname, setSpouse_surname] = useState('');
    const [spouse_first_name, setSpouse_first_name] = useState('');
    const [spouse_middle_name, setSpouse_middle_name] = useState('');
    const [spouse_name_ext, setSpouse_name_ext] = useState('');
    const [spouse_occupation, setSpouse_occupation] = useState('');
    const [spouse_employer, setSpouse_employer] = useState('');
    const [spouse_business_address, setSpouse_business_address] = useState('');
    const [spouse_telephone, setSpouse_telephone] = useState('');
    const [child1, setChild1] = useState('');
    const [child2, setChild2] = useState('');
    const [child3, setChild3] = useState('');
    const [child4, setChild4] = useState('');

    useEffect(() => {
        if (item) {
            setFirst_name(item.first_name || '');
            setMiddle_name(item.middle_name || '');
            setSurname(item.surname || '');
            setAddress(item.address || '');
            setPhone(item.phone || '');
            setEmail(item.email || '');
            setDate_of_birth(item.date_of_birth || '');
            setPlace_of_birth(item.place_of_birth || '');
            setSex(item.sex || '');
            setCivil_status(item.civil_status || '');
            setHeight_m(item.height_m || '');
            setWeight_kg(item.weight_kg || '');
            setBlood_type(item.blood_type || '');
            setGsis_no(item.gsis_no || '');
            setPagibig_no(item.pagibig_no || '');
            setPhilhealth_no(item.philhealth_no || '');
            setSss_no(item.sss_no || '');
            setTin_no(item.tin_no || '');
            setSpouse_surname(item.spouse_surname || '');
            setSpouse_first_name(item.spouse_first_name || '');
            setSpouse_middle_name(item.spouse_middle_name || '');
            setSpouse_name_ext(item.spouse_name_ext || '');
            setSpouse_occupation(item.spouse_occupation || '');
            setSpouse_employer(item.spouse_employer || '');
            setSpouse_business_address(item.spouse_business_address || '');
            setSpouse_telephone(item.spouse_telephone || '');
            setChild1(item.child1 || '');
            setChild2(item.child2 || '');
            setChild3(item.child3 || '');
            setChild4(item.child4 || '');
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name,
            middle_name,
            surname,
            address,
            phone,
            email,
            date_of_birth,
            place_of_birth,
            sex,
            civil_status,
            height_m,
            weight_kg,
            blood_type,
            gsis_no,
            pagibig_no,
            philhealth_no,
            sss_no,
            tin_no,
            spouse_surname,
            spouse_first_name,
            spouse_middle_name,
            spouse_name_ext,
            spouse_occupation,
            spouse_employer,
            spouse_business_address,
            spouse_telephone,
            child1,
            child2,
            child3,
            child4,
        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} />
            </div>
            <div>
                <label>Surname:</label>
                <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type='date' value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type='text' value={place_of_birth} onChange={(e) => setPlace_of_birth(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivil_status(e.target.value)} />
            </div>
            <div>
                <label>Height (m):</label>
                <input type='number' step='0.01' value={height_m} onChange={(e) => setHeight_m(e.target.value)} />
            </div>
            <div>
                <label>Weight (kg):</label>
                <input type='number' step='0.01' value={weight_kg} onChange={(e) => setWeight_kg(e.target.value)} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type='text' value={blood_type} onChange={(e) => setBlood_type(e.target.value)} />
            </div>
            <div>
                <label>GSIS No:</label>
                <input type='text' value={gsis_no} onChange={(e) => setGsis_no(e.target.value)} />
            </div>
            <div>
                <label>PAGIBIG No:</label>
                <input type='text' value={pagibig_no} onChange={(e) => setPagibig_no(e.target.value)} />
            </div>
            <div>
                <label>PhilHealth No:</label>
                <input type='text' value={philhealth_no} onChange={(e) => setPhilhealth_no(e.target.value)} />
            </div>
            <div>
                <label>SSS No:</label>
                <input type='text' value={sss_no} onChange={(e) => setSss_no(e.target.value)} />
            </div>
            <div>
                <label>TIN No:</label>
                <input type='text' value={tin_no} onChange={(e) => setTin_no(e.target.value)} />
            </div>
            <div>
                <label>Spouse Surname:</label>
                <input type='text' value={spouse_surname} onChange={(e) => setSpouse_surname(e.target.value)} />
            </div>
            <div>
                <label>Spouse First Name:</label>
                <input type='text' value={spouse_first_name} onChange={(e) => setSpouse_first_name(e.target.value)} />
            </div>
            <div>
                <label>Spouse Middle Name:</label>
                <input type='text' value={spouse_middle_name} onChange={(e) => setSpouse_middle_name(e.target.value)} />
            </div>
            <div>
                <label>Spouse Name Ext:</label>
                <input type='text' value={spouse_name_ext} onChange={(e) => setSpouse_name_ext(e.target.value)} />
            </div>
            <div>
                <label>Spouse Occupation:</label>
                <input type='text' value={spouse_occupation} onChange={(e) => setSpouse_occupation(e.target.value)} />
            </div>
            <div>
                <label>Spouse Employer:</label>
                <input type='text' value={spouse_employer} onChange={(e) => setSpouse_employer(e.target.value)} />
            </div>
            <div>
                <label>Spouse Business Address:</label>
                <input type='text' value={spouse_business_address} onChange={(e) => setSpouse_business_address(e.target.value)} />
            </div>
            <div>
                <label>Spouse Telephone:</label>
                <input type='text' value={spouse_telephone} onChange={(e) => setSpouse_telephone(e.target.value)} />
            </div>
            <div>
                <label>Child 1:</label>
                <input type='text' value={child1} onChange={(e) => setChild1(e.target.value)} />
            </div>
            <div>
                <label>Child 2:</label>
                <input type='text' value={child2} onChange={(e) => setChild2(e.target.value)} />
            </div>
            <div>
                <label>Child 3:</label>
                <input type='text' value={child3} onChange={(e) => setChild3(e.target.value)} />
            </div>
            <div>
                <label>Child 4:</label>
                <input type='text' value={child4} onChange={(e) => setChild4(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ItemForm;

