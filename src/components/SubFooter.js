import './SubFooter.css';

function SubFooter() {
    return (
        <div className="subfooter">
            <p>© {new Date().getFullYear()} CVA Multi Services Nigeria Ltd. All rights reserved.</p>
            <p>Plot 4, Iwofe Road, Rivers State, Nigeria | +234 703 375 4215, +234 703 810 0100</p>
        </div>
    );
}

export default SubFooter;
