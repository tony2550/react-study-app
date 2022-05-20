import React, { useState } from 'react'
import Axios from 'axios'

const Contact = () => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    request: '',
  })

  const { email, name, request } = inputs

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleSendMail = async () => {
    const response = await Axios({
      method: 'post',
      url: 'http://localhost:3030/contactEmail',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      data: JSON.stringify({ email, name, request }),
    })
    if (response.status === 200) {
      console.log(response)
      alert('Success ' + response.data.message)
    }
  }

  return (
    <div>
      <input name="email" onChange={onChange} />
      <input name="name" onChange={onChange} />
      <input name="request" onChange={onChange} />
      <button onClick={handleSendMail}>Send</button>
    </div>
  )
}

export default Contact
