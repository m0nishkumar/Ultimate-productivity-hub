import React from 'react'
import { useState } from 'react'
import Modal1 from './Modal1';

export const Login = ({isOpenLogin,setIsOpenLogin}) => {
    
  return (
<Modal1 open={isOpenLogin} onClose={() => setIsOpenLogin(false)}>
    Fancy Modal
</Modal1>
  )
}

