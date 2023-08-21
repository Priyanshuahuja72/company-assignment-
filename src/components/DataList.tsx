import React  , {useState , useEffect} from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid'
import { IUsers } from "../models/IUsers";
import { UsersService } from "../services/UsersService";
import Loading from "./Loading";


//creating an initial state for useState hook
interface IState{
    loading: Boolean,
    users: IUsers[],
    errorMsg: string 
}

const DataList:React.FC = () =>  {
    //creating hook for getting the data
    const[data , setData] = useState<IState>({
        loading: false,
        users: [] as IUsers[],
        errorMsg: '',
    })

//creating a function for calling the data in a list
  const CallingDataList = () => {
    setData({...data , loading: true})
   UsersService.getAllUsers()
   .then((res) => 
    setData({
      ...data,
      loading: false,
      users: res.data
    })
   )
   .catch(error => 
    setData({
      ...data,
      loading:false,
      errorMsg: error.message,
    })
    )
  }

//Network Request at Initial Time
useEffect(() => {
    CallingDataList();
} , [])

// destructoring the state 
const {loading , users , errorMsg} = data;

console.log(users)

//Now let's come to grid section
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'UserID',
      headerName: 'UserID',
      width: 150,
      editable: false,
      type: "string"
    },
    {
      field: 'Title',
      headerName: 'Title',
      width: 600,
      editable: false,
      type: "string"
    },
    {
      field: 'Description',
      headerName: 'Description',
      type: 'string',
      width: 600,
      editable: false,
    },
  ];
  //Mapping the data into the rows which we are getting the data from api
  const rows = users.map((row , id) => ({
    id: id+1,
    UserID: row.userId,
    Title: row.title,
    Description: row.body,
  }))
  //Now Displaying the data from the display grid
  return (
    <>
    {/* if there is an error then show the error message */}
    {errorMsg && (<p>Oops Something Went Wrong....</p>)}
    {/* If data loads then show laoder from laoder component */}
    {loading && <Loading/>}
    {/* checking the data length */}
    {users.length > 0 &&
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
    />
  </Box>
  }
  </>
  );
}

export default DataList;