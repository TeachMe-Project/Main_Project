import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';

library.add(fas)


export default function ManageCourses() {
  const navigate = useNavigate();
  const directToCourse = () => { navigate('/'); };

  return (
      <table className="booking-table" id="view-booking">
        <thead>
        <tr className="booking-thead-second-tr">
          {/*amc: Institute Manage Courses*/}
          <th className="imc-first-th">Course ID</th>
          <th className="imc-second-th">Grade</th>
          <th className="imc-third-th">Subject</th>
          <th className="imc-fourth-th">Tutor's name</th>
          <th className="imc-last-th"></th>
        </tr>
        </thead>
        <tbody>

        <tr>
            <td data-label="Course ID :">10000102345</td>
            <td data-label="Grade :">Grade 10</td>
            <td data-label="Subject :">Business & Accounting Studies</td>
            <td data-label="Tutor's Name :">Amila Banadaranayake</td>
            <td>
                <div className="Icons">
                    {/*View Icon*/}
                    <Button onClick={directToCourse} className="view-icon">
                        <FontAwesomeIcon icon={['fas', 'eye']}/>
                    </Button>
                </div>
            </td>
        </tr>
        <tr>
            <td data-label="Course ID :">10000102355</td>
            <td data-label="Grade :">Grade 10</td>
            <td data-label="Subject :">History</td>
            <td data-label="Tutor's Name :">Kamal Maggona</td>
            <td>
                <div className="Icons">
                    {/*View Icon*/}
                    <Button onClick={directToCourse} className="view-icon">
                        <FontAwesomeIcon icon={['fas', 'eye']}/>
                    </Button>
                </div>
            </td>
        </tr>
        <tr>
            <td data-label="Course ID :">10000102320</td>
            <td data-label="Grade :">Grade 10</td>
            <td data-label="Subject :">Science</td>
            <td data-label="Tutor's Name :">Anusha Palpita</td>
            <td>
                <div className="Icons">
                    {/*View Icon*/}
                    <Button onClick={directToCourse} className="view-icon">
                        <FontAwesomeIcon icon={['fas', 'eye']}/>
                    </Button>
                </div>
            </td>
        </tr>
        <tr>
            <td data-label="Course ID :">10000109945</td>
            <td data-label="Grade :">Grade 10</td>
            <td data-label="Subject :">Sinhala Lang. & Lit</td>
            <td data-label="Tutor's Name :">Nimali Weeerasinghe</td>
            <td>
                <div className="Icons">
                    {/*View Icon*/}
                    <Button onClick={directToCourse} className="view-icon">
                        <FontAwesomeIcon icon={['fas', 'eye']}/>
                    </Button>
                </div>
            </td>
        </tr>
        <tr>
            <td data-label="Course ID :">10000102300</td>
            <td data-label="Grade :">Grade 9</td>
            <td data-label="Subject :">History</td>
            <td data-label="Tutor's Name :">Vajira Gamage</td>
            <td>
                <div className="Icons">
                    {/*View Icon*/}
                    <Button onClick={directToCourse} className="view-icon">
                        <FontAwesomeIcon icon={['fas', 'eye']}/>
                    </Button>
                </div>
            </td>
        </tr>
        <tr>
            <td data-label="Course ID :">10000102345</td>
            <td data-label="Grade :">Grade 11</td>
            <td data-label="Subject :">Business & Accounting Studies</td>
            <td data-label="Tutor's Name :">Sameera Rajapakse</td>
            <td>
                <div className="Icons">
                    {/*View Icon*/}
                    <Button onClick={directToCourse} className="view-icon">
                        <FontAwesomeIcon icon={['fas', 'eye']}/>
                    </Button>
                </div>
            </td>
        </tr>



        </tbody>
      </table>
  );
}
