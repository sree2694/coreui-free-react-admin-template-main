import React from 'react'
import {CAlert, CButton, CCard, CCardBody, CCol, CFormInput, CInputGroup, CInputGroupText, CRow} from "@coreui/react";
import {AiFillEye, BiKey, BiSave, ImCancelCircle} from "react-icons/all";

const WebEDI = () => {


  return (
    <>
      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardBody>
              <p className="text-high-emphasis medium">
                Your account
              </p>
              <CButton href="#">Sign-in</CButton>
              <div>
                <p className="text-medium-emphasis small">
                  Don't have an account? <code><a href="src/views/dashboard/HowToGuides/webEDI/WebEDI#">Sign up now</a> </code>
                </p>
              </div>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardBody>
              <p className="text-high-emphasis medium">
                Install the API Key
              </p>
              <p className="text-medium-emphasis small">
                Sign in to get your API key and paste it in the box below. The API key will be used to authenticate
                yourself across all operations on this website.
              </p>
              <CAlert color="info"><b>Important!</b> To use the free plan, you don't need an account. To test the API
                use the following API key:{'\n'}<CAlert color="light">3ecf6b1c5cf34bd797a5f4c57951a1cf</CAlert></CAlert>
              <CInputGroup>
                <CInputGroupText><BiKey/></CInputGroupText>
                <CFormInput
                  placeholder="Set your API Key here"
                  aria-label="Set your API Key here"
                  aria-describedby="btnGroupAddon"
                />
                <CInputGroupText><AiFillEye/></CInputGroupText>
              </CInputGroup>
              <div>
                <p className="text-medium-emphasis small">
                  Don't forget to hit the Save button below, otherwise the key won't be properly installed.
                </p>
              </div>
              <div><BiSave/> <ImCancelCircle/></div>

            </CCardBody>
          </CCard>

        </CCol>
      </CRow>
    </>
  )
}

export default WebEDI
