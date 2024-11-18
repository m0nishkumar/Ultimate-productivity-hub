import React from 'react'
import ReactDom from 'react-dom'
import { LoginUI } from './LoginUI'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal1({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} className='' />
      <div style={MODAL_STYLES} className='rounded-2xl'>
        <div className=''>
            <LoginUI onClose={onClose}/>
        </div> 
      </div>
    </>,
    document.getElementById('portal')
  )
}