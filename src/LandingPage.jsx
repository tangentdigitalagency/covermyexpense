import { Button, Card, Col, Collapse, Layout, Row, Typography, Form,  Input } from 'antd';
import Grid from '@material-ui/core/Grid';

import logo from './Assets/cme.png';
// import ehthos from './Assets/ethos.png';
// import ladder from './Assets/ladder.svg';
// import tamer from './Assets/tamerica.png';
// import prud from './Assets/prudential.png';
import heroImg from './Assets/hands.png';
// import aig from './Assets/aig.png';
import all from './Assets/all.png'; 

import connectImg from './Assets/img/connection.png';
import whatImg from './Assets/img/car.jpeg';
import quote from './Assets/img/quote.png';
import canvas from './Assets/img/canvas.png';
import minutes from './Assets/img/2minutes.png';
import best from './Assets/img/best.png';
import budget from './Assets/img/budget.png';
import { ReactComponent as YourSvg } from './Assets/img/svg_2.svg';
import { ArrowRightOutlined, CheckOutlined, PlusOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';
import React from 'react';

function LandingPage(props) {
	const history = useHistory();
	const { Header, Footer, Content } = Layout;
	const { Panel } = Collapse;
	console.log(props);
	return (
		<div className='landing-page'>
			<Layout>
				<Header>
					<Row>
						<Col xs={{ span: 24 }} lg={{ span: 12 }}>
							<a>
								<img src={logo} width='181' alt='logo' />
							</a>
						</Col>
						<Col xs={{ span: 24 }} lg={{ span: 12 }} className='text-right'>
							<strong>Call For Free Quote</strong>
						</Col>
					</Row>
				</Header>
				<Content>
					<section className='section-one'>
						<Row>
							<Col span={24}>
								<div className='container-1'>
									<div className='block-left-hero'>
										<Row>
											<Col xs={{ span: 24 }} lg={{ span: 12 }}>
												<h1 className='hero_heading'>Burial Insurance At An Affordable Price
</h1>
												<p className='text-white para-white'>
												Here at Covermyexpense.com we are committed to providing all the information needed so you are confident to make an informed decision regarding your burial insurance policy. We work with multiple providers to make sure that you receive the right final expense insurance quotes for your needs and budget. If you ever have any questions, please do not hesitate to contact us. We’re here to help you and the whole family.



												</p>
						
												<Button
													onClick={() => {
														props.changeRoute();
														history.push('/step1');
													}}
													type='block '
													size='large'
													className='btn-large text-blue'>
													Start Your Free Quote <ArrowRightOutlined />
												</Button>
											</Col>
											<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
												<div className='block-right-hero'>
													<img src={heroImg} alt='heroImage' className='image-109' sizes='(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 1279px) 45vw, 570px' />
												</div>
											</Col>
										</Row>
									</div>
								</div>
							</Col>
						</Row>
					</section>
					<section className='section-two'>
						<div className='section-two-container'>
							<Row>
								<Col span={24}>
									<p className='cl01_title'>
										We are partnered with top rated companies
										<br />
									</p>
								</Col>
							</Row>
							<div className='section-two-img-container'>
							<img src={all} alt='logo1' className=' logosTop' />

							
							</div>
						</div>
					</section>
					<section className='container'>
						<Row>
							<Col span={24}>
								<h1 className='font-weight-bold ml-md-5'>Burial insurance</h1>
							</Col>
						</Row>
						<Row>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<p>
								You can’t predict the future. So, it’s good to plan ahead. Our Final Expense insurance plans will help provide a foundation for your family after you’re gone.
								</p>
								<p>
								Here at Covermyexpense.com we are committed to providing all the information needed so you are confident to make an informed decision regarding your burial insurance policy. We work with multiple providers to make sure that you receive the right final expense insurance quotes for your needs and budget. If you ever have any questions, please do not hesitate to contact us. We’re here to help you and the whole family.


								</p>
								<p>You’ll want to give strong consideration to the funding aspect of your burial arrangements. You will want to ask yourself if your current funding (insurance, savings, etc.) will be sufficient and available when that time comes? Will your present insurance be needed to settle other expenses that could include medical bills, estate taxes, etc.? Will your present insurance or savings keep pace with funeral inflation costs? If you answered no to any of these questions, then you might wish to think about additional insurance that is designed specifically for your final expenses. Burial insurance policies can be made in small amounts to help with your existing insurance or larger amounts to cover all burial and funeral costs.

</p>
								<Button
													onClick={() => {
														props.changeRoute();
														history.push('/step1');
													}}
													type='block '
													size='large'
													className='btn-large text-blue'>
													Start Your Free Quote <ArrowRightOutlined />
												</Button>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<div className='service-main-image business'></div>
							</Col>
						</Row>
					</section>
					
					<section className='container my-5'>
						<Row>
							<Col xs={{ span: 24 }} lg={{ span: 8 }}>
								<div className='container d-flex h-100'>
									<div className='justify-content-center align-self-center'>
										<h1>Why Us?</h1>
										
										<Row className='mt-1 '>
											<Col span={24}>
											<Button
													onClick={() => {
														props.changeRoute();
														history.push('/step1');
													}}
													type='block '
													size='large'
													className='btn-large text-blue'>
													Start Free Quote <ArrowRightOutlined />
												</Button>
											</Col>
										</Row>
									</div>
								</div>
							</Col>
							<Col xs={{ span: 24 }} lg={{ span: 16 }}>
								<Row>
									<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={budget} />}>
											<Meta title='Affordable Prices' description='no matter your budget we can find the policy right for you and your family.' />
										</Card>
									</Col>
									<Col xs={{ span: 24 }} lg={{ span: 12 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={minutes} />}>
											<Meta title='No Waiting Period' description='Full Coverage The First Day' />
										</Card>
									</Col>
								</Row>
								<Row className='mt-3'>
									<Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<img alt='example' src={best} />}>
											<Meta title='No Medical Exam' description='Simple Application - Free Quote—Apply in Minutes' />
										</Card>
									</Col>
									<Col xs={{ span: 24 }} lg={{ span: 12 }}>
										<Card hoverable className='w-75 shadow-sm' cover={<YourSvg />}>
											<Meta title='You have options' description='Getting a quote across multiple insurance companies empowers you to know what works best for you.' />
										</Card>
									</Col>
								</Row>
							</Col>
						</Row>
					</section>
					
					
					<section className='container mt-md-5'>
						<Row>
							<Col span={24} className='text-center'>
								<h1>What people say about us</h1>
							</Col>
						</Row>
						<Row className='mt-md-5'>
							{/* <Col xs={{ span: 24 }} lg={{ span: 12 }}>
								<img
									src={whatImg}
									width='723'
									sizes='(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 91vw, 723px'
									srcSet='https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-500.jpeg 500w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-1080.jpeg 1080w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%2520(1)-p-1600.jpeg 1600w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0836a4f1bff_Comprehensive-insurance%20(1).jpg 2000w'
									alt=''
									className='client-image-big w-100 rounded'
								/>
							</Col> */}
							{/* <Col xs={{ span: 24 }} lg={{ span: 11, offset: 1 }}> */}
								<img src={quote} alt='quote' width='21' className='quote' />
								<p className='quote-text-v1'>
									<em className='font-italic italic-text-4'>
									“I have never had such a great experience getting insurance quotes than I had using Quotehound.  Their form is super quick and simple.  As soon as I hit submit, they matched me with a great insurance agent named Sandy.  I had all the information and quotes I had to make the decision to switch my insurance.  Thank you Quotehound for the great connection!" <br/>
									</em>
								</p>
								
								<Row className='mt-1'>
									<Col span={24}>
									<Button
													onClick={() => {
														props.changeRoute();
														history.push('/step1');
													}}
													type='block '
													size='large'
													className='btn-large text-blue'>
												Start Your Free Quote <ArrowRightOutlined />
												</Button>
									</Col>
								</Row>
							{/* </Col> */}
						</Row>
					</section>

					<section className='trusted-companies pt-4'>
						<div className='container'>
							<Row className='py-5'>
								<Col span={24}>
									<h3 className='mx-auto text-center'>
										Trusted by some of leading <br />
										companies in the world
									</h3>
								</Col>
							</Row>

							<img src={all} alt='logo1' className=' logosTop' />

							<Row>			
							</Row>
						</div>
					</section>
				</Content>
				<Footer className='footer'>
					<div className='footer-container'>
						<div className='footer-top-wrap-2'>
							<h1 className='heading-16'>Cover My Expense</h1>
						</div>
						<div className='div-block-58'>
						<h3 className="h3">powered by Quotehound Inc 2021  </h3>

						
						<Grid container xs={12} align='center' style={{ justifyContent: 'center' }}>
		
					<Grid container xs={10} style={{ paddingBottom: '1rem', marginTop: '1rem' }}>
						<Grid container lg={5} xs={12}>
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
										Do Not Sell
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
					</div>
				</Footer>
			</Layout>
		</div>
	);
}

export default LandingPage;
