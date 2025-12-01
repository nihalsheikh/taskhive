import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { footerLinks } from "@/constants";
import { envConf } from "@/env-conf/envConf";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Peerlist = (props: { className: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M12 0C2.667 0 0 2.667 0 12s2.673 12 12 12s12-2.667 12-12S21.327 0 12 0m8.892 20.894c-1.57 1.569-4.247 2.249-8.892 2.249s-7.322-.68-8.892-2.25C1.735 19.522 1.041 17.3.89 13.654A40 40 0 0 1 .857 12c0-1.162.043-2.201.13-3.13c.177-1.859.537-3.278 1.106-4.366c.284-.544.62-1.006 1.013-1.398s.854-.729 1.398-1.013C5.592 1.524 7.01 1.164 8.87.988C9.799.9 10.838.858 12 .858c4.645 0 7.322.68 8.892 2.248s2.25 4.246 2.25 8.894s-.681 7.325-2.25 8.894M20.538 3.46C19.064 1.986 16.51 1.357 12 1.357c-4.513 0-7.067.629-8.54 2.103C1.986 4.933 1.357 7.487 1.357 12c0 4.511.63 7.065 2.105 8.54C4.936 22.014 7.49 22.643 12 22.643s7.064-.629 8.538-2.103s2.105-4.029 2.105-8.54s-.63-7.065-2.105-8.54M14.25 16.49a6.1 6.1 0 0 1-2.442.59v2.706H10.45v.357H6.429V5.57h.357V4.214h5.676c3.565 0 6.467 2.81 6.467 6.262c0 2.852-1.981 5.26-4.68 6.013zm-1.788-8.728H10.45v5.428h2.011c1.532 0 2.802-1.2 2.802-2.714s-1.27-2.714-2.802-2.714zm.901 4.351c.117-.239.186-.502.186-.78c0-1.01-.855-1.857-1.945-1.857h-.296V8.62h1.154c1.09 0 1.945.847 1.945 1.857c0 .705-.422 1.323-1.044 1.637zm4.104 1.493q.064-.096.123-.194a5.7 5.7 0 0 0 .526-1.103a6 6 0 0 0 .11-.362q.032-.113.06-.227a6 6 0 0 0 .073-.41c.01-.068.025-.134.032-.203q.037-.31.038-.63c0-3.198-2.687-5.763-5.967-5.763H7.286v14.572h4.022v-3.048h1.154c1.43 0 2.747-.488 3.778-1.303a6 6 0 0 0 .46-.406l.1-.105q.16-.163.308-.337q.064-.08.126-.162q.123-.156.233-.319m-5.005 1.775H10.45v3.048H8.143V5.57h4.319c2.837 0 5.11 2.211 5.11 4.905s-2.273 4.905-5.11 4.905z"
		></path>
	</svg>
);

const Footer = () => {
	return (
		<div className="flex flex-col">
			<footer className="border-t">
				<div className="max-w-(--breakpoint-xl) mx-auto">
					<div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
						<div>
							{/* Logo */}
							<Link href="/">
								<div className="relative h-8 md:h-10 flex items-center">
									<span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-zinc-900 dark:text-zinc-100">
										TASKHIVE
									</span>
									{/* Decorative circuit dot - Neutral Color */}
									<div className="w-1.5 h-1.5 rounded-full bg-zinc-500 dark:bg-zinc-400 ml-1 mt-3"></div>
								</div>
							</Link>

							<ul className="mt-6 flex items-center gap-4 flex-wrap">
								{footerLinks.map(({ title, href }) => (
									<li key={title}>
										<Link
											href={href}
											className="text-muted-foreground hover:text-foreground"
										>
											{title}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Subscribe Newsletter */}
						<div className="max-w-xs w-full">
							<h6 className="font-medium">Stay up to date</h6>
							<form className="mt-6 flex items-center gap-2">
								<Input
									type="email"
									placeholder="Enter your email"
								/>
								<Button>Subscribe</Button>
							</form>
						</div>
					</div>
					<Separator />
					<div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
						{/* Copyright */}
						<span className="text-muted-foreground">
							&copy; {new Date().getFullYear()}{" "}
							<Link href="/" target="_blank">
								Taskhive
							</Link>
							. All rights reserved
						</span>

						<div className="flex items-center gap-5 text-muted-foreground">
							<Link href={envConf.twitterUrl} target="_blank">
								<TwitterIcon className="h-5 w-5" />
							</Link>
							<Link href={envConf.linkedInUrl} target="_blank">
								<LinkedinIcon className="h-5 w-5" />
							</Link>
							<Link href={envConf.peerlistUrl} target="_blank">
								<Peerlist className="h-5 w-5" />
							</Link>
							<Link href={envConf.githubUrl} target="_blank">
								<GithubIcon className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
