"use client";
import { Col, Flex, Row, Typography } from "antd";
import { FC } from "react";

export interface IDoc {}

const Doc: FC<IDoc> = () => {
    return (
        <section>
            <Row className="!w-full" gutter={24} justify={"center"}>
                <Col className="pb-8" span={20}>
                    <Flex align="center" justify="start">
                        <Typography.Title
                            editable={{
                                tooltip: "click to edit text",
                                triggerType: ["text"],
                            }}
                            level={2}
                        >
                            Make Document
                        </Typography.Title>
                    </Flex>
                    <Flex align="center" justify="center">
                        <div className="!h-[40vh] w-full rounded-lg bg-gray-100"></div>
                    </Flex>
                </Col>
                <Col className="pb-8" span={24}></Col>
            </Row>
        </section>
    );
};

export default Doc;
