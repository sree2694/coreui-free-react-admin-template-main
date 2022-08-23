import React from 'react'
import {
  CButton,
  CCard, CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow
} from "@coreui/react";
import {AiOutlineLeft} from "react-icons/ai";
import {HiOutlineChevronRight} from "react-icons/hi";
import {RiUpload2Line} from "react-icons/ri";

const ConvertEDItoJSON = () => {


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
              <CButton component="go" color="light" href="#" role="button">
                <HiOutlineChevronRight/>
              </CButton>
              <span style={{textAlign: "end"}}>EDI Data</span>
            </CCardHeader>
            <CCardBody>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4" style={{height: 500}}>
            <CCardHeader>
              <CButton component="go" color="light" href="#" role="button">
                <AiOutlineLeft/>
              </CButton>
              <span style={{textAlign: "right"}}>JSON Data</span>
            </CCardHeader>
            <CCardBody>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default ConvertEDItoJSON
