import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Footer from "../../common/Footer";

const NewTask = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (

    <div id="layoutDrawer_content">
        
        <main>
            
            <div className="container-xl p-5">
                
                <div className="card card-raised">
                    <div className="card-header bg-primary text-white px-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="me-4">
                                <h2 className="card-title text-white mb-0">Tasks</h2>
                                <div className="card-subtitle">Details and history</div>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn btn-lg btn-text-white btn-icon" type="button"><i className="material-icons">download</i></button>
                                <button className="btn btn-lg btn-text-white btn-icon" type="button"><i className="material-icons">print</i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-4">

                    <DataGrid
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                      disableSelectionOnClick
                      autoHeight={true}
                      autoWidth={true}
                      rowHeight={25}
                      excomponents={{ Toolbar: GridToolbar }} 
                    />
                       
                    </div>
                </div>
            </div>
        </main>

        <Footer/>  
    </div>
    
    );
  };
  
export default NewTask;