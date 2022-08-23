import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow
} from "@coreui/react";

const DownloadEDISpecs = () => {


  return (
    <>
      <CContainer>
        <CRow>
          <CCol xl={2}>
            <CCard className="mb-4" style={{width: 160}}>
              <CCardBody>
                <img src="https://www.edination.com/images/edi-standards/x12.jpg" alt={"x12"}/>
                <h5>X12 Format</h5>
                <CButton color="primary" href="#" role="asc">
                  X12 ASC
                </CButton>
                <CButton color="light" href="#" role="hipaa">
                  HIPAA
                </CButton>
                <CButton color="light" href="#" role="iaiabc">
                  IAIABC
                </CButton>
              </CCardBody>
            </CCard>
            <CCard className="mb-4" style={{width: 160}}>
              <CCardBody>
                <img src={"https://www.edination.com/images/edi-standards/edifact.png"} alt={"unece"}/>
                <h5>EDIFACT Format</h5>
                <CButton color="light" href="#">
                  EDIFACT UN
                </CButton>
                <CButton color="light" href="#">
                  ACE
                </CButton>
                <CButton color="light" href="#">
                  IATA
                </CButton>
                <CButton color="light" href="#">
                  SMDG
                </CButton>
              </CCardBody>
            </CCard>
            <CCard className="mb-4" style={{height: 200, width: 160}}>
              <CCardBody>
                <img src={"https://www.edination.com/images/edi-standards/eancom.png"} alt={"enacom"}/>
                <h5>EANCOM Format</h5>
                <CButton color="light" href="#">
                  EANCOM GS1
                </CButton>
              </CCardBody>
            </CCard>
            <CCard className="mb-4" style={{height: 200, width: 160}}>
              <CCardBody>
                <img src={"https://www.edination.com/images/edi-standards/vda.jpg"} alt={"vda"}/>
                <h5>VDA Format</h5>
                <CButton color="light" href="#">
                  VDA
                </CButton>
              </CCardBody>
            </CCard>
            <CCard className="mb-4" style={{height: 200, width: 160}}>
              <CCardBody>
                <img src={"https://www.edination.com/images/edi-standards/hl7.png"} alt={"hl7"}/>
                <h5>HL7 Format</h5>
                <CButton color="light" href="#">
                  HL7
                </CButton>
              </CCardBody>
            </CCard>
            <CCard className="mb-4" style={{height: 200, width: 160}}>
              <CCardBody>
                <img src={"https://www.edination.com/images/edi-standards/ncpdp.png"} alt={"ncpdp"}/>
                <h5>NCPDP Format</h5>
                <CButton color="light" href="#">
                  NCPDP
                </CButton>
              </CCardBody>
            </CCard>
            <CCard className="mb-4" style={{height: 200, width: 160}}>
              <CCardBody>
                <img src={"https://www.edination.com/images/edi-standards/edigas.jpg"} alt={"edigas"}/>
                <h5>EDIGAS Format</h5>
                <CButton color="light" href="#">
                  EDIGAS
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xl={3}>
            <CCard className="mb-4" style={{height: 600}}>
              <CCardBody>
                <h5>Select EDI version and message ID</h5>
                <CDropdown>
                  <CDropdownToggle color="light" size="lg">-- Select Model --</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">EdiNation.X12.ASC.002040</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.003010</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.003020</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.003030</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.003040</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.003050</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.003060</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.003070</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.004010</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.004020</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.004030</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.004040</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.004050</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.005010</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.005020</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.005030</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.005040</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.005050</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.006010</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.006020</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.006030</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.006040</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.006050</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.007010</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.007020</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.007030</CDropdownItem>
                    <CDropdownItem href="#">EdiNation.X12.ASC.007040</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

              </CCardBody>
            </CCard>
          </CCol>

          <CCol xl={7}>
            <CCard className="mb-4" style={{height: 600}}>
              <CCardBody>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>


      </CContainer>
    </>
  )
}

export default DownloadEDISpecs
