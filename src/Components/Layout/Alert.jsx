import {useContext} from 'react'
import alertContext from '../../Context/Alert/Context'

const Alert = () => {
  const context = useContext(alertContext) ;
  return (
    context.alert !== null && (
      <div className={`alert alert-${context.alert.type}`}>
        <i className='fa fa-info-circle'/>  {context.alert.msg}
      </div>
    )
  );
};

export default Alert