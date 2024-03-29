import React, { useState, useEffect, FormEvent } from 'react';
import DeviceSelectionScreen from './DeviceSelectionScreen/DeviceSelectionScreen';
import IntroContainer from '../IntroContainer/IntroContainer';
import MediaErrorSnackbar from './MediaErrorSnackbar/MediaErrorSnackbar';
import RoomNameScreen from './RoomNameScreen/RoomNameScreen';
import { useAppState } from '../../state';
import { useParams } from 'react-router-dom';
import useVideoContext from '../../hooks/useVideoContext/useVideoContext';
import axios from 'axios';

export enum Steps {
  roomNameStep,
  deviceSelectionStep,
}

export default function PreJoinScreens(props: { id: React.SetStateAction<string>; }) {
  const baseURL = 'http://localhost:8081/course/3';
  // const [courses, setCourses] = React.useState(null);

  // React.useEffect( () => {
  //   axios
  //     .get(baseURL)
  //     .then(response => {
  //       setCourses(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);
  //
  // console.log(courses ? parseInt(courses[0].course_id) : '');

  const { user } = useAppState();
  const { getAudioAndVideoTracks } = useVideoContext();
  const { URLRoomName } = useParams();
  const [step, setStep] = useState(Steps.roomNameStep);

  const [name, setName] = useState<string>(user?.displayName || '');
  const [roomName, setRoomName] = useState<string>('');

  const [mediaError, setMediaError] = useState<Error>();

  useEffect(() => {
    // if (URLRoomName) {
    //   setRoomName(URLRoomName);
    //   if (user?.displayName) {
    //     setStep(Steps.deviceSelectionStep);
    //   }
    // }
    // let c = courses ? parseInt(courses[0].course_id) : '';

    //uncomment this code to get the course id from the url
    // axios
    //   .get(baseURL)
    //   .then(response => {
    //     setRoomName(response.data[0].course_id);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    setRoomName(props.id);
    if (user?.displayName) {
      setStep(Steps.deviceSelectionStep);
    }
  }, [user, URLRoomName]);

  useEffect(() => {
    if (step === Steps.deviceSelectionStep && !mediaError) {
      getAudioAndVideoTracks().catch(error => {
        console.log('Error acquiring local media:');
        console.dir(error);
        setMediaError(error);
      });
    }
  }, [getAudioAndVideoTracks, step, mediaError]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // If this app is deployed as a twilio function, don't change the URL because routing isn't supported.
    if (!window.location.origin.includes('twil.io')) {
      window.history.replaceState(null, '', window.encodeURI(`/room/${roomName}${window.location.search || ''}`));
    }
    setStep(Steps.deviceSelectionStep);
  };

  return (
    <IntroContainer>
      <MediaErrorSnackbar error={mediaError} />
      {step === Steps.roomNameStep && (
        <RoomNameScreen
          name={name}
          roomName={roomName}
          // roomName={c}

          setName={setName}
          // setRoomName={setRoomName}
          handleSubmit={handleSubmit}
        />
      )}

      {step === Steps.deviceSelectionStep && (
        <DeviceSelectionScreen name={name} roomName={roomName} setStep={setStep} />
      )}
    </IntroContainer>
  );
}
