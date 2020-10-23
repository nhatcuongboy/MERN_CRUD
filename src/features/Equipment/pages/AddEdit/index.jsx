import React, { useState, memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { useHistory, useParams, Link } from 'react-router-dom';
import * as EquipmentActions from "../../action";
import {
  Container,
  Button,
  FormGroup,
  Spinner,
  Label,
  Form,
  Input,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const AddEdit = ({ equipmentList, isAddingEquipment, addEquipment, getEquipmentById, editEquipment }) => {
  const typeOptions = [
    { value: "pc", label: "PC" },
    { value: "laptop", label: "Laptop" },
  ]
  const statusOptions = [
    { value: "new", label: "New" },
    { value: "old", label: "Old" },
  ]
  
  const history = useHistory();
  const { equipmentId } = useParams();
  const [equipment, setEquipment] = useState({})

  useEffect(()=> {
    if (equipmentId) {
      getEquipmentById(equipmentId, (equipment) =>{
        setEquipment(equipment)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[equipmentId])

  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = (values) => {
    // console.log(values);
    const data = {
      name: values.name,
      type: values.type.value,
      status: values.status.value,
    }
    if (values.description) {
      data.description = values.description
    }
    if (values.assign) {
      data.assign = values.assign.value
    }
    if (equipmentId) {
      editEquipment(equipmentId, data, () => {
        history.push('/equipment')
      })
    } else {
      addEquipment(data, () => {
        history.push('/equipment')
      })
    }
  };
 
  return (
    <div>
      <Container>
        <div style={{ padding: 20, textAlign: "center" }}>
          <h3>Add equipment</h3>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="nameId">Name *</Label>
            <Input
              name="name"
              id="nameId"
              placeholder="Enter name"
              defaultValue={equipment.name}
              innerRef={register({
                required: "Required",
              })}
              style={{ border: errors.name ? '1px solid red' : ''}}
            />
            <p style={{color: 'red'}}>{errors.name && errors.name.message}</p>
          </FormGroup>
          <FormGroup>
            <Label for="typeId">Type *</Label>
            <Controller
              name="type"
              as={Select}
              control={control}
              options={typeOptions}
              defaultValue={equipment.type}
              rules={{ required: 'Choose type' }}
              style={{ border: errors.type ? '1px solid red' : ''}}
            />
            <p style={{color: 'red'}}>{errors.type && errors.type.message}</p>
          </FormGroup>
          <FormGroup>
            <Label for="statusId">Status *</Label>
            <Controller
              name="status"
              as={Select}
              control={control}
              options={statusOptions}
              defaultValue={equipment.status}
              rules={{ required: 'Choose status' }}
              style={{ border: errors.status ? '1px solid red' : ''}}
            />
            <p style={{color: 'red'}}>{errors.status && errors.status.message}</p>
          </FormGroup>
          <FormGroup>
            <Label for="descriptionId">Desciption</Label>
            <Input name="description" type="textarea" id="descriptionId" innerRef={register} />
          </FormGroup>
          <FormGroup>
            <Label for="assignId">Assign to</Label>
            {/* <Select name="assign" id="assignId" options={options} innerRef={register} /> */}
            <Controller
              name="assign"
              as={Select}
              options={[]}
              control={control}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" color={equipmentId ? 'success' : 'primary'}>
              {equipmentId ? 'Save' : 'Create'}
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

AddEdit.propTypes = {};

const mapStateToProps = ({ equipmentReducer }) => {
  return {
    equipmentList: equipmentReducer.equipments,
    isAddingEquipment: equipmentReducer.isAddingEquipment,
    isLoadingEquipment: equipmentReducer.isLoadingEquipment,
    currentEquipment: equipmentReducer.equipment,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addEquipment: (data, actionSuccess) =>
      dispatch(EquipmentActions.addEquipmentRequest(data, actionSuccess)),
    getEquipmentById: (id, actionSuccess) =>
      dispatch(EquipmentActions.getEquipmentByIdRequest(id, actionSuccess)),
    editEquipment: (id, data, actionSuccess) =>
      dispatch(EquipmentActions.editEquipmentRequest(id, data, actionSuccess)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AddEdit));
