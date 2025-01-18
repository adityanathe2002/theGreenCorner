import React from 'react';
import Img1 from '../../../assets/plant/delivery.png';
import Img2 from '../../../assets/plant/call.png';
import Img3 from '../../../assets/plant/money-back.png';

const list = [
    {
        id: 1,
        img: Img1,
        description1: 'FREE SHIPPING',
        description2: 'Every Day, Every Where',
        description3: 'All orders over ₹1000',
    },
    {
        id: 2,
        img: Img2,
        description1: 'SUPPORT',
        description2: '24/7 DEDICATED SUPPORT',
        description3: '020 1234567890',
    },
    {
        id: 3,
        img: Img3,
        description1: 'REFUND',
        description2: 'MONEY BACK',
        description3: 'If the item didn’t suit you',
    },
];

const Section1 = () => {
    return (
        <div className="bg-[#333] py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
                    {list.map((data) => (
                        <div
                            key={data.id}
                            className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 w-full md:w-1/3"
                        >
                            <img src={data.img} alt="" className="h-16 md:h-20" />
                            <div className="text-white text-sm space-y-1">
                                <p className="font-bold">{data.description1}</p>
                                <p>{data.description2}</p>
                                <p>{data.description3}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section1;
