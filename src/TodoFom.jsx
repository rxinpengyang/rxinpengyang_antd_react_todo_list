import React from "react";
import {Button, Form, Input} from "antd";

class TodoFom extends React.Component {
    formRef = React.createRef();

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onFinish = (values) => {
        const {todoInput} = values;
        this.props.onSubmit(todoInput)
        this.onReset()
    }

    render() {
        return (
            <div>
                <Form ref={this.formRef} onFinish={this.onFinish}>
                    <Form.Item name="todoInput">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add todo
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.props.onClearAll}>
                            Clear all
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default TodoFom;
