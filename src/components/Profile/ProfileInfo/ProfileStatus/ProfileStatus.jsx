// import React from 'react';
//
//
// class ProfileStatus1 extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.profileStatus
//     };
//     activateChangeStatus = () => {
//         this.setState({
//             editMode:true
//         })
//     };
//     deactivateChangeStatus = () => {
//         this.setState({
//             editMode:false
//         });
//         this.props.setuserprofilestatus(this.state.status)
//     };
//     onChangeStatus = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     };
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.profileStatus !== this.props.profileStatus){
//             this.setState({
//                 status: this.props.profileStatus
//             })
//         }
//
//     }
//
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={this.activateChangeStatus}>{this.props.profileStatus}</span>
//                 </div>
//                 }
//                 {this.state.editMode &&
//                 <div>
//                     <input type="text" onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateChangeStatus.bind(this)} value={this.state.status}/>
//                 </div>
//                 }
//             </div>
//         )
//     }
// }
//
// export default ProfileStatus1;