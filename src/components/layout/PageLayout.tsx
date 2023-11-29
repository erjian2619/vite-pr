import { PropsWithChildren } from "react";
import { Layout } from "antd";


export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Layout>
      <Layout.Header>头部</Layout.Header>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
}
