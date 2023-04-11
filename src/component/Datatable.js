
import {Table} from 'antd';
import {useEffect, useState} from 'react';
import './datatable.css';
import {getRawData }from '../API/index'

const Datatable =()=>{
    const [loading, setLoading] = useState(false);
    const [columns,setColumns] =useState([]);

       const [dataSource,setDataSource] =useState([]);
       
       useEffect(()=>{
        setLoading(true);
        getRawData()
         .then((result)=>{
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
       
       
         })
       },[])
    return(
        <div className='app_container'>
              <Table columns={columns} dataSource={dataSource} scroll={{y:1000}}/>
        </div>
    )
}

export default Datatable