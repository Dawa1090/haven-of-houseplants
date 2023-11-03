

function StaffDetails({ currentStaff, logoutStaff }) {


    function handleClick() {
        logoutStaff()
    }
    return (
        <div>
            <h2>Welcome {currentStaff.staffname}!</h2>
        
        </div>
    );
}

export default StaffDetails;