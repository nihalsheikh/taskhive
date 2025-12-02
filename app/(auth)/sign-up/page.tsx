"use client";

import { SignUpForm } from "@/components/forms";

const SignUp = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
