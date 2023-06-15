// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

const futureDate = dayjs('2023-06-15 17:35:30');

export function getTime() {
	const currentDate = dayjs();
	const countdownDuration = dayjs.duration(futureDate.diff(currentDate));
	let days: any = countdownDuration.days();
	let hours: any = countdownDuration.hours();
	let minutes: any = countdownDuration.minutes();
	let seconds: any = countdownDuration.seconds();
	if (days < 10) days = '0' + days;
	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;
	if (seconds < 10) seconds = '0' + seconds;
	return [days, hours, minutes, seconds];
}

const OpenGovHeaderBanner = () => {
	const [[days, hrs, mins, secs], setTime] = useState(getTime());
	useEffect(() => {
		const timer = setInterval(() => {
			setTime(() => {
				return getTime();
			});
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	return (
		<section
			className='opengov_banner rounded-b-[20px] flex flex-col md:items-center justify-between gap-x-2 py-[10px] px-4 md:py-6 md:px-9 lg:flex-row lg:ml-[80px]'
		>
			<h2
				className='m-0 p-0 text-white font-medium font-poppins text-sm md:text-[24px] leading-[21px] md:leading-[36px]'
			>
                OpenGov expected to go LIVE on Polkadot
			</h2>
			<div className='flex items-center gap-x-1 md:gap-x-3'>
				<span className='font-medium text-sm leading-[21px] md:text-[28px] md:leading-[42px] text-white w-[32px] md:w-[37px] flex items-center justify-center'>{days}</span>
				<span className='font-medium text-xs md:text-[18px] leading-[18px] md:leading-[27px] text-[rgba(255,255,255,0.9)]'>
                    Days
				</span>
				<span className='font-medium text-[18px] leading-[27px] text-[rgba(255,255,255,0.9)]'>
                    :
				</span>
				<span className='font-medium text-sm leading-[21px] md:text-[28px] md:leading-[42px] text-white w-[32px] md:w-[37px] flex items-center justify-center'>{hrs}</span>
				<span className='font-medium text-xs md:text-[18px] leading-[18px] md:leading-[27px] text-[rgba(255,255,255,0.9)]'>
                    Hours
				</span>
				<span className='font-medium text-[18px] leading-[27px] text-[rgba(255,255,255,0.9)]'>
                    :
				</span>
				<span className='font-medium text-sm leading-[21px] md:text-[28px] md:leading-[42px] text-white w-[32px] md:w-[37px] flex items-center justify-center'>{mins}</span>
				<span className='font-medium text-xs md:text-[18px] leading-[18px] md:leading-[27px] text-[rgba(255,255,255,0.9)]'>
                    Mins
				</span>
				<span className='font-medium text-[18px] leading-[27px] text-[rgba(255,255,255,0.9)]'>
                    :
				</span>
				<span className='font-medium text-sm leading-[21px] md:text-[28px] md:leading-[42px] text-white w-[32px] md:w-[37px] flex items-center justify-center'>{secs}</span>
				<span className='font-medium text-xs md:text-[18px] leading-[18px] md:leading-[27px] text-[rgba(255,255,255,0.9)]'>
                    Secs
				</span>
			</div>
		</section>
	);
};

export default OpenGovHeaderBanner;