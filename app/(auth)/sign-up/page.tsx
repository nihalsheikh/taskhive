"use client";

import { SignUpForm } from "@/components/forms";

const SignUp = () => {
	return (
		<main className="flex flex-row justify-between grid-col-2">
			{/* Sign-In Form */}
			<div className="w-full h-full">
				<SignUpForm />
			</div>

			{/* Some Image or Object */}
			<div className="bg-green-500 w-full h-full">Some Obj</div>
		</main>
	);
};

export default SignUp;
