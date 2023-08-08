 import React from 'react'
 
 function Home() {
   return (
     <div>

<div className="container text-center">
  <div className="row">
    <div className="col">
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label className="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
    </div>
    <div className="col">
    <select className="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select className="form-select form-select-sm" aria-label="Small select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div className="col">
      Column
    </div>
  </div>
</div>
     </div>
   )
 }
 
 export default Home