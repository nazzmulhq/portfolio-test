"use client";

import Api from "@src/lib/api";
import { LOGIN_ENDPOINT } from "@src/lib/endpoint";
import { Button, Card, Col, Flex, Form, Input, message, Row } from "antd";
import Cookies from "js-cookie";
import { FC, useState } from "react";

export interface ILogin {}

const Login: FC<ILogin> = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            setLoading(true);
            const response = await Api.post(LOGIN_ENDPOINT, values, false);

            if (response.token && response.user) {
                Cookies.set("token", response.token, {
                    expires: 1,
                });
                Cookies.set("user", JSON.stringify(response.user), {
                    expires: 1,
                });
                form.resetFields();
                message.success("Login successful");
                window.location.href = "/";
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
            message.error("Invalid credentials");
        }
    };

    return (
        <Flex align="center" className="h-screen w-screen" justify="center">
            <Card className="w-1/3 " title="User Login">
                <Form
                    autoComplete="off"
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your email!",
                                    },
                                ]}
                            >
                                <Input type="email" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    loading={loading}
                                    type="primary"
                                >
                                    Login
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Flex>
    );
};

export default Login;
