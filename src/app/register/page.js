'use client';

import '../globals.css'
import { useState } from 'react';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        email: '',
        name: '',
        fatherName: '',
        motherName: '',
        dob: '',
        gender: '',
        transgender: '',
        community: '',
        circle: '',
        yearOfPassing: '',
        aadhaarNumber: '',
        isPWD: false,
        pwdCategory: '',
        languages: [],
        isEmployed: false,
        hasNOC: false,
        photo: null,
        signature: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md min-h-900">
            <h2 className="text-2xl font-semibold mb-4 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="mobileNumber">Mobile Number:</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Applicant&apos;s Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="fatherName">Father&apos;s Name:</label>
                        <input
                            type="text"
                            id="fatherName"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="motherName">Mother&apos;s Name:</label>
                        <input
                            type="text"
                            id="motherName"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="input-field"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    {formData.gender === 'Other' && (
                        <div>
                            <label htmlFor="transgender">Select:</label>
                            <select
                                id="transgender"
                                name="transgender"
                                value={formData.transgender}
                                onChange={handleChange}
                                required
                                className="input-field"
                            >
                                <option value="">Select Option</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                        </div>
                    )}
                    <div>
                        <label htmlFor="community">Community:</label>
                        <input
                            type="text"
                            id="community"
                            name="community"
                            value={formData.community}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="circle">Circle:</label>
                        <input
                            type="text"
                            id="circle"
                            name="circle"
                            value={formData.circle}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="yearOfPassing">Year of Passing Secondary School:</label>
                        <input
                            type="number"
                            id="yearOfPassing"
                            name="yearOfPassing"
                            value={formData.yearOfPassing}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="aadhaarNumber">Aadhaar Number:</label>
                        <input
                            type="text"
                            id="aadhaarNumber"
                            name="aadhaarNumber"
                            value={formData.aadhaarNumber}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label htmlFor="isPWD">Are You Person with Disability?</label>
                        <input
                            type="checkbox"
                            id="isPWD"
                            name="isPWD"
                            checked={formData.isPWD}
                            onChange={handleChange}
                            className="checkbox-field"
                        />
                    </div>
                    {formData.isPWD && (
                        <div>
                            <label htmlFor="pwdCategory">Type of Disability:</label>
                            <input
                                type="text"
                                id="pwdCategory"
                                name="pwdCategory"
                                value={formData.pwdCategory}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>
                    )}
                    
                    <div>
                        <label htmlFor="isEmployed">Whether Employed?</label>
                        <input
                            type="checkbox"
                            id="isEmployed"
                            name="isEmployed"
                            checked={formData.isEmployed}
                            onChange={handleChange}
                            className="checkbox-field"
                        />
                    </div>
                    {formData.isEmployed && (
                        <div>
                            <label htmlFor="hasNOC">Whether employer NOC is available?</label>
                            <input
                                type="checkbox"
                                id="hasNOC"
                                name="hasNOC"
                                checked={formData.hasNOC}
                                onChange={handleChange}
                                className="checkbox-field"
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="photo">Upload Photo:</label>
                        <input
                            type="file"
                            id="photo"
                            name="photo"
                            accept="image/jpeg, image/jpg"
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <small className="block">Size should not exceed 50kb</small>
                    </div>
                    <div>
                        <label htmlFor="signature">Upload Signature:</label>
                        <input
                            type="file"
                            id="signature"
                            name="signature"
                            accept="image/jpeg, image/jpg"
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <small className="block">Size should not exceed 20kb</small>
                    </div>
                </div>
                <button type="submit" className="mt-4 w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Register
                </button>
            </form>
        </div>
    );
}
