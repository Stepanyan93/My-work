import React,{useState,useEffect} from 'react';


const ProfileStatusWithHook = (props) => {
        let [editMode,setEditMode] = useState(false);
        let [status,setStatus] = useState(props.profileStatus);

        useEffect(() => {
            setStatus(props.profileStatus)
        },[props.profileStatus]);

        let activateChangeStatus = () => {
            setEditMode(true);
        };
        let deactivateChangeStatus = () => {
            setEditMode(false);
            props.setuserprofilestatus(status)
        };
        let onChangeStatus = (e) => {
            setStatus(e.currentTarget.value)
        };

        return (
            <div>
                { !editMode &&
                <div>
                    <span onClick={activateChangeStatus} className={"alert alert-primary"}>{props.profileStatus || '---------'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input type="text" onChange={onChangeStatus}  autoFocus={true}  onBlur={deactivateChangeStatus} value={status} className={"form-control form-control-lg"} />
                </div>
                }
            </div>
        )

};

export default ProfileStatusWithHook;