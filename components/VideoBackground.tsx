"use client";

import { VideoBackgroundProps } from "@/types";
import { useEffect, useRef } from "react";

export default function VideoBackground({
	src,
	poster,
	className,
	type = "video/webm",
	muted = true,
	loop = true,
	preload = "metadata",
}: VideoBackgroundProps) {
	const ref = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const video = ref.current;
		if (!video) return;

		video.muted = muted;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!video) return;
					if (entry.isIntersecting) {
						const playPromise = video.play();
						if (
							playPromise &&
							typeof playPromise.then === "function"
						) {
							playPromise.catch(() => {});
						}
					} else {
						video.pause();
						video.currentTime = 0;
					}
				});
			},
			{ threshold: 0.25 }
		);

		observer.observe(video);

		return () => {
			observer.disconnect();
		};
	}, [muted]);

	return (
		<div
			className={`absolute inset-0 z-0 overflow-hidden ${
				className ?? ""
			}`}
			aria-hidden="true"
		>
			<video
				ref={ref}
				loop={loop}
				muted={muted}
				playsInline
				preload={preload}
				poster={poster}
				role="presentation"
				// Center the video and oversize it so glow is balanced around edges.
				style={{
					position: "absolute",
					left: "56.2%",
					top: "46.5%",
					width: "180%", // <-- bigger than before
					height: "176%", // <-- bigger than before
					transform: "translate(-50%, -50%) translateZ(0)",
					objectFit: "cover",
				}}
			>
				<source src={src} type={type} />
				Your browser does not support this video.
			</video>
		</div>
	);
}
