import React, { useState } from 'react'
import { Modal } from "react-bootstrap"

const Spinner = ({ check }) => {

  return (
    <>
      <Modal show = {check} className="w-100 d-flex justify-content-center align-items-center">
        <svg className="rounded-2" style={{"margin": "auto", "background": "white", "display": "block", "shapeRendering": "auto"}} width="4em" height="4em"
          viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <g transform="rotate(0 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s"
                repeatCount="indefinite"></animate>
            </rect>
          </g>
          <g transform="rotate(30 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s"
                repeatCount="indefinite"></animate>
            </rect>
          </g>
          <g transform="rotate(60 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite">
              </animate>
            </rect>
          </g>
          <g transform="rotate(90 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s"
                repeatCount="indefinite"></animate>
            </rect>
          </g>
          <g transform="rotate(120 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s"
                repeatCount="indefinite"></animate>
            </rect>
          </g>
          <g transform="rotate(150 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#a445b2">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite">
              </animate>
            </rect>
          </g>
          <g transform="rotate(180 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s"
                repeatCount="indefinite"></animate>
            </rect>
          </g>
          <g transform="rotate(210 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s"
                repeatCount="indefinite"></animate>
            </rect>
          </g>
          <g transform="rotate(240 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite">
              </animate>
            </rect>
          </g>
          <g transform="rotate(270 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s"
                repeatCount="indefinite"></animate>
            </rect>
          </g>
          <g transform="rotate(300 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s"
                repeatCount="indefinite"></animate>
            </rect>
          </g>
          <g transform="rotate(330 50 50)">
            <rect x="45.5" y="9.5" rx="4.5" ry="7.5" width="9" height="15" fill="#fa4299">
              <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
              </animate>
            </rect>
          </g>
        </svg>
      </Modal>
    </>
  )
}

export default Spinner;