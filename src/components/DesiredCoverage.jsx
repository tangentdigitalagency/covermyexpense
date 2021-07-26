import React, { Component } from "react";
import {Form, Button, Input, Progress, Select} from "antd";
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
        <Progress percent={12.5} status="active" showInfo={false} className="pbar"/>
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
                <Select size="large" name="desired_coverage" placeholder="Select Coverage">
                <Option value="5000" >$5,000</Option>
                <Option value="10000">$10,000</Option>
                <Option value="1500">$15,000</Option>
                <Option value="20000">$20,000</Option>
                <Option value="30000">$30,000</Option>
                <Option value="40000">$40,000</Option>
                <Option value="50000">$50,000</Option>
                <Option value="60000">$60,000</Option>
                <Option value="70000">$70,000</Option>
                <Option value="80000">$80,000</Option>
                <Option value="90000">$90,000</Option>
                <Option value="100000">$100,000</Option>
                </Select>
              </Form.Item>
            
              {/* <Link to="/step2">  */}
              <Form.Item>
        
               
                <Button type="primary" htmlType="submit" block size="large" 
                
                // onClick= {() => this.props.history.push("/step2")}
                 
                >
            
                
               Next  
                </Button>
              
               
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
