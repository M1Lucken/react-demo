import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
//import 'bulma/bulma';

const App = () => {
  const rows = [0, 1, 2, 3]
  return (
    <div className="App">

      <header className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
          IV Housing Search
        </h1>
        <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
          Simplify your hunt
        </h2>
      </header>

      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Enter Criteria</legend>
          </fieldset>
            
            <div className="flex">
              <div className="outline w-25 pa3 mr2">
               
                <code>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="price">Maximum Price per Month</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="maxPrice" name="maxPrice" id="maxPrice"/>
                  </div>
                </code>

              <div className="outline w-25 pa3 mr2">
                
                <code>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="beds">Number of Bedrooms</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="minBed" name="minBed" id="minBed"/>
                  </div>
                </code>
              
              </div>
              
              <div className="outline w-25 pa3 mr2">
                
                <code>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="beds">Number of Bathrooms</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="minBath" name="minBath" id="minBath"/>
                  </div>
                </code>
                  
              </div>

              <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Search Listings"/>
              </div>
            </div>
          </div>
        </form>
      </main>

            <div className="pa4">
              <div className="overflow-auto">
                <table className="f6 w-100 mw8 center">
                  <thead>
                    <tr>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Rent</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Address</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Availability</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Bedrooms</th>
                      <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Bathrooms</th>
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {rows.map((row) => {
                      return (
                        <tr>
                          <td className="pv3 pr3 bb b--black-20">$585</td>
                          <td className="pv3 pr3 bb b--black-20">
                            <div className="pa4 lh-copy">
                              <a className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">6515 Pardall Rd, Unit 3</a>
                            </div>
                          </td>
                          <td className="pv3 pr3 bb b--black-20">July 4</td>
                          <td className="pv3 pr3 bb b--black-20">2</td>
                          <td className="pv3 pr3 bb b--black-20">2</td>
                        </tr>
                      )
                    })}
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">$575</td>
                      <td className="pv3 pr3 bb b--black-20">
                        <div className="pa4 lh-copy">
                          <a className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">6515 Pardall Rd, Unit 1</a>
                        </div>
                      </td>
                      <td className="pv3 pr3 bb b--black-20">July 4</td>
                      <td className="pv3 pr3 bb b--black-20">2</td>
                      <td className="pv3 pr3 bb b--black-20">2</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">$975</td>
                      <td className="pv3 pr3 bb b--black-20">
                        <div className="pa4 lh-copy">
                          <a className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">6515 Pardall Rd, Unit 6</a>
                        </div></td>
                      <td className="pv3 pr3 bb b--black-20">July 4</td>
                      <td className="pv3 pr3 bb b--black-20">2</td>
                      <td className="pv3 pr3 bb b--black-20">2</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">$950</td>
                      <td className="pv3 pr3 bb b--black-20">
                        <div className="pa4 lh-copy">
                          <a className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">6515 Pardall Rd, Unit 5</a>
                        </div></td>
                      <td className="pv3 pr3 bb b--black-20">July 4</td>
                      <td className="pv3 pr3 bb b--black-20">1</td>
                      <td className="pv3 pr3 bb b--black-20">1</td>
                    </tr>
                    <tr>
                      <td className="pv3 pr3 bb b--black-20">$950</td>
                      <td className="pv3 pr3 bb b--black-20">
                        <div className="pa4 lh-copy">
                          <a className="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">6515 Pardall Rd, Unit 7</a>
                        </div></td>
                      <td className="pv3 pr3 bb b--black-20">July 4</td>
                      <td className="pv3 pr3 bb b--black-20">1</td>
                      <td className="pv3 pr3 bb b--black-20">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    </div>
          );
        }
        
        
        
        export default App;
