import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../commen/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = ({profile, status, updateStatus,isOwner,savePhoto }) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelect = (e) => {
if (e.target.files.length) {
    savePhoto(e.target.files[0]);
}
    }


    return (
    <div>
    <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
 {isOwner && <input type={"file"} onChange={onMainPhotoSelect} />}
   
    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
 </div>
    );
}

export default ProfileInfo;

