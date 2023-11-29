import PageLayout from "@/components/layout/PageLayout.tsx";
import { Input, Table } from "antd";
import { useEffect, useState } from "react";

export default function TablePage() {

  const [dataSource, setDataSource] = useState([])
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 100,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number) => `共 ${total} 条`
  })
  const [searchValue, setSearchValue] = useState("")

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }
  ]

  useEffect(() => {
    getData()
  },[pagination.current, searchValue])

  const getData = () => {
    console.log('getData');
    
    const data = []
    for (let i = 0; i < pagination.pageSize; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}页数${pagination.current}`,
        age: searchValue,
        address: `London, Park Lane no. ${i}`
      })
    }
    setDataSource(data)
  }

  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    setPagination(pagination)
  }

  // 合并
  const onSearch = (value: string) => {
    setSearchValue(value)
    setPagination({
      ...pagination,
      current: 1
    })
  }
  return (
    <PageLayout>
      <Input.Search onSearch={onSearch} />
      <Table onChange={onTableChange} columns={columns} dataSource={dataSource} pagination={pagination} />
    </PageLayout>
  );
}
