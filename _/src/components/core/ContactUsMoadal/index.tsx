import Modal from '@components/common/Modal';
import React, { Fragment } from 'react';

const formClasses = {
	input:
		'shadow-lg border-b-[0.1rem] border-b-gray-300 px-2 py-1 rounded-[0.2rem] font-medium w-full',
	label: 'flex flex-col my-2 cursor-pointer'
};

const ContactUsModal = ({
	handleIsVisible,
	isVisible
}: Pick<Parameters<typeof Modal>['0'], 'handleIsVisible' | 'isVisible'>) => {
	return (
		<Modal
			handleIsVisible={handleIsVisible}
			isVisible={isVisible}
			containerElem={{
				className:
					'w-[40rem] max-w-[98%] text-black bg-zinc-900 text-zinc-100 pt-8 pb-4 px-5',
				style: {
					colorScheme: 'dark'
				}
			}}
		>
			<Fragment key='header'>
				<header
					className='flex flex-col items-start px-2'
					style={{
						textAlign: 'initial'
					}}
				>
					<h3 className='font-bold text-h3'>Contact Us</h3>
					<div className='py-1' />
					<p>
						UBSA transforms recurring revenue into up-front capital for growth
						without restrictive debt or dilution.
					</p>
				</header>
			</Fragment>
			<Fragment key='body'>
				<form className='font-medium py-2 px-4 text-[1.2rem]'>
					<div className='flex flex-col sm:flex-row'>
						<label
							htmlFor='firstName'
							className={`${formClasses.label} flex-1`}
						>
							<span>
								<small>First Name</small>
							</span>
							<input
								className={formClasses.input}
								type='text'
								name='firstName'
								id='firstName'
								required
							/>
						</label>
						<div className='px-1' />
						<label htmlFor='lastName' className={`${formClasses.label} flex-1`}>
							<span>
								<small>Last Name</small>
							</span>
							<input
								className={formClasses.input}
								type='text'
								name='lastName'
								id='lastName'
								required
							/>
						</label>
					</div>
					<label htmlFor='email' className={formClasses.label}>
						<span>
							<small>Email</small>
						</span>
						<input
							className={formClasses.input}
							type='email'
							name='email'
							id='email'
							required
						/>
					</label>
					<label htmlFor='message' className={formClasses.label}>
						<span>
							<small>Tell us more about your project:</small>
						</span>
						<textarea
							className={formClasses.input}
							name='message'
							id='message'
							cols={30}
							rows={5}
							required
						></textarea>
					</label>
					<div className='py-1' />
					<button
						onClick={(event) => event.preventDefault()}
						className='transition-all duration-300 rounded-sm px-4 py-3 bg-zinc-700 hover:brightness-90 focus:rounded-none'
					>
						Submit
					</button>
				</form>
			</Fragment>
		</Modal>
	);
};

export default ContactUsModal;
