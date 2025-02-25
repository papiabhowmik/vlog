import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './style.css';

const BlogDetails = () => {

    const { id } = useParams();
    const blogs = useSelector(state => state.blogs);
    const[filtered_blogs, setFiltered_blogs] = useState([]);

    useEffect(()=> {
       const filteredBlog = blogs.filter((blog)=> blog.id==id);
       console.log(filteredBlog[0]);
       setFiltered_blogs(filteredBlog[0]);
    },[]);

  return (
    <Container className='blog-details-wrap'>
     <h1 className='title'>Blog Details</h1>
      <Row>
        <Col md={6} >
          <h1>{`${filtered_blogs.id}) ${filtered_blogs.title}`}</h1>
          <p>{filtered_blogs.content}</p>
          <img src={filtered_blogs.img} alt='no-image'/>
          <i>{filtered_blogs.design_with_ease}</i>
          <h2>Get Inspired</h2>
          <p>{filtered_blogs.inspiration}</p>
        </Col>
      </Row>
    </Container>
  )

}

export default BlogDetails;