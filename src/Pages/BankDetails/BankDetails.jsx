import {useLocation} from 'react-router-dom';

const BankDetails = () => {
    const location = useLocation();
    return (
    <>{JSON.stringify(location.state)}</>
    )
}
export default BankDetails;