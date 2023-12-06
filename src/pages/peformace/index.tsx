import PageLayout from "@/components/layout/PageLayout";
import { Button } from "antd";
import React, { useEffect } from "react";


export default function TestPer(){
  const [data, setData] = React.useState(Array.from({length: 100}, (_, i) => i.toString()));

  useEffect(() => {}, [data]);

  const changeId = Array.from({length: 50}, (_, i) => i);

  const onSetClick = () => {
    performance.mark('zsTestSetStart');
    console.time('set');
    setData(data => {
      const newData = [...data];
      changeId.forEach(id => {
        newData[id] = 'SET' + newData[id];
      })
      return newData;
    });
    console.timeEnd('set');
    requestAnimationFrame(() => {
      performance.mark('zsTestSetEnd');
      performance.measure('zsTestSet', 'zsTestSetStart', 'zsTestSetEnd');
    });
  }

  const domClick = () => {
    performance.mark('zsTestDOMStart');
    console.time('dom');
    changeId.forEach(id => {
      const dom = document.getElementById(id.toString());
      if (dom) {
        dom.innerHTML = 'DOM' + dom.innerHTML;
      }
    })
    console.timeEnd('dom');
    requestAnimationFrame(() => {
      performance.mark('zsTestDOMEnd');
      performance.measure('zsTestDOM', 'zsTestDOMStart', 'zsTestDOMEnd');
    });
  }

  return <PageLayout>
    <Button onClick={onSetClick}>set Data</Button>
    <Button onClick={domClick}>dom change</Button>
    {
      data.map((item, index) => <div key={item} id={index}>{item}</div>)
    }
  </PageLayout>
}