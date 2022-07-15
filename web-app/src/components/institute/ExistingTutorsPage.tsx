import React from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';

library.add(fas)


export default function ExistingTutorsPage() {
  const navigate = useNavigate();
  const directToCourse = () => { navigate('/'); };

  return (
      <table className="booking-table" id="view-booking">
        <thead>
        <tr className="booking-thead-second-tr">
          {/*iet: Institute Existing Tutors*/}
          <th className="iet-first-th">Tutor ID</th>
          <th className="iet-second-th">Username</th>
          <th className="iet-third-th">First Name</th>
          <th className="iet-fourth-th">Last name</th>
          <th className="iet-fifth-th">Contact No</th>
          <th className="iet-last-th"></th>
        </tr>
        </thead>
        <tbody>

        <tr>
          <td data-label="Tutor ID :">10000102345</td>
          <td data-label="Username :">Grade 10</td>
          <td data-label="First Name:">Pramuka</td>
          <td data-label="Last Name :">Senevirathne</td>
          <td data-label="Contact No :">0713455673</td>
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
          <td data-label="Tutor ID :">1000010299</td>
          <td data-label="Username :">Grade 10</td>
          <td data-label="First Name:">Anajani</td>
          <td data-label="Last Name :">Bandara</td>
          <td data-label="Contact No :">0713455673</td>
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
          <td data-label="Tutor ID :">10000102300</td>
          <td data-label="Username :">Grade 10</td>
          <td data-label="First Name:">Chirath</td>
          <td data-label="Last Name :">Edirisinghe</td>
          <td data-label="Contact No :">0713455673</td>
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
          <td data-label="Tutor ID :">10000102356</td>
          <td data-label="Username :">Grade 10</td>
          <td data-label="First Name:">Thilina</td>
          <td data-label="Last Name :">Dissanayake</td>
          <td data-label="Contact No :">0713455673</td>
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
          <td data-label="Tutor ID :">10000102398</td>
          <td data-label="Username :">Grade 10</td>
          <td data-label="First Name:">Sameera</td>
          <td data-label="Last Name :">Senevirathne</td>
          <td data-label="Contact No :">0713455673</td>
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
