import { Space, Typography,Form, Select ,Table} from "antd";
import { useEffect, useState } from "react";
import { getResources } from "../API/index";

function ResourceData() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [options, setOptions] = useState([]);
  const [columns,setColumns] =useState([
  ]);
  useEffect(() => {
    setLoading(true);
    getResources().then((result) => {
        
        const optionData = [];
        result.forEach((element) => {
				const value = `${element}`
				const label = `${element}`
				optionData.push({
					label: label,
					value: value,
				});
			});
			setOptions(optionData);
      
      setLoading(false);
    });
  }, []);
 
  const handleChange=(value)=>{
    fetch(`https://engineering-task.elancoapps.com/api/resources/${value}`).then((res) => res.json()).then((result) => {
         
    const list =result ||[];
    const firstObject=list[0] || {};
    const cols=[]
    for (const key in firstObject){
          console.log(key)
          if(key==='Cost'){
             var sorter=(a,b) =>
              a.Cost-b.Cost
            
          }
        var render = (value)=>{
            return <span>{String(value)}</span>
        }
        if(typeof firstObject[key]==='object'){
            render =(value)=>{
                return <span>{Object.keys(value).map(key=>{
                    return <span>{key}:{value[key]} </span>
                })}</span>
            }
        }
        const col={
            title:key,
            dataIndex:key,
            render: render,
            sorter:sorter
        };
        cols.push(col)
    }
    setColumns(cols)
    setDataSource(result);     
    loading(false);
});

  }

  return (
    <div style={{margin:'100px'}}>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Resource Data</Typography.Title>
      <div style={{width:'20rem'}}>
							<Form.Item
								label="resources"
								name="resourceData"
								rules={[
									{
										required: true,
										message: 'Please select atleast one Resource',
									},
								]}
							>
								<Select
									style={{ width: '100%' }}
									placeholder="Please select"
									onChange={handleChange}
									maxTagCount={2}
								>
									{options.map((option, index) => {
										return (
											<Select.Option key={index} value={option.value}>
												{option.label}
											</Select.Option>
										);
									})}
								</Select>
                                <div className="form-2">
      
      {dataSource.length>0&& 
       <div style={{marginTop:'5rem'}}>
       <Table columns={columns} dataSource={dataSource} />
 </div>}
 </div>

</Form.Item>
						</div>

    </Space>
    </div>
  );
}
export default ResourceData;