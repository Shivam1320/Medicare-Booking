// This file is used to design About Section in Doctor Detail's Page

import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <div>
    {/* --------- Doctor About start----------- */}
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Shivam Kumar</span>
        </h3>
        <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Delectus assumenda tempore rerum vel hic corrupti a exercitationem facere rem culpa 
        repellat accusamus repudiandae iure, natus cupiditate magnam quidem facilis incidunt 
        in eum aliquid? Perspiciatis, minus accusamus sapiente culpa deleniti nam! Nam distinctio 
        natus vitae dolor voluptatibus nisi. Unde, odio ipsam?
        </p>
      </div>
    {/* --------- Doctor About end----------- */}


    {/* --------- Doctor Education start----------- */}
      <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate("9-13-2014")} - {formateDate("09-13-2016")}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>

            </li>

            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate("12-04-2010")} - {formateDate("6-18-2014")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
            </li>
        </ul>
      </div>
    {/* --------- Doctor Education end----------- */}


    {/* --------- Doctor Experience start----------- */}
    <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            {/* experience-1 */}
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate("9-13-2014")} - {formateDate("09-13-2016")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
            </li>
            {/* experience-2 */}
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate("9-13-2014")} - {formateDate("09-13-2016")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York.</p>
            </li>
        </ul>
    </div>
    {/* --------- Doctor Experience end----------- */}


    </div>
  )
}

export default DoctorAbout
