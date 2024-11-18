import React from 'react'
import ReactDom from 'react-dom'
import { PowerSelection } from './PowerSelection'

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
  backgroundColor: 'rgba(0, 0, 0, .3)',
  zIndex: 20
}

export default function Modalll({ open, children, onClose,start,end,colorC }) {

  return ReactDom.createPortal(
    <>
    {(!colorC)?<></>:<div style={OVERLAY_STYLES}></div>
}
    </>,
    document.getElementById('portal')
  )
}