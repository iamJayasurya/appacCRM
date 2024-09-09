import React from 'react'
import { Link } from 'react-router-dom'

function FeedBack() {
  return (
    <div class="profiled sub-pages">
    <div className="my-appac-hed">
      <div className="myappc-title">
        <p>Feedback</p>
      </div>
      <div className="breadcrumbs">
        <ul>
          <li>
            <a href="">
              Report
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20">
                <path fill="#818798" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/>
              </svg>
            </a>
          </li>
          <li className='present-page'>Feedback</li>
        </ul>
      </div>
    </div>
    
    <div className="rpt-wrp">
            <div className='report-frm  feedback-frm'>
                 <div>
                <p>Subject</p>
                <textarea  name="subject" ></textarea>
                </div>
                <div>
                <p>Questions</p>
                <textarea className='ques-textarea' name="feedback" placeholder="Brief Description"></textarea>
                </div>
                <div class="leave-bt-wrp"><button type="submit" class="submit" name="sendfeedback" value="Send">Submit</button><button type="clear" class="clear">Clear</button></div>
            </div>
            <div className='report-sts'>
            <p className='mt0'>History</p>
              <div className="w-table-cwrp">
         <div className="serach-box mt0">
          <div className="twrap">
         <select className="total-box" name="recors" id="records">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="All">All</option>
          </select>
          <label for="cars">records per page</label>
         </div>
         <search>
            <form>
              <label>Search :</label>
            <input className="search-box" name="fsrch" id="fsrch" placeholder=" "/>
            </form>
          </search>
         </div>
         <div className="works-table">
         <table>
            <tr>
            <th>Sno.</th>
            <th>Subject</th>
            <th>Comments</th>
            </tr>
            <tr className="odd">
               <td>1</td>
               <td>Mobiphysio</td>
               <td>Abinaya</td>
              </tr>
            <tr className="odd">
               <td>1</td>
               <td>Mobiphysio</td>
               <td>Abinaya</td>
               </tr>
            <tr className="odd">
               <td>1</td>
               <td>Mobiphysio</td>
               <td>Abinaya</td>
                </tr>
            <tr className="odd">
               <td>1</td>
               <td>Mobiphysio</td>
               <td>Abinaya</td>
             </tr>
          </table>
          <div className="serach-box">
            <div><p>Showing 1 to 1 of 1 entries</p></div>
            <div className='paginaton-wrp'>
                    <div className='pg-arr'><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5"/></svg></div>
                      <div ><a className="pg-nav active">1</a></div>
                      <div ><a className="pg-nav">2</a></div>
                      <div ><a className="pg-nav">3</a></div>
                    <div className='pg-arr'><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5"/></svg></div>
                  </div> 
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                


  )
}

export default FeedBack