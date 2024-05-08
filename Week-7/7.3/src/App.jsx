import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'
import { useMemo } from 'react';

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp(){
  const networkNoficationCount =  useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  //useRecoilState() gives us 2 things similar to useState ,
  //1st the actual value 
  //2nd A way to update the value 
  //similarly if we want to update a variable we need to use the useRecoilState hook and not the useRecoilValue hook
  const [messagingNotificationCount, setMessagingNotificationCount] = useRecoilState(messagingAtom);
  const notificationsNotificationCount = useRecoilValue(notificationsAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  //Ugly approach -> we are not memoizing this value we have not used the useMemo hook 
  // const totalNotificationCount = useMemo(()=>{
  //   return networkNoficationCount + jobsNotificationCount + messagingNotificationCount + notificationsNotificationCount;
  // }, [networkNoficationCount, jobsNotificationCount, messagingNotificationCount, notificationsNotificationCount])

  return (
    <>
    <button>Home</button>

    {/* These brackets will have some number that i need to write inside which represents the current amount of notifications you have */}
    <button>My network ({networkNoficationCount >= 100 ? "99+" : networkNoficationCount})</button>
    <button>Jobs ({jobsNotificationCount})</button>  
    <button>Messaging ({messagingNotificationCount})</button>
    <button>Notifications  ({notificationsNotificationCount >= 100 ? "99+" : notificationsNotificationCount})</button>

    <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
