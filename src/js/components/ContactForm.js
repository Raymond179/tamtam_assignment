import React from 'react';

export default class ContactForm extends React.Component {
	constructor() {
		super();
		this.state = {
			validation: {
				email: false,
				firstname: false,
				lastname: false,
				message: false
			},
			message: {
				show: false,
				text: '',
				type: 'error'
			},
			error: {
				email: false,
				firstname: false,
				lastname: false,
				message: false
			},
			data: {
				email: '',
				firstname: '',
				lastname: '',
				message: ''
			}
		}
	}
	checkField(e) {
		const input = e.target.value;
		const name = e.target.name;

		if(name == 'email') {
			// Source: https://stackoverflow.com/questions/46155/how-can-you-validate-an-email-address-in-javascript
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			if(re.test(input)) {
				this.validation(true, e);
			} else {
				this.validation(false, e);
			}
		} else {
			if(input) {
				this.validation(true, e);
			} else {
				this.validation(false, e);
			}
		}
	}
	validation(valid, e) {
		const parent = e.target.parentElement;
		const name = e.target.name;
		let validation = this.state.validation;

		if(valid) {
			parent.classList.add('valid');
			validation[name] = true;
			this.setState({validation: validation});
		} else {
			parent.classList.remove('valid');
			validation[name] = false;
			this.setState({validation: validation});
		}
	}
	submit(e) {
		e.preventDefault();
		const validation = this.state.validation;
		if(this.checkIfValid(validation)) {
			// Success
			this.setState({message: {
				text: 'Thank you, we have received your message.',
				type: 'success',
				show: true
			}});

			this.refs.form.classList.add('hide');
		} else {
			// Error(s)
			this.setState({
				message: {
					text: 'Please complete the form and try again.',
					type: 'error',
					show: true
				},
				data: {
					email: this.refs.email.value,
					firstname: this.refs.firstname.value,
					lastname: this.refs.lastname.value,
					message: this.refs.message.value
				}
			});

			this.setState({error: {
				email: !this.state.validation.email,
				firstname: !this.state.validation.firstname,
				lastname: !this.state.validation.lastname,
				message: !this.state.validation.message,
			}});
		}
	}
	checkIfValid(validation) {
		for(const o in validation)
          if(!validation[o]) return false;
      	return true;
	}
	render() {
		return (
			<section className="contact-form">
				<div className="padding wrapper-small">
					<h1> We would love to hear from you </h1>
					{this.state.message.show ? 
						<div className="message">
							<div className="message-icon">
								<div className={'icon '+this.state.message.type}></div>
							</div>
							<span class="message-text"> {this.state.message.text} </span>
						</div>
					: null }
					
					<form onSubmit={this.submit.bind(this)} ref="form">
						<div className="form-container">
							<div className="field half">
								<input onChange={this.checkField.bind(this)} name="firstname" ref="firstname" type="text" placeholder="First name" />
								{this.state.error.firstname ? 
									<div className="error-popup">
										<div className="triangle"></div>
										<span> We need your first name. </span>
									</div>
								: null }
							</div>
							<div className="field half">
								<input onChange={this.checkField.bind(this)} name="lastname" ref="lastname" type="text" placeholder="Last name" />
								{this.state.error.lastname ? 
									<div className="error-popup">
										<div className="triangle"></div>
										<span> We need your last name. </span>
									</div>
								: null }
							</div>
							<div className="field half">
								<input onChange={this.checkField.bind(this)} name="email" ref="email" type="text" placeholder="Your e-mail address" />
								{this.state.error.email ? 
									<div className="error-popup">
										<div className="triangle"></div>
										<span> Please use a valid e-mail address. </span>
									</div>
								: null }
							</div>
							<div className="field half">
								<input onChange={this.checkField.bind(this)} name="phonenumber" ref="phonenumber" type="text" placeholder="Your phone number (optional)" />
							</div>
							<div className="field full">
								<textarea onChange={this.checkField.bind(this)} name="message" ref="message" placeholder="Your message..."></textarea>
								{this.state.error.message ? 
									<div className="error-popup">
										<div className="triangle"></div>
										<span> Sorry, your message can't be empty. </span>
									</div>
								: null }
							</div>
						</div>
						<input className="submit-button" type="submit" value="Send" />
					</form>
				</div>
			</section>
		);
	}
}