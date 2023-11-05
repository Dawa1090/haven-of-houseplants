

function StaffDetails({ currentStaff, logoutStaff }) {


    function handleClick() {
        logoutStaff()
    }
    return (
        <div>
            <h2>Welcome {currentStaff.staffname}!</h2>
            <button onClick={logoutStaff}>Logout</button>
        </div>
    );
}

export default StaffDetails;