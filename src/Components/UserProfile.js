import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import event1 from "../Icons/event1.PNG";
import event2 from "../Icons/event 2.PNG";
import event3 from "../Icons/event3.PNG";
import event4 from "../Icons/event4.PNG";
import IMG_6508 from "../Icons/IMG_6508.jpg";




export default function UserProfile(props) {
    return (
        //<div className="gradient-custom-2style={{ backgroundColor: '#9de2ff' }}" >
            <MDBContainer className="py-5 h-100" >

                <MDBRow className="justify-content-center align-items-center h-100" >

                    <MDBCol>
                        {/*<MDBCol lg="9" xl="7">    */}
                        <MDBCard fullWidth PaperProps={{ style: { backgroundColor: '#202020' } }}>
                            <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#202020', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <MDBCardImage src={props.user.profile_pic}
                                                  alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                                    <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                                        Edit profile
                                    </MDBBtn>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">{props.user.name}</MDBTypography>
                                    <MDBCardText>{props.user.location}</MDBCardText>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <MDBCardText >
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            {props.user.description}
                                        </MDBCardText>
                                        <MDBCardText className="small text-muted mb-0"></MDBCardText>
                                    </div>
                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1"> {props.user.name}'s Profile</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">Username: {props.user.username}</MDBCardText>
                                        <MDBCardText className="font-italic mb-0">Age: {props.user.age}</MDBCardText>
                                        <MDBCardText className="font-italic mb-0">Email: {props.user.email}</MDBCardText>
                                        <MDBCardText className="font-italic mb-0">Location: {props.user.location}</MDBCardText>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">Joined events</MDBCardText>
                                    <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                                </div>
                                <MDBRow>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage  src={event1}
                                                      alt="event1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src={event2}
                                                      alt="event2" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="g-2">
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src={event3}
                                                      alt="event3" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src={event4}
                                                      alt="event4" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
               </MDBRow>
            </MDBContainer>
       // </div>

    );
            }

