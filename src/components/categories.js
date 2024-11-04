import React from 'react'
import { useNavigate } from 'react-router-dom';

function Categories() {
    const navigate = useNavigate();
    const handleCategory = (categoryName) => {
        navigate(`/category/${categoryName}`);
    }
    return (
        <div className='d-flex justify-content-between px-5 py-4' >
            <div onClick={() => handleCategory('Self-help')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">

                    <circle cx="256" cy="256" r="256" fill="#3a3a8e" />
                    <path d="M96 32C43 32 0 75 0 128V384c0 53 43 96 96 96h288c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-64h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96zM96 416c-17.7 0-32-14.3-32-32s14.3-32 32-32h256v64H96zm48-272c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="#ffffff" />
                    <path d="M192 320h128v64H192zM240 320c0 16 16 16 16 16s16 0 16-16h-32zm0-48c0 8 16 8 16 8s16 0 16-8v-8c0-8-16-8-16-8s-16 0-16 8v8z" fill="#f7d774" />
                    <circle cx="128" cy="112" r="8" fill="#f7d774" />
                    <circle cx="384" cy="96" r="12" fill="#f7d774" />
                    <circle cx="256" cy="64" r="10" fill="#f7d774" />

                </svg>
                <h4>category1</h4>
            </div>

            <div onClick={() => handleCategory('Fiction')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">

                    <circle cx="256" cy="256" r="256" fill="#3a3a8e" />
                    <path d="M96 32C43 32 0 75 0 128V384c0 53 43 96 96 96h288c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-64h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96zM96 416c-17.7 0-32-14.3-32-32s14.3-32 32-32h256v64H96zm48-272c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="#ffffff" />

                    <path d="M192 320h128v64H192zM240 320c0 16 16 16 16 16s16 0 16-16h-32zm0-48c0 8 16 8 16 8s16 0 16-8v-8c0-8-16-8-16-8s-16 0-16 8v8z" fill="#f7d774" />

                    <circle cx="128" cy="112" r="8" fill="#f7d774" />
                    <circle cx="384" cy="96" r="12" fill="#f7d774" />
                    <circle cx="256" cy="64" r="10" fill="#f7d774" />
                </svg>
                <h4>category2</h4>
            </div>
            <div onClick={() => handleCategory('Science')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">

                    <circle cx="256" cy="256" r="256" fill="#3a3a8e" />


                    <path d="M96 32C43 32 0 75 0 128V384c0 53 43 96 96 96h288c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-64h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96zM96 416c-17.7 0-32-14.3-32-32s14.3-32 32-32h256v64H96zm48-272c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="#ffffff" />


                    <path d="M192 320h128v64H192zM240 320c0 16 16 16 16 16s16 0 16-16h-32zm0-48c0 8 16 8 16 8s16 0 16-8v-8c0-8-16-8-16-8s-16 0-16 8v8z" fill="#f7d774" />


                    <circle cx="128" cy="112" r="8" fill="#f7d774" />
                    <circle cx="384" cy="96" r="12" fill="#f7d774" />
                    <circle cx="256" cy="64" r="10" fill="#f7d774" />
                </svg>
                <h4>category3</h4>
            </div>
            <div onClick={() => handleCategory('History')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">

                    <circle cx="256" cy="256" r="256" fill="#3a3a8e" />


                    <path d="M96 32C43 32 0 75 0 128V384c0 53 43 96 96 96h288c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-64h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96zM96 416c-17.7 0-32-14.3-32-32s14.3-32 32-32h256v64H96zm48-272c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="#ffffff" />


                    <path d="M192 320h128v64H192zM240 320c0 16 16 16 16 16s16 0 16-16h-32zm0-48c0 8 16 8 16 8s16 0 16-8v-8c0-8-16-8-16-8s-16 0-16 8v8z" fill="#f7d774" />


                    <circle cx="128" cy="112" r="8" fill="#f7d774" />
                    <circle cx="384" cy="96" r="12" fill="#f7d774" />
                    <circle cx="256" cy="64" r="10" fill="#f7d774" />
                </svg>
                <h4>category4</h4>
            </div>
            <div onClick={() => handleCategory('Technolgy')} className='hover'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="70" height="70">

                    <circle cx="256" cy="256" r="256" fill="#3a3a8e" />


                    <path d="M96 32C43 32 0 75 0 128V384c0 53 43 96 96 96h288c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-64h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96zM96 416c-17.7 0-32-14.3-32-32s14.3-32 32-32h256v64H96zm48-272c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16zm16 48h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" fill="#ffffff" />


                    <path d="M192 320h128v64H192zM240 320c0 16 16 16 16 16s16 0 16-16h-32zm0-48c0 8 16 8 16 8s16 0 16-8v-8c0-8-16-8-16-8s-16 0-16 8v8z" fill="#f7d774" />


                    <circle cx="128" cy="112" r="8" fill="#f7d774" />
                    <circle cx="384" cy="96" r="12" fill="#f7d774" />
                    <circle cx="256" cy="64" r="10" fill="#f7d774" />
                </svg>
                <h4>category5</h4>
            </div>


        </div>
    )
}

export default Categories;
