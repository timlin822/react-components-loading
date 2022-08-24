import {FaSpinner} from 'react-icons/fa';

import './Loading.css';

const FaLoading=()=>{
    return (
        <div className="loading-fa">
            <FaSpinner className="loading-icon" />
        </div>
    );
}

export default FaLoading;