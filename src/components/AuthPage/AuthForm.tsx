import React from "react";
import { Form } from "antd";

const AuthForm: React.FC<{
  children?: React.ReactNode;
  onFinish?: (values: any) => void;
  onFinishFailed?: (errorInfo: any) => void;
  onValuesChange?: (changedValues: any, allValues: any) => void;
  initialValues?: any;
  validateMessages?: any;
  name?: string;
  scrollToFirstError?: boolean;
}> = ({ children, ...props }) => {
  return (
    <Form
      className="flex flex-col justify-center gap-4 w-3/4 max-w-96"
      {...props}
    >
      {children}
    </Form>
  );
};

export default AuthForm;
