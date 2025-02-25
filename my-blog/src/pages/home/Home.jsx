import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from './info/banner.json';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';

const Home = () => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const navigate = useNavigate();
  const blogs = useSelector(state => state.blogs);
  console.log(blogs);


  
  return (
    <>
        <section className='banner-wrap position-relative'>
           <Container fluid>
              <Row>
                {
                  Banner && Banner.map((banner_img, index)=> {
                    return(
                      <Col md={4} className='p-0 overflow-hidden' key={index}>
                         <img src={banner_img} alt="no-image-found" className='img-fluid w-100'/>
                      </Col>
                    )
                  })
                }
              </Row>
           </Container>
           <div className='banner-caption'>
              <h1>My Life. My Blog.</h1>
           </div>
        </section>

        <section className='blog-wrap'>
          <Container className='my-5'>
            <h1 className='title'>Recent Posts</h1>
            <Row>
              <Col md={7}>
                  <div className='blogs'>
                    {
                      blogs?.slice(0,3).map((blog)=> (
                        <div key={blog.id} className='blog mb-5'>
                           <Row>
                              <Col lg={6}>
                                <img 
                                  src={blog.img} 
                                  style={{height: "100%"}}
                                  alt="no-image-found"
                                  className='img-fluid w-100' 
                                />
                              </Col>
                              <Col lg={6} className='p-4 d-flex flex-column align-items-center justify-content-center'>
                                <h2>{blog.title}</h2>
                                <p>{blog.inspiration}</p>
                              </Col>
                           </Row>
                        </div>
                      ))
                    }
                    <Link to="/myBlog" state={{blogs}}>
                      <button>All Posts</button>
                    </Link>
                  </div>
              </Col>
              <Col md={5}>
                <div className="container">
                  <div id="form-container">
                    <div className="form" id="#">
                      {/* form top contents with input trigger option */}
                      <div className="content-top">
                        <div className="form-head">
                          <h2>Create Your Post Now!</h2>
                        </div>
                        {/* control for the main form and input label with action button */}
                        <form className="custom-form" id="login-form">
                          <div className="form-group">
                            <h5>
                              Blog Title
                            </h5>
                            <input
                              type="text"
                              id="title"
                              name="title"
                              className="form-input"
                              placeholder="Enter Title"
                              required=""
                            />
                          </div>
                          <div className="form-group">
                            <h5>
                              Blog Content
                            </h5>
                            {/* <input
                              type="text"
                              id="blogContent"
                              name="content"
                              className="form-input"
                              placeholder="Enter Content"
                              required=""
                            /> */}
                            <textarea className="form-input" rows={4} ></textarea>
                          </div>

                          <div className="form-group">
                            <h5>
                             Your Inspiration
                            </h5>
                            <input
                              type="text"
                              id="blogInpiration"
                              name="inspiration"
                              className="form-input"
                              placeholder="Enter Your Inspiration"
                              required=""
                            />
                          </div>

                          <div className='form-group'>
                            <h5>Upload images</h5>
                            <input type="file" id="files" name="files[]" multiple class="form-control"/>
                          </div>

                
                          <button type="submit" className="form-submit">
                            <h4>POST</h4>
                          </button>
                        </form>
                      </div>
                      {/* bottom contents for social login integration */}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
    </>
  )
}
export default Home;

