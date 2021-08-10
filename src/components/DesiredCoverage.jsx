import React, { Component } from "react";
import {Form, Button, Input, Progress, Select, Row, Col} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link} from "react-router-dom"; 
import {Redirect} from "react-router-dom"; 
import {withRouter } from "react-router-dom";
const {Option} = Select;

class DesiredCoverage extends Component {
 
  onFinish = (values) => {
    // this.props.nextStep();
    this.props.setDesiredCoverage(values.desired_coverage);
    console.log("Success:", values);
    this.props.history.push("/step2")
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // nextpage =()=>(
  //   // <Redirect to="/step2"/>
  //   this.props.history.push("/step2"),
  //   console.log(`netx page`,this.props)
  // )
  render() {
   
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
        <Progress percent={20} status="active" showInfo={true} className="pbar"/>
        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
        <div className="d-flex" style={{ minHeight: "60vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
            style={{ paddingTop:"0px" }}
          >
            <Form
              name="desired_Coverage"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                desired_coverage: this.props.desired_coverage,
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3> What's your desired coverage amount?</h3>
              <br />
              <Form.Item
                name="desired_coverage"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select an option ",
                  }
                ]}
              >

                <Row> 
                  <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="5000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$5,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="10000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$10,000</Button>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="15000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$15,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="20000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$20,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="30000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$30,000</Button>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue= "40000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$40,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="50000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$50,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="60000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$60,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="70000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$70,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="80000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$80,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="90000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$90,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage" defaultValue="100000" className="chooseButton" htmlType="submit" onClick={() => this.props.history.push("/step2")}>$100,000</Button>

                  </Col>
                </Row>


              </Form.Item>
            
              {/* <Link to="/step2">  */}
              <Form.Item>
        
               
                {/* <Button type="primary" htmlType="submit" block size="large" 
                
                // onClick= {() => this.props.history.push("/step2")}
                 
                >
            
                
               Next  
                </Button> */}
              
               
              </Form.Item>
            {/* </Link> */}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DesiredCoverage) ;
