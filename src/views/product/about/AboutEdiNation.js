import React from 'react'
import {CCard, CCardBody, CCol} from '@coreui/react'
import uber from "src/assets/images/uber.png";
import enbw from "src/assets/images/enbw.png";
import macro from "src/assets/images/macrohealth.png";
import pitney from "src/assets/images/pitneybowes.png";
import tagg from "src/assets/images/tagg.png";
import {FaFilePdf} from "react-icons/all";
import privacy from "src/assets/docs/EdiNation Privacy Policy.pdf";
import service from "src/assets/docs/EdiNation Services Agreement.pdf";
import servicelevel from "src/assets/docs/EdiNation Service Level Agreement.pdf";

const AboutEdiNation = () => {
  return (<>
      <div
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <CCol xl={6}>
          <CCard className="mb-2">
            <CCardBody>
              <p>
                <h3>What is EdiNation?</h3>
                <p> EdiNation is a web app and developer API to translate, view, edit, create, verify, document, import
                  SEF, and acknowledge EDI & flat files in seconds, at any scale.</p>
                &nbsp;
                <p>EdiNation allows you to:</p>
                <p>
                  <ul>
                    <li>Accelerate your application development with seamless translation between EDI and JSON.</li>
                    <li>Detect, visualize and diagnose problems for increased transparency with one unified EDI editor.
                      Ensure your EDI data is compliant before sending it out or after receiving it
                    </li>
                    <li>Customize your EDI transaction formats and validation rules to match any partner-specific
                      requirement using OpenAPI, the specification of web APIs and services
                    </li>
                    <li>Easily migrate all SEF or EdiFabric specifications you have collected over the years.</li>
                    <li>Create documentation for all EDI formats to share with team members or partners.</li>
                  </ul>
                </p>
                <p>EdiNation has democratized the interpretation of business data by standardizing the representation,
                  translation, and validation of EDI documents through simple but powerful APIs.</p>
              </p>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src={uber} width={100} alt={uber}/>&nbsp;&nbsp;&nbsp;
                <img src={enbw} width={180} alt={enbw}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={macro} width={180} alt={macro}/>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src={pitney} width={180} alt={pitney}/>&nbsp;&nbsp;&nbsp;
                <img src={tagg} width={200} alt={tagg}/>
              </div>
            </CCardBody>
          </CCard>
          <CCard className="mb-2">
            <CCardBody>
              <p>
                <h3>Is EdiNation secure and scalable?
                </h3>
                <p>
                  <p> EdiNation is committed to delivering a highly secure environment for our customers, and all
                    network communication is encrypted in transit.
                    &nbsp;</p><p>
                  We stand behind our service with an industry-leading 99.9% SLA available on select plans and rely on
                  the power and scalability of Microsoft Azure's global infrastructure to quickly ramp up or down when
                  needed.
                  &nbsp;</p><p>
                  All our services are HIPAA compliant and adhere to the security and privacy provisions set forth in
                  HIPAA and the HITECH Act, and we don't collect any of your sensitive information; see the privacy
                  policy for details.
                  &nbsp;</p>
                  <p>For more information, please <code className="highlighter-rouge">ask us</code>.</p>
                </p>

              </p>

            </CCardBody>
          </CCard>
          <CCard className="mb-2">

            <div className="card-body">
              <h3>Our Mission is to Harmonize the Shape of Business Data</h3>
              <p>EdiNation is part of EdiFabric - a technology company that standardizes the representation of business
                documents, which enables trading partners to communicate more predictably, accurately, and efficiently.
                Businesses of every size - from new startups to public companies - use our software to translate and
                validate their EDI documents online and to collaborate on and document their data formats.
              </p>
              <p> Despite the EDI market growth, small and medium companies are still plagued by high provider costs,
                lack of options, and the variety of data standards they have to support. Removing the barriers to
                affordability and data transparency helps more businesses to get started, accelerates the growth for
                existing companies, and increases the speed and efficiency of global trade.</p>
              <p>
                For more information, please visit <code className="highlighter-rouge">EdiFabric</code>.</p>
              <div>
                 <a href={privacy}> <FaFilePdf/>&nbsp;Privacy Policy</a>
              </div>
              <div>
                <a href={service}> <FaFilePdf/>&nbsp;Service Terms</a>
              </div>
              <div>
                <a href={servicelevel}> <FaFilePdf/>&nbsp;Service Level Agreement</a>
              </div>
            </div>
          </CCard>
        </CCol>
      </div>
    </>)
}

export default AboutEdiNation
