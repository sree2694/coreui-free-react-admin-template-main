import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow
} from "@coreui/react";
import {RiUpload2Line} from "react-icons/ri";

const AnalyzeEDIFiles = () => {


  return (
    <>
      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4" style={{height: 500}}>
            <CCardHeader>

              <CButton component="upload" color="light" href="#" role="button">
                <RiUpload2Line/>
              </CButton>
              <CDropdown>
                <CDropdownToggle color="light">Sample EDI</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">HIPPA</CDropdownItem>
                  <CDropdownItem href="#">X12</CDropdownItem>
                  <CDropdownItem href="#">EDIFACT</CDropdownItem>
                  <CDropdownItem href="#">EANCOM</CDropdownItem>
                  <CDropdownItem href="#">IATA</CDropdownItem>
                  <CDropdownItem href="#">HL7</CDropdownItem>
                  <CDropdownItem href="#">EDIGAS</CDropdownItem>
                  <CDropdownItem href="#">VDA</CDropdownItem>
                  <CDropdownItem href="#">NCPDP</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <span style={{textAlign: "end"}}>EDI Data</span>
            </CCardHeader>
            <CCardBody>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4" style={{height: 500}}>
            <CCardHeader>
              <p style={{textAlign: "right"}}>EDI Guideline</p>
            </CCardHeader>
            <CCardBody>

            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4" style={{height: 250}}>

            <CCardBody>

            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4" style={{height: 250}}>
            <CCardBody>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AnalyzeEDIFiles
