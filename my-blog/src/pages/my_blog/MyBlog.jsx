import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../home/style.css';
import './style.css';

const MyBlog = ({blogs}) => {
  const navigate = useNavigate()
  console.log(blogs)
  const location = useLocation();
  console.log(location);
  const[time,setTime] = useState();
  const[date,setDate] = useState();

  
  useEffect(()=> {
    const myDate = new Date();
    console.log(myDate);

    const day = myDate.getDay();
    const month = myDate.getMonth();
    const year  = myDate.getFullYear();

    const hrs = myDate.getHours();
    const mins = myDate.getMinutes();
    const secs = myDate.getSeconds();
    
    setTime(hrs+":"+mins+":"+secs);
    setDate(day+"/"+month+"/"+year);

    console.log("Date is ",date);
    console.log("Hours",hrs)
    console.log("Minutes is ",mins);
    console.log("Seconds is ", secs)
  },[]);
 

  return (
    <section className='blogs-wrap'>
    {  
      blogs?.map((blog)=> (
        <div key={blog.id} className='blog mb-5' onClick={()=> { navigate(`/blogDetails/${blog.id}`) }}>
            <Row className='flex-column'>
              <Col lg={12} className='p-0'>
                <img 
                  src={blog.img} 
                  style={{height: "100%"}}
                  alt="no-image-found" 
                  className='img-fluid w-100' 
                />
              </Col>
              <Col lg={12} className='p-4 d-flex flex-column align-items-center justify-content-center'>
                <div className='my-2 w-100 d-flex justify-content-between'>
                  <span>Date:{date}</span>
                  <span>Time:{time}</span>
                </div>
                <h2 className='text-start'>
                  {blog.title}
                </h2>
                <p>{blog.inspiration}</p>
              </Col>
            </Row>
        </div>
      ))
    }

    </section>
  )
}

export default MyBlog



