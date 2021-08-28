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
    // this.props.setDesiredCoverage(values.desired_coverage);
    // console.log("Success:", values);
    // this.props.history.push("/step2")

    var dc = values.target.dataset.value;

    console.log(values.target.value);

    this.props.setDesiredCoverage(values.target.dataset.value);

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
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="5000" data-value="5000" value={"5000"} onClick={(values) => this.onFinish(values) }>$5,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="10000" data-value="10000" value={"10000"} onClick={(values) => this.onFinish(values) }>$10,000</Button>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="15000" data-value="15000" value={"15000"} onClick={(values) => this.onFinish(values) }>$15,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="20000" data-value="20000" value={"20000"} onClick={(values) => this.onFinish(values) }>$20,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="30000" data-value="30000" value={"30000"} onClick={(values) => this.onFinish(values) }>$30,000</Button>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="40000" data-value="40000" value={"40000"} onClick={(values) => this.onFinish(values) }>$40,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="50000" data-value="50000" value={"50000"} onClick={(values) => this.onFinish(values) }>$50,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="60000" data-value="60000" value={"60000"} onClick={(values) => this.onFinish(values) }>$60,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="70000" data-value="70000" value={"70000"} onClick={(values) => this.onFinish(values) }>$70,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="80000" data-value="80000" value={"80000"} onClick={(values) => this.onFinish(values) }>$80,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="90000" data-value="90000" value={"90000"} onClick={(values) => this.onFinish(values) }>$90,000</Button>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Button size="large" name="desired_coverage"  className="chooseButton"  id="100000" data-value="100000" value={"100000"} onClick={(values) => this.onFinish(values) }>$100,000</Button>

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
