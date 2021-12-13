import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../commen/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (<div>
{/* <div className={s.image}>
      <img src='https://w-dog.ru/wallpapers/10/0/431531185389227/podsolnux-solnce-leto-priroda.jpg'></img>
    </div> */}

    <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
    ava + description
    </div>
    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>

    );
}

export default ProfileInfo;

