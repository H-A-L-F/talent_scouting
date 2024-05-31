import React from 'react'
import Layout from './layout/Layout';
import Temp from '../assets/logo_header.png'

function CompanyDetailPage() {
    return (
        <Layout>
            <div className='w-full px-20 py-10 bg-[#F0F0F0]'>

                <div className='bg-[#F6F6F6] flex justify-center rounded-xl'>
                    <img src={Temp} className='h-[400px] transition hover:scale-110'/>
                </div>

                <div className='bg-[white] mt-6 py-6 px-16 rounded-xl'>
                    <div>
                        <div className='text-[28px] font-bold'>PT Ford Jakarta</div>
                        <div className=''>Jakarta Barat, Kebon Jeruk</div>
                    </div>

                    <div className='mt-4'>
                        <p>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        </p>
                        <br/>
                        <p>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                        </p>
                    </div>

                    <div className='mt-8'>
                        <div className='text-[28px] font-bold'>Job Vacancy at PT Ford Jakarta</div>
                    </div>

                    <div className='mt-4'>
                        There is no vacancy
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CompanyDetailPage
