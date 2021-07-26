import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';
import Grid from '@material-ui/core/Grid';
// @ts-ignore
import Logo from './Assets/logoq.png';
// @ts-ignore
import { Button, Typography, Progress } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';


import DesiredCoverage from './components/DesiredCoverage';
import Gender from './components/gender';
import Birth from './components/birth';
import Living from './components/living';
import Info from './components/info';
import ThankYou from './components/final.jsx';
import LandingPage from './LandingPage';

class App extends Component {
	state = {
		route: '/',
		routes: ['/step1', '/step2', '/step3', '/step4', '/step5', '/thank-you'],
		postData: {
			//extra entries
			lp_campaign_id: '60ec904883e96',
			lp_campaign_key: 'HdnykrcQ76bVq8BtWmFK',
			lp_s1: '12',
			lp_s2: '13',
			landing_Page: 'covermyexpense.com',
			TCPA_Consent: 'Yes',
			TCPA_Language:
				'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
			trusted_form_cert_id: '',
			jornaya_lead_id: '',
			// Redirect_URL: "",
			IP_Address: '',
			user_agent: navigator.userAgent,
			//s1 form fields
			desired_coverage: '',
			//S2 form fields
			gender: '',
			dob: '',
			address: '',
			city: '',
			state: '',
			zip_code: '',
			first_name: '',
			last_name: '',
			email_address	: '',
			phone_home: ''
		},
	};

	copyValuesToPostData2 = () => {
		var tempArray = {
			email_address	: this.state.postData.email_address,
			phone_home: this.state.postData.phone_home,
			address: this.state.postData.address,
			zip: this.state.postData.zip_code,
		};
		this.setState({ postData2: tempArray });
		window.MediaAlphaExchange = {
			data: {
				zip: '98052',
			},
			placement_id: '4yclnD1Pz-JicFFmiW0DhV7a86VXHw',
			sub_1: 'test sub id',
			type: 'ad_unit',
			version: 17,
		};
		window.MediaAlphaExchange__load('target');
		return this.state.postData2;
	};
	// componentDidMount() {
	// 	if (this.state.first_name === '' || this.state.last_name === '') {
	// 		this.props.history.push('/calculate');
	// 	}
	// 	if (window.location.pathname !== '/') {
	// 		this.setState({ route: '' });
	// 	}
	// 	console.log(this.state);
	// 	window.addEventListener('popstate', (event) => {
	// 		console.log(event);
	// 		if (window.location.pathname === '/') {
	// 			this.props.history.push('/');
	// 			this.setState({ route: '/' });
	// 		}
	// 	});
	// }



	changeRoute = () => {
		this.setState({
			route: '',
		});
	};

	render() {
		// console.log(this.props);
		return this.state.route === '/' && this.state.routes.indexOf(window.location.pathname) === -1 ? (
			<Route exact path='/' render={(props) => <LandingPage changeRoute={this.changeRoute} {...props} />} />
		) : (
			<div
				className='container-fluid'
				style={{
					minHeight: '100vh',
					backgroundColor: '#f7f7f7',
					overflow: 'hidden',
				}}>
				<header className='navbar navbar-expand flex-column flex-md-row bd-navbar'>
					<div className='container'>
						<img
							// @ts-ignore
							src={require('./Assets/logo.png')}
							className='m-4'
							width='200px'
							alt=''
						/>
						<ul className='nav nav-fill '>
							<li className='nav-item'>
								<Button
									type='primary'
									size='middle'
									icon={
										<PhoneOutlined
											// @ts-ignore
											rotate='90'
										/>
									}
									href={'tel:+18554344762'}>
									(855) 434-4762
								</Button>
							</li>
						</ul>
					</div>
				</header>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<Switch>
								<Route exact path='/step1'>
									<DesiredCoverage
										props={this.props}
										setDesiredCoverage={this.state.postData.desired_coverage}
										setDesiredCoverage={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													desired_coverage: v,
												},
											});
										}}
									/>
								</Route>

								<Route path='/step2'>
									<Gender
										chooseGender={this.state.postData.gender}
										chooseGender={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													gender: v,
												},
											});
										}}
									/>
								</Route>
								<Route path='/step3'>
									<Birth
										dob={this.state.postData.dob}
										setBirth={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													dob: v,
												},
											});
										}}
									/>
								</Route>
								<Route path='/step4'>

									<Living
										address={this.state.postData.address}
										city={this.state.postData.city}
										zip_code={this.state.postData.zip_code}
										state={this.state.postData.state}
										setAddress={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													address: v,
												},
											});
										}}
										setCity={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													city: v,
												},
											});
										}}
										
										setState={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													state: v,
												}
											});
										}}

										setZip={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													zip_code: v,
												}
											});
										}}

									/>
								</Route>
								<Route path='/step5'>
									<Info 
										first_name={this.state.postData.first_name}
										last_name={this.state.postData.last_name}
										email={this.state.postData.email_address}
										phone={this.state.postData.phone_home}

										setFName={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													first_name: v,
												},
											});
										}}
										setLName={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													last_name: v,
												},
											});
										}}
										setEmail={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													email_address: v,
												},
											});
										}}
										setPhone={(v) => {
											this.setState({
												postData: {
													...this.state.postData,
													phone_home: v,
												},
											});
										}}
										
									/>
								</Route>
								
								<Route path='/thank-you'>
									<ThankYou postData2={this.state.postData} />
								</Route>
							</Switch>

							{/* </StepWizard> */}
						</div>
					</div>
				</div>

				<Grid container xs={12} align='center' style={{ justifyContent: 'center' }}>
					<Grid container xs={8} style={{ justifyContent: 'center' }}>
						<Grid item xs={12}>
							<Typography style={{ fontWeight: 700, lineHeight: 1.5 }}>Providers Include:</Typography>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '1rem' }}>
							<img
								width='80%'
								height='auto'
								object-fit='fit'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/1.png')}
							/>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '1rem' }}>
							<img
								width='80%'
								height='auto'
								object-fit='fit'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/2.png')}
							/>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '1rem' }}>
							<img
								width='80%'
								height='auto'
								object-fit='fit'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/3.png')}
							/>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '0rem' }}>
							<img
								width='80%'
								height='auto'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/4.png')}
							/>
						</Grid>
						<Grid item lg={2} xs={12} style={{ marginTop: '1rem' }}>
							<img
								width='80%'
								height='auto'
								object-fit='fit'
								alt='missing'
								// @ts-ignore
								src={require('./Assets/5.png')}
							/>
						</Grid>
					</Grid>
					<Grid container xs={10} style={{ paddingBottom: '1rem', marginTop: '1rem' }}>
						<Grid item lg={3} xs={12} style={{ alignSelf: 'flex-end' }}>
							<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>2021 Quotehound</Typography>
						</Grid>
						<Grid item lg={6} xs={false} />
						<Grid container lg={3} xs={12}>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography
									style={{
										fontSize: '15px',
										color: 'rgb(166, 166, 166)',
										fontWeight: 600,
									}}>
									<a
										href='https://quotehound.com/'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Visit Us
									</a>
								</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography style={{ fontSize: '15px', color: 'rgb(166, 166, 166)' }}>
									<a
										href='https://quotehound.com/privacy-policy'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Privacy Policy
									</a>
								</Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{ alignSelf: 'center', marginTop: '1rem' }}>
								<Typography
									style={{
										fontSize: '15px',
										color: 'rgb(166, 166, 166)',
										fontWeight: 600,
									}}>
									<a
										href='https://quotehound.com/terms-conditions'
										// @ts-ignore
										style={{ color: 'rgb(166,166,166)', fontWeight: '400' }}>
										Terms & Conditions
									</a>
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(App);
