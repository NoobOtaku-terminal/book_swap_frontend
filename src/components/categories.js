import React from 'react'
import { useNavigate } from 'react-router-dom';

function Categories() {
    const navigate = useNavigate();
    const handleCategory = (categoryName) => {
        navigate(`/category/${categoryName}`);
    }
    return (
        <div className='d-flex justify-content-between px-5 py-4' >
            <div onClick={() => handleCategory('Fiction')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">
                    <circle cx="256" cy="256" r="256" fill="#7c4dff" />
                    <path d="M128 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V96z"
                        fill="#ffffff" />
                    <path d="M160 96h192v288H160V96z" fill="#f3e5f5" />
                    {/* <!-- Magic wand --> */}
                    <path d="M200 150l15-15 100 100-15 15z" fill="#9c27b0" />
                    <circle cx="320" cy="140" r="8" fill="#ffeb3b" />
                    <circle cx="180" cy="200" r="6" fill="#ffeb3b" />
                    <circle cx="280" cy="250" r="7" fill="#ffeb3b" />
                </svg>
                <h4>Fiction</h4>
            </div>

            <div onClick={() => handleCategory('Non-Fiction')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">
                    <circle cx="256" cy="256" r="256" fill="#2196f3" />
                    <path d="M96 96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V96z"
                        fill="#ffffff" />
                    {/* <!-- Glasses symbol --> */}
                    <path d="M180 200c20 0 36 16 36 36s-16 36-36 36-36-16-36-36 16-36 36-36zm152 0c20 0 36 16 36 36s-16 36-36 36-36-16-36-36 16-36 36-36z"
                        fill="#0d47a1" />
                    <path d="M180 236h152" stroke="#0d47a1" strokeWidth="8" />
                </svg>
                <h4>Non-Fiction</h4>
            </div>
            <div onClick={() => handleCategory('Science and Technology')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">
                    <circle cx="256" cy="256" r="256" fill="#4caf50" />
                    {/* <!-- Lab flask --> */}
                    <path d="M200 120h112v40h-32l-60 120h-20l60-120h-60z" fill="#ffffff" />
                    {/* <!-- Atoms/molecules --> */}
                    <circle cx="256" cy="256" r="60" fill="none" stroke="#ffffff" strokeWidth="8" />
                    <circle cx="256" cy="256" r="8" fill="#ffffff" />
                    <circle cx="296" cy="256" r="8" fill="#ffffff" />
                    <circle cx="216" cy="256" r="8" fill="#ffffff" />
                </svg>
                <h4>Science and Technology</h4>
            </div>
            <div onClick={() => handleCategory('History and Philosophy')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">
                    <circle cx="256" cy="256" r="256" fill="#795548" />
                    {/* <!-- Scroll --> */}
                    <path d="M160 120c0-11 9-20 20-20h152c11 0 20 9 20 20v272c0 11-9 20-20 20H180c-11 0-20-9-20-20V120z"
                        fill="#d7ccc8" />
                    <path d="M160 120h192v40H160z" fill="#8d6e63" />
                    <path d="M200 200h112M200 240h112M200 280h112"
                        stroke="#8d6e63" strokeWidth="8" strokeLinecap="round" />
                </svg>
                <h4>History and Philosophy</h4>
            </div>
            <div onClick={() => handleCategory('Health')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">
                    <circle cx="256" cy="256" r="256" fill="#f44336" />
                    {/* <!-- Medical cross --> */}
                    <path d="M220 140h72v72h72v72h-72v72h-72v-72h-72v-72h72z" fill="#ffffff" />
                    {/* <!-- Heart shape --> */}
                    <path d="M256 320l-40-40c-40-40-40-80 0-120s80-40 120 0l-80 160" fill="#ffcdd2" />
                </svg>
                <h4>Health</h4>
            </div>
        </div>
    )
}

export default Categories;
