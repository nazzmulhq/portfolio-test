import { Card, Col, Row } from "antd";
import { FC } from "react";
import Doc from "./doc";
import DocView from "./doc/DocView";

export interface IAdmin {}

const Admin: FC<IAdmin> = () => {
    return (
        <section className="flex justify-center p-8">
            <Row className="!w-full" gutter={24}>
                <Col className="pb-8" span={24}>
                    <Card className=" shadow-md" title="Admin">
                        <p>Admin1</p>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className=" shadow-md" title="Make Document">
                        <Doc />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className="shadow-md" title="Preview Document">
                        <DocView />
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default Admin;
