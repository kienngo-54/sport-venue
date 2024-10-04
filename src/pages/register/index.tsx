import React, { useState } from "react";
import {
  Button,
  Col,
  Divider,
  Flex,
  Form,
  FormProps,
  Image,
  Input,
  Row,
  Typography,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../../constants/images";
import ROUTE from "../../constants/routes";
import { useStyle } from "../../themes/baseStyle";
import { apiRegister } from "../../apis/auth";
import { toast } from "react-toastify";

type FieldType = {
  email: string;
  password: string;
  fullName: string;
  confirmPassword?: string;
};

function RegisterPage() {
  const { styles } = useStyle();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setIsLoading(true);
    const result = await apiRegister({
      body: {
        username: values.fullName,
        email: values.email,
        password: values.password,
      },
      successHandler: {
        callBack(data) {
          toast.success("Đăng ký thành công!");
          navigate(ROUTE.LOGIN);
        },
      },
    });

    setIsLoading(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row style={{ height: "100vh", width: "100vw" }}>
      <Col
        className="gutter-row"
        span={9}
        style={{ height: "100%", backgroundColor: "#F9FAFB" }}
      >
        <Flex
          vertical
          justify="center"
          align="center"
          style={{ height: "100%" }}
        >
          <Image
            preview={false}
            src={IMAGES.full_logo_vertical}
            alt="Sport venue"
            style={{ marginBottom: 24 }}
          />
          <Typography.Title level={2} style={{ marginBottom: 40 }}>
            Đăng ký
          </Typography.Title>
          <Form
            layout="vertical"
            labelCol={{ offset: 8 }}
            style={{ width: 360 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item<FieldType>
              label="Họ tên"
              name="fullName"
              style={{ marginBottom: 8 }}
              rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
            >
              <Input className="app-input" placeholder="Nhập họ tên của bạn" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Địa chỉ Email"
              name="email"
              style={{ marginBottom: 8 }}
              rules={[
                { required: true, message: "Vui lòng nhập Email" },
                { type: "email", message: "Định dạng Email không đúng" },
              ]}
            >
              <Input className="app-input" placeholder="Nhập địa chỉ Email" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Mật khẩu"
              name="password"
              style={{ marginBottom: 8 }}
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            >
              <Input.Password
                className="app-input"
                placeholder="Nhập mật khẩu"
              />
            </Form.Item>
            <Form.Item<FieldType>
              label="Xác nhận mật khẩu"
              name="confirmPassword"
              style={{ marginBottom: 24 }}
              rules={[
                { required: true, message: "Vui lòng xác nhận lại mật khẩu" },
              ]}
            >
              <Input.Password
                className="app-input"
                placeholder="Xác nhận mật khẩu"
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: 8 }}>
              <Button
                type="primary"
                htmlType="submit"
                block
                className={styles.linearGradientButton}
                style={{ fontWeight: 600 }}
              >
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
          <Flex justify="flex-end" gap={8} style={{ marginTop: 20 }}>
            <Typography.Paragraph className={styles.textBodySecondary}>
              Bạn đã có tài khoản?
            </Typography.Paragraph>
            <Link to={ROUTE.LOGIN}>
              <Typography className={styles.textLink}>Đăng nhập</Typography>
            </Link>
          </Flex>
          <Flex
            justify="flex-end"
            gap={8}
            align="center"
            style={{ marginTop: 40 }}
          >
            <Typography.Paragraph
              className={styles.textCaptionSecondary}
              style={{ marginBottom: 0 }}
            >
              Chính sách bảo mật
            </Typography.Paragraph>
            <Divider type="vertical" />
            <Typography.Paragraph
              className={styles.textCaptionSecondary}
              style={{ marginBottom: 0 }}
            >
              Trợ giúp
            </Typography.Paragraph>
            <Divider type="vertical" />
            <Typography.Paragraph
              className={styles.textCaptionSecondary}
              style={{ marginBottom: 0 }}
            >
              Điều khoản sử dụng
            </Typography.Paragraph>
          </Flex>
        </Flex>
      </Col>
      <Col
        className="gutter-row"
        span={15}
        style={{
          background: `url(${IMAGES.login_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Col>
    </Row>
  );
}

export default RegisterPage;
