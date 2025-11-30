"use client";

import { GitHub, Google } from "@/components/buttons/oauth";
import { Button, Form, Input, Link } from "@heroui/react";

import { useState } from "react";

const SignIn = () => {
	const [password, setPassword] = useState("");
	const [submitted, setSubmitted] = useState(null);
	const [errors, setErrors] = useState({});

	const getPasswordError = (value) => {
		if (value.length < 4) {
			return "Password must be 4 characters or more";
		}
		if ((value.match(/[A-Z]/g) || []).length < 1) {
			return "Password needs at least 1 uppercase letter";
		}
		if ((value.match(/[^a-z]/gi) || []).length < 1) {
			return "Password needs at least 1 symbol";
		}

		return null;
	};

	return (
		<section className="px-4 py-4 m-8 flex flex-row justify-between grid-col-2">
			{/* Sign-In Form */}
			<div className="w-full h-full mx-auto p-4">
				<div className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
					<Form
						action=""
						className="flex flex-col bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
					>
						<div className="p-8 pb-6">
							<div>
								<h1 className="mb-1 mt-4 text-xl font-semibold">
									Sign In to Taskhive
								</h1>
								<p className="text-sm">
									Welcome back! Sign in to continue
								</p>
							</div>

							<div className="mt-6 grid grid-cols-2 gap-3">
								<Google />
								<GitHub />
							</div>

							<hr className="my-4 border-dashed" />

							<div className="space-y-6">
								<div className="space-y-2">
									<Input
										isRequired
										errorMessage={({
											validationDetails,
										}) => {
											if (
												validationDetails.valueMissing
											) {
												return "Please enter your email";
											}
											if (
												validationDetails.typeMismatch
											) {
												return "Please enter a valid email address";
											}
										}}
										label="Email"
										labelPlacement="outside"
										name="email"
										placeholder="Enter your email"
										type="email"
									/>
								</div>

								<div className="space-y-0.5">
									<div className="flex items-center justify-between">
										<Button
											asChild
											variant="flat"
											size="sm"
										>
											<Link
												href="#"
												className="link intent-info variant-ghost text-sm"
											>
												Forgot your Password ?
											</Link>
										</Button>
									</div>
									<Input
										isRequired
										errorMessage={getPasswordError(
											password
										)}
										isInvalid={
											getPasswordError(password) !== null
										}
										label="Password"
										labelPlacement="outside"
										name="password"
										placeholder="Enter your password"
										type="password"
										value={password}
										onValueChange={setPassword}
									/>
								</div>

								<Button className="w-full" variant="flat">
									Sign In
								</Button>
							</div>
						</div>

						<div className="bg-muted rounded-(--radius) border p-3">
							<p className="text-accent-foreground text-center text-sm">
								Don&apos;t have an account ?
								<Button asChild variant="flat" className="px-2">
									<Link href="sign-up">Create account</Link>
								</Button>
							</p>
						</div>
					</Form>
				</div>
			</div>

			{/* Some Image or Object */}
			<div className="bg-green-500 w-full h-full mx-auto p-4">
				Some Obj
			</div>
		</section>
	);
};

export default SignIn;
