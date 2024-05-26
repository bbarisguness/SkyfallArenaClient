'use client'

import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { useEffect, useState } from "react"
import Link from 'next/link'

export default function MainSlider() {
	let mainSliderPhotos, root, activeIndex = 0
	const [activePhotoIndex, setActivePhotoIndex] = useState(0)

	const images = [
		"mainslide-01.jpg",
		"mainslide-03.jpg",
		"mainslide-04.jpg",
	];

	const hideVipTextMask = () => {
		document.getElementsByClassName('mainSlider-textmask')[0].style.display = "none"
		document.getElementsByClassName('mainSlider-textmask')[0].style.opacity = 0
	}

	const showVipTextMask = () => {
		if (document.getElementsByClassName('mainSlider-textmask').length == 1) {
			document.getElementsByClassName('mainSlider-textmask')[0].style.display = "block"

			setTimeout(() => {
				document.getElementsByClassName('mainSlider-textmask')[0].style.opacity = 1
			}, 1);

		}
	}

	const resetSlider = () => {
		root.style.setProperty("--mainSlider-backgroundColor", "#38226f")
		root.style.setProperty("--mainSlider-opacity", "0.8")

		Object.keys(mainSliderPhotos).forEach(function (key, index) {
			mainSliderPhotos[key].style.display = "none"
			mainSliderPhotos[key].classList.remove("active")
		});
	}

	const changeMainSlider = () => {
		setActivePhotoIndex(activeIndex)
		resetSlider()

		mainSliderPhotos[activeIndex].style.display = "block"

		setTimeout(() => {
			root.style.setProperty("--mainSlider-backgroundColor", "#000000")
			root.style.setProperty("--mainSlider-opacity", "0.6")
			mainSliderPhotos[activeIndex].classList.add("active")
		}, 1)

		document.getElementsByClassName('mainSlider-textmask')[0].style.display = "block"

		hideVipTextMask()
		setTimeout(() => {
			showVipTextMask()
		}, 1000);
	}

	useEffect(() => {
		mainSliderPhotos = document.getElementsByClassName("img--holder")
		root = document.querySelector(":root"); //grabbing the root element

		document.getElementById("js-mainSlider").children[0].classList.add(["slick-list"], ["draggable"])
		document.body.classList.add("load-mainslider", "loaded")

		setTimeout(() => {
			document.getElementsByClassName("loading-content")[0]?.classList.add("disable")
		}, 500)

		changeMainSlider()

		const intervalId = setInterval(() => {
			activeIndex++
			if (activeIndex == mainSliderPhotos.length) {
				activeIndex = 0
			}
			changeMainSlider()
		}, 5000)

		return () => {
			document.body.classList.remove("load-mainslider");
			clearInterval(intervalId);
		}
	}, [])

	return (
		<div className="container-indent no-margin mainSlider-wrapper">


			<div className="loading-content">
				<div className="loading-dots">
					<Link href="/" className="tt-logo">
						<img src="/images/skyfall-logo.png" alt="" />
					</Link>
				</div>
			</div>






			<div id="js-mainSlider" className="mainSlider slick-initialized slick-slider">
				<div className="slick-list draggable">
					<div className="slide">
						{/* <div className="img--holder" style={{ backgroundImage: 'url(images/mainslide-01.jpg)', display: 'none' }}></div>
						<div className="img--holder" style={{ backgroundImage: 'url(images/mainslide-03.jpg)', display: 'none' }}></div>
						<div className="img--holder" style={{ backgroundImage: 'url(images/mainslide-04.jpg)', display: 'none' }}></div> */}
						{
							images.map((item, index) => (
								<div key={'sliderImage' + index + 1} className="img--holder" style={{ backgroundImage: `url(images/${item})`, display: 'none' }}></div>
							))
						}
						<div className="slide-content">
							<div className="mainSlider-textmask" style={{ backgroundImage: `url(images/${images[activePhotoIndex]})` }}>VIP</div>
							<div className="container text-center js-rotation" data-animation="fadeInUpSm" data-animation-delay="0s">
								<div className="tt-title-01">The Perfect Nightlife</div>
								<div className="tt-title-02">FEEL THE NIGHT HERE<br />With Friends</div>
								<div className="tt-row-btn">
									<Link className="tt-btn" href="/events"><span>view tickets</span></Link>
									{/* <a className="tt-btn js-video-popup" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"><span>virtual tour</span></a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div id="js-mainSlider" className="mainSlider slick-initialized slick-slider">
				<Zoom scale={1.2} arrows={false} transitionDuration={2000} easing='ease-out' duration={4000}>
					{images.map((each, index) => (
						<div key={index} className='img--holder'>
							<img style={{ width: "100%", height: "100%", backgroundSize: "cover" }} alt="Slide Image" src={`images/${each}`} />
						</div>
					))}
				</Zoom>
			</div> */}

		</div>
	)
}