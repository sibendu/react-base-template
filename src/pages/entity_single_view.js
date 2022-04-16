import React , { useState ,useEffect } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'; 
function EntitySingleView(props) {
    const [entity, setEntity] = useState(null);
    const [fieldData, setFieldData] = useState([]);
    useEffect(() => {  
        console.log("passed id:"+ props.Entityid); 
        setFieldData(props.Formprops.field_data);
        const requestbody = {
            service:props.Formprops.service,    
            operation: props.Formprops.dataload_operation + props.Entityid,
                requesttype:'get',
                requestbody:''
            };
            Axios.post('/invoke', requestbody)
                  .then(response => setEntity(response.data));     
    },[props.Entityid]);
    const handleEditClick = (id)=> {
        console.log('id clicked:'+ id);
        props.handleEditClick("EditForm",id);
      } 
    if (!entity) return null;
    return (
        <div id="layoutDrawer_content">
        
        <main>
        <div class="container-xl p-5">
        <React.Fragment>
            <div class="row">
                
                <div class="col-sm">
                <h3>{props.Formprops.form_title}</h3>
                </div>
                <div class="col-sm"></div>
                <div class="col-sm"></div>
                
                <div class="col-sm">
                <button type="button" class="btn btn-primary" onClick={()=>handleEditClick(entity[props.Formprops.column_id_column])}>{props.Formprops.form_edit_header}</button>
                </div>
            </div>
            <div>
                    <table class="table">
                        <tbody>
                            {fieldData.map(field =>
                                {
                                    return (<tr><td>{field.field_label}</td><td>{entity[field.field_name]}</td><td class="col-sm-6"></td></tr>)
                                })}
                        </tbody>
                    </table>  
            </div>
        </React.Fragment>
        </div>
        </main>
        </div>
    );
}
export default EntitySingleView;