import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react'
import {Fab} from "@material-ui/core";
import {AiFillCheckCircle} from "react-icons/all";

const Statusapi = () => {
  return (
    <>
      <CRow>
        <CCol xs={8}>
          <CCard className="mb-4">
            <CCardBody>

              <Fab color="default" className="mb-4">
                < AiFillCheckCircle className="align-content-lg-stretch" size="40"/>
              </Fab>

              &nbsp;&nbsp;
              <div className="align-content-lg-center">
                <h3>All services are online</h3><br/>
                Our infrastructure is up and running
              </div>
            </CCardBody>
          </CCard>
          <CCard className="mb-4">
            <CCardBody>
              <p>Availability for EDI API</p>
              <span className='text-success'>100% Uptime</span> &nbsp;&nbsp;
              <span className='text-warning'>Partial Degragation</span> &nbsp;&nbsp;
              <span className='text-danger'>Downtime</span> <br/>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">June 28, 2022</CTableHeaderCell>
                    <CTableDataCell>Available</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">June 27, 2022</CTableHeaderCell>
                    <CTableDataCell>Available</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">June 26, 2022</CTableHeaderCell>
                    <CTableDataCell>Available</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Statusapi
