import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{border: '20px solid green', padding: '10px', borderRadius: '10px'}}>
      <h1>Data Entry Form</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {}
        for (const pair of formData.entries()) {
          data[pair[0]] = pair[1]
        }
        alert(`
          Email: ${data.email}
          Name: ${data.name}
          Address: ${data.address}
          Address2: ${data.address2 ? data.address2 : 'N/A'}
          City: ${data.city}
          Province: ${data.province}
          Postal Code: ${data.postalCode}
        `)
      }}>
        <div style={{display: 'flex'}}>
          <label style={{flex: 1}}>
            Email
            <br></br>
            <input type="email" name="email" required placeholder="Enter email" />
          </label>
          <label style={{flex: 1}}>
            Name<br></br><input type="text" name="name" required placeholder="Enter name" />
          </label>
        </div>
        <br></br>
        <label style={{width: '100%'}}>
          Address
          <br></br>
          <input type="text" name="address" required placeholder="Enter address" style={{width: '100%'}} />
        </label>
        <br></br>
        <label style={{width: '100%'}}>
          Address2
          <br></br>
          <input type="text" name="address2" placeholder="Apartment, studio, or floor" style={{width: '100%'}} />
        </label>
        <br></br>
        <div style={{display: 'flex'}}>
          <label style={{flex: 1, marginRight: '5px'}}>
            City<br></br><input type="text" name="city" required placeholder="Enter city" />
          </label>
          <label style={{flex: 1, marginRight: '5px'}}>
            Province<br></br>
            <select name="province" required>
              <option value="" disabled selected>Select a province</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
            </select>
          </label>
          <label style={{flex: 1}}>
            Postal Code<br></br><input type="text" name="postalCode" required placeholder="Enter postal code" />
          </label>
        </div>
        <br></br>
        <label>
          <input type="checkbox" name="terms" required />
          Agree Terms & Condition?
        </label>
        <br></br>
        <button type="submit" style={{backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px'}}>Submit</button>
      </form>
    </div>
  )
}

export default App
