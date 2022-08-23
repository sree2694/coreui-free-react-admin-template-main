import React from 'react'
import {CButton, CCard, CCol, CRow,} from "@coreui/react";
import {BiDislike, BiSmile,} from "react-icons/bi";
import {BsCart2, BsCloudy, BsCreditCard, BsPerson,} from "react-icons/bs";
import {GoMail} from "react-icons/go";
import Compareplans from "./Compareplans";

const PlansPricing = () => {
  return (
    <>
      <CRow>
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <h2>
            Pricing built for businesses of all sizes
            <br/>
          </h2>
        </div>

        <span>
          Access a complete EDI translation & validation platform with simple, tier-based pricing, and the freedom to
            cancel at any time. No setup fees or hidden fees, always know what you'll pay.
        </span>
        <CRow style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <CCol>
            <CCard
              className="mb-4" style={{display: "flex", alignItems: 'center', justifyContent: 'center', width: 250}}>
              &nbsp;&nbsp;
              <h3 style={{fontWeight: "400", fontSize: "1rem"}}>FREE</h3>
              <h2>$0</h2>
              <div style={{fontSize: "13px", color: "#98a6ad"}}>forever</div>
              <ul style={{lineHeight: "2"}}>
                <p><BsCloudy/> Up to 50 calls a day</p>
                <p><BiDislike/> No overage</p>
                <p><BsCreditCard/> No account required</p>
                <p><BsCreditCard/> No billing information required</p>
                <p><GoMail/> No support</p>
                <CButton href="#">Get Started</CButton>
              </ul>
            </CCard>
          </CCol>
          <CCol>
            <CCard className="mb-4"
                   style={{alignItems: 'center', justifyContent: 'center', width: 250}}>
              &nbsp;&nbsp;
              <h3 style={{fontWeight: "400", fontSize: "1rem"}}>STARTUP</h3>
              <h2>$18</h2>
              <div style={{fontSize: "13px", color: "#98a6ad"}}>Per Month</div>
              <ul style={{lineHeight: "2", alignItems: 'center', justifyContent: 'center'}}>
                <p><BsCloudy/> Up to 4,000 calls a day</p>
                <p><BsCart2/> Prepaid 1,500 calls</p>
                <p><BsCreditCard/> Then $0.03 per call</p>
                <p><BsPerson/> Unlimited users</p>
                <p><GoMail/> Account Support</p>
                <p><BiSmile/> 10% off when paid annually</p>
                <CButton href="#">Start Free Trail</CButton>
              </ul>
            </CCard>
          </CCol>
          <CCol>
            <CCard className="mb-4"
                   style={{alignItems: 'center', justifyContent: 'center', width: 250}}>
              &nbsp;&nbsp;
              <h3 style={{fontWeight: "400", fontSize: "1rem"}}>PRO</h3>
              <h2>$90</h2>
              <div style={{fontSize: "13px", color: "#98a6ad"}}>Per Month</div>
              <ul style={{lineHeight: "2", alignItems: 'center', justifyContent: 'center'}}>
                <p><BsCloudy/> Up to 20,000 calls a day</p>
                <p><BsCart2/> Prepaid 5,000 calls</p>
                <p><BsCreditCard/> Then $0.02 per call</p>
                <p><BsPerson/> Unlimited users</p>
                <p><GoMail/> Email Support</p>
                <p><BiSmile/> 13% off when paid annually</p>
                <CButton href="#">Start Free Trail</CButton>
              </ul>
            </CCard>
          </CCol>
          <CCol>
            <CCard className="mb-4"
                   style={{alignItems: 'center', justifyContent: 'center', width: 250}}>
              &nbsp;&nbsp;
              <h3 style={{fontWeight: "400", fontSize: "1rem"}}>ENTERPRISE</h3>
              <h2>$180</h2>
              <div style={{fontSize: "13px", color: "#98a6ad"}}>Per Month</div>
              <ul style={{lineHeight: "2", alignItems: 'center', justifyContent: 'center'}}>
                <p><BsCloudy/> Unlimited calls</p>
                <p><BsCart2/> Prepaid 10,000 calls</p>
                <p><BsCreditCard/> Then $0.01 per call</p>
                <p><BsPerson/> Unlimited users</p>
                <p><GoMail/> Email & Phone Support</p>
                <p><BiSmile/> 15% off when paid annually</p>
                <CButton href="#">Start Free Trail</CButton>
              </ul>
            </CCard>
          </CCol>
        </CRow>
      </CRow>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div><h3>Compare plans</h3></div>
        <div><p><strong>1 call</strong> = 1 successful request to the developer API for translation, validation,
          documentation,
          acknowledgment, or SEF import.</p></div>
        <Compareplans/>
      </div>
    </>
  )
}

export default PlansPricing
