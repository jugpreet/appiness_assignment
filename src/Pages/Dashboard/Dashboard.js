import { useSelector, useDispatch } from "react-redux";
import { routes } from "../../Config/routes";
import { useHistory } from "react-router";
import { useEffect } from "react";
import './Dashboard.css'
import { tableDataAction,logout } from "../../Services/action";
const Dashboard = () => {
  const tableData = useSelector((state) => state.data?.tableData?.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(tableDataAction());
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    
    return () => {
      localStorage.clear();
      dispatch(logout())
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const handleLogout = () => {
    try {
      localStorage.clear();
    dispatch(logout())
    history.push(routes.login.path);      
    } catch (error) {
     console.log(error); 
    }
  };
  return (
    <div className='maindashboard'>
      <div className='dashboard-header'><span  className='dashboard-title'>Dashboard</span>
      <button className='logout-button' onClick={handleLogout}>Logout</button></div>
      <div className='dashboard'>
      <table>
        <tr>
          {tableData &&
            Object.keys(tableData[0])?.map((data) => {
              return <th key={data}>{data}</th>;
            })}{" "}
        </tr>
        {tableData &&
          tableData.map((data) => {
            return (
              <tr key={data.email}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
                <td>{data.phoneNo}</td>
              </tr>
            );
          })}
      </table>
      </div>
    </div>
  );
};
export default Dashboard;
