"use client";

import { SignInForm } from "@/components/forms";

const SignIn = () => {
	return (
		<main className="grid grid-cols-2 gap-4">
			{/* Sign-In Form */}
			<div className="w-full h-full">
				<SignInForm />
			</div>

			{/* Some Image or Object */}
			<div className="bg-green-500 w-full h-full">Some Obj</div>
		</main>
	);
};

export default SignIn;
