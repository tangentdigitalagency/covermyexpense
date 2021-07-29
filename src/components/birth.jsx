import React, { Component } from "react";
import { Form,  Button,Input, Progress, Select, Row, Col} from "antd";
import CommonComponents from "./CommonComponents"; 
import {Link,withRouter} from "react-router-dom"; 
import { ArrowLeftOutlined } from '@ant-design/icons';
import "./date.css";
const {Option} = Select;
class Birth extends Component {
  onFinish = (values) => {
    // this.props.nextStep();
    // this.props.setMonth(values.month);
    // this.props.setDay(values.day);
    // this.props.setYear(values.year)
    

    this.props.setBirth(values.month + values.day + '/' + values.year)
    console.log("Success:", this.props.setBirth);
    this.props.history.push("/step4")
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  

  render() {
    return (
      <div className="card shadow-lg" style={{ borderRadius: "25px" }}>
                <Progress percent={60} status="active" showInfo={true} className="pbar"/>

        <CommonComponents
          currentStep={this.props.currentStep}
          totalSteps={this.props.totalSteps}
          previousStep={this.props.previousStep}
        />
         <div className="p-2">
           <Link to="/step2" >
                    <Button type="primary" shape="circle"  >
                        <ArrowLeftOutlined className="anticon" />
                    </Button>
                    </Link>
                </div>
        <div className="d-flex" style={{ minHeight: "60vh" }}>
          <div
            className="card-body d-xl-flex justify-content-center align-items-center"
            align="center"
            style={{ paddingTop:"0px" }}
          >
            <Form
              name="basic"
              className="mywidth"
              onFinish={this.onFinish}
              initialValues={{
                month: this.props.month, 
                day: this.props.day,
                year: this.props.year
              }}
              onFinishFailed={this.onFinishFailed}
            >
              <h3>What is your Date of birth?</h3>
              <br />
              <Row gutter={[16, 16]}>
    <Col xs={24} xl={8}>
    <Form.Item
                name="month"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Select Month",
                  }
                ]}
              >
                <Select size="large" name="month" placeholder="Select Month">
                  <Option value="01/">January</Option>
                  <Option value="02/">February</Option>
                  <Option value="03/">March</Option>
                  <Option value="04/">April</Option>
                  <Option value="05/">May</Option>
                  <Option value="06/">June</Option>
                  <Option value="07/">July</Option>
                  <Option value="08/">August</Option>
                  <Option value="09/">September</Option>
                  <Option value="10/">October</Option>
                  <Option value="11/">November</Option>
                  <Option value="12/">December</Option>
                  
                </Select>
              </Form.Item>
    </Col>
    <Col xs={24} xl={8}>
    <Form.Item
                name="day"
                id="day"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please Enter Day",
                  },
                  {
                    min: 2, message: 'Please Enter a number from 01-31',
                    max: 2,
                  },
                  
                ]}
              >
                <Input
                  size="large"
                  placeholder="Date"
                  type="number"
                  min="0"
                  max="31"
                />
              </Form.Item>

    
    </Col>
    <Col xs={24} xl={8}>
  
              <Form.Item
                name="year"
                id="year"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please Enter Birth Year'
                  },
                  {
                    max: 4, message: 'Max Length Of Is 5 Characters'
                  },
                  
                ]}
              >
                <Input
                  size="large"
                  placeholder="Year"
                  type="number"
                  min="1900"
                />
              </Form.Item>
    </Col>
  </Row>
              {/* <Link to="/step4"> */}
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
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

export default withRouter(Birth);
