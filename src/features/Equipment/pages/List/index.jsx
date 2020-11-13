import React, { useState, memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as EquipmentActions from "../../action";
import {
  Container,
  Table,
  Button,
  FormGroup,
  Label,
  Spinner,
} from "reactstrap";
import Select from "react-select";

const List = ({ getEquipments, equipmentList, isLoadingEquipments, testGraphql }) => {
  // const equipments = useSelector(state => state.equipmentReducer.equipments)
  // const dispatch = useDispatch()
  useEffect(() => {
    // dispatch({ 
    //   type: 'GET_EQUIPMENTS_REQUEST',
    //   actionSuccess: (rs) => { console.log(rs) }
    // })

    getEquipments((eq) => {
      // console.log(eq);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container>
        <div style={{ textAlign: "center", padding: 20 }}>
          <h3>List equipment</h3>
          <FormGroup>
            <Label for="assignmentId">Assignment</Label>
            <Select name="assign" id="assignmentId" />
          </FormGroup>
          <Link to="/equipment/add">
            <Button type="submit" color="primary">
              Add new
            </Button>
          </Link>
        </div>

        {isLoadingEquipments && <Spinner animation="border" />}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((e, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{e.name}</td>
                <td>
                  <Link to={`/equipment/edit/${e._id}`} style={{ marginRight: 10 }}>
                    <Button color="success">Edit</Button>
                  </Link>
                  <Link to="/equipment/add">
                    <Button color="danger">Delete</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

List.propTypes = {};

const mapStateToProps = ({ equipmentReducer }) => {
  return {
    equipmentList: equipmentReducer.equipments,
    isLoadingEquipments: equipmentReducer.isLoadingEquipments,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getEquipments: (actionSuccess) =>
      dispatch(EquipmentActions.getEquipmentsRequest(actionSuccess)),
    testGraphql: () => dispatch(EquipmentActions.testGraphqlRequest())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(List));
