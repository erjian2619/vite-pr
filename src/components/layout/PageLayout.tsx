import { PropsWithChildren } from "react";
import { Layout } from "antd";
import './PageLayout.less'

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Layout className="page">
      <Layout.Header className="page-layout-header">头部</Layout.Header>
      <Layout.Content className="page-layout-content">{children}</Layout.Content>
    </Layout>
  );
}
