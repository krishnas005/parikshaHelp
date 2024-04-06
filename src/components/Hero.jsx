import React from 'react';
import Link from "next/link"

const Button = ({ text, backgroundColor, textColor, border }) => (
    <button className="button w-[200p] text-xs font-bold rounded-lg" style={{ backgroundColor, color: textColor, border }}>{text}</button>
);

const Column1 = () => (
    <div className="column column-left">
        <div className="buttons-container">
            <p className="border border-1 bg-blue-300 w-full text-center p-1 m-1 rounded-md text-white font-bold py-1">Candidate&apos;s Corner</p>
            <div className="button-wrapper text-sm">
                <Button text="Notifications" backgroundColor="transparent" />
                <Link href="/register"><Button text="Stage1. Registration" backgroundColor="transparent" /></Link>
                {/* <Link className="ml-5 my-4" href="/register">Stage1.Registration</Link> */}
                <Button text="Stage 2.Apply Online" backgroundColor="transparent" />
                <Button text="Fee Payments" backgroundColor="transparent" />
                {/* <Button text="Help Desks" backgroundColor="transparent" /> */}
                {/* <Button text="Annexures" backgroundColor="transparent" /> */}
                <Button text="Candidate Grievances" backgroundColor="transparent" />
                <Link href='/candidate-list'><Button text="Shortlisted Candidates" backgroundColor="transparent" /></Link>
                {/* <Link className="ml-5 my-4" href="/rank-calculate">Shortlisted Candidates</Link> */}
            </div>
        </div>
    </div>
);

const Column2 = () => (
    <div className="column column-right ">
        <div className="buttons-container text-sm ml-9">
            {['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu'].map((state, index) => (
                <Button key={index} text={`${index + 1}. ${state}`} backgroundColor="#0583D2" textColor="white" border="1px solid #0583D2" className="rounded " />
            ))}
        </div>
    </div>
);

const TwoColumnLayout = () => (
    <div className="container max-w-4xl mx-auto mt-8 px-4">
        <div className="two-column-layout">
            <Column1 />
            <Column2 />
        </div>
    </div>
);

export default TwoColumnLayout;
