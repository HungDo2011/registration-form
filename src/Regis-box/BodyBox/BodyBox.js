import { useState } from 'react';
import './BodyBox.scss';

function BodyBox() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [area, setArea] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');

    const valueFirstName = (e) => {
        if (e.target.value !== ' ') {
            setFirstName(e.target.value);
        }
    };

    const valueLastName = (e) => {
        if (e.target.value !== ('' || ' ')) {
            setLastName(e.target.value);
        }
    };
    const fullName = firstName + ' ' + lastName;

    const valueCompany = (e) => {
        if (e.target.value !== ('' || ' ')) {
            setCompany(e.target.value);
        }
    };

    const valueEmail = (e) => {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regexEmail.test(e.target.value)) {
            setEmail(e.target.value);
        }
    };

    const valueArea = (e) => {
        const regexArea = /^(\(\d{3}\)|\d{3})$/g;
        if (regexArea.test(e.target.value)) {
            setArea(e.target.value);
        }
    };

    const valuePhone = (e) => {
        const regexPhone = /^[0-9\-\+]{8, 11}$/g;
        if (regexPhone.test(e.target.value)) {
            setPhone(e.target.value);
        }
    };
    const phoneNumber = area + phone;

    const valueSubject = (e) => {
        setSubject(e.target.value);
    };

    const valueCustomer = (e) => {};

    let newUser = {};

    const handleSubmit = (event) => {
        event.preventDefault();
        newUser = {
            fullName: fullName,
            company: company,
            email: email,
            phone: phoneNumber,
            subject: subject,
        };
        let isSuccess = true;
        Object.values(newUser).map((item) => {
            if (item === '') {
                isSuccess = false;
            }
        });

        if (isSuccess) {
            const result = document.querySelector('.result');
            result.style.display = 'block';
        } else {
            alert('Thông tin nhập vào không chính xác');
        }
    };

    return (
        <div className="box-body">
            <form action="">
                <div className="form-m-b-55">
                    <div className="form-title">Name</div>
                    <div className="form-input">
                        <div className="input-group">
                            <input onBlur={valueFirstName} className="input-50h" type="text" name="first-name"></input>
                            <p className="input-title">First Name</p>
                        </div>
                        <div className="input-group">
                            <input onBlur={valueLastName} className="input-50h" type="text" name="last-name"></input>
                            <p className="input-title">Last Name</p>
                        </div>
                    </div>
                </div>
                <div className="form-m-b-40">
                    <div className="form-title">Company</div>
                    <div className="form-input">
                        <input
                            onBlur={valueCompany}
                            className="input-50h input-content"
                            type="text"
                            name="company"
                        ></input>
                    </div>
                </div>
                <div className="form-m-b-40">
                    <div className="form-title">Email</div>
                    <div className="form-input">
                        <input
                            onBlur={valueEmail}
                            className="input-50h input-content"
                            type="email"
                            name="email"
                        ></input>
                    </div>
                </div>
                <div className="form-m-b-55">
                    <div className="form-title">Phone</div>
                    <div className="form-input">
                        <div className="input-group">
                            <input
                                onBlur={valueArea}
                                className="w100px input-50h input-arena-code"
                                type="text"
                                name="area-code"
                            ></input>
                            <p className="input-title">Area Code</p>
                        </div>
                        <div className="input-group">
                            <input
                                onBlur={valuePhone}
                                className="input-50h input-phone-number"
                                type="text"
                                name="phone-number"
                            ></input>
                            <p className="input-title">Phone Number</p>
                        </div>
                    </div>
                </div>
                <div className="form-m-b-40">
                    <div className="form-title">Subject</div>
                    <div className="form-input">
                        <select
                            onChange={valueSubject}
                            className="input-50h input-content"
                            defaultValue="Choose option"
                            aria-hidden="true"
                        >
                            <option disabled="disabled" role="presentation">
                                Choose option
                            </option>
                            <option>Subject 1</option>
                            <option>Subject 2</option>
                            <option>Subject 3</option>
                        </select>
                    </div>
                </div>
                <div className="form-check">
                    <h5 className="form-check-title">Are you an existing customer?</h5>
                    <div className="form-check-radio" onChange={valueCustomer}>
                        <div className="form-check-chirld">
                            <input className="radio-check" type="radio" defaultChecked name="exist"></input>
                            <span>Yes</span>
                        </div>
                        <div className="form-check-chirld">
                            <input className="radio-check" type="radio" name="exist"></input>
                            <span>No</span>
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={handleSubmit} className="btn-submit">
                        REGISTER
                    </button>
                </div>
            </form>

            <div className="result">
                <h1 className="title">Thank to registration</h1>
                <h2 className="title">This is Your Infomation</h2>

                <h2 className="content">Full name: {fullName}</h2>
                <h2 className="content">Company: {company}</h2>
                <h2 className="content">Email: {email}</h2>
                <h2 className="content">Phone: {phoneNumber}</h2>
                <h2 className="content">Subject: {subject}</h2>
            </div>
        </div>
    );
}

export default BodyBox;
