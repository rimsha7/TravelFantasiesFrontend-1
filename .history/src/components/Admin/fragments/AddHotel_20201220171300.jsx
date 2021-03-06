import {
  CssBaseline,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import ImageUploader from "react-images-upload";
import AppBarComponenet from "./AppBar";
import hotelCategoryService from "../../../services/HotelCategoryService";
import Map from "./Map";
import { Col, Form, InputGroup } from "reactstrap";
const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

// class addHotel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       HotelName: " ",
//       Location: " ",
//       selectedFile: [],
//       Address: " ",
//       Contactno: " ",
//       Website: " ",
//       Facilities: " ",
//       Status: "Yes",
//       Cost: 0,
//       lat: 0,
//       lng: 0,
//       ImageName: " ",
//       Categories: [],
//       SelectedCategory: 0,
//     };
//     this.onDrop = this.onDrop.bind(this);
//     this.handleHotelNameChange = this.handleHotelNameChange.bind(this);
//     this.handleLocationChange = this.handleLocationChange.bind(this);
//     this.handleAddressChange = this.handleAddressChange.bind(this);
//     this.handleContactnoChange = this.handleContactnoChange.bind(this);
//     this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
//     this.handleFacilitiesChange = this.handleFacilitiesChange.bind(this);
//     this.handleStatusChange = this.handleStatusChange.bind(this);
//     this.handleCostChange = this.handleCostChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.change = this.change.bind(this);
//     this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
//   }
//   componentDidMount() {
//     hotelCategoryService
//       .getHotelCategory(this.props.page, this.props.perPage)
//       .then((data) => {
//         this.setState({ Categories: data });
//         console.log(this.state.Categories);
//         // setTotal(data.total);
//         // setPerPage(10);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   handleHotelNameChange(event) {
//     this.setState({ HotelName: event.target.value });
//   }
//   handleLocationChange(event) {
//     this.setState({ Location: event.target.value });
//   }
//   handleAddressChange(event) {
//     this.setState({ Address: event.target.value });
//   }
//   handleContactnoChange(event) {
//     this.setState({ Contactno: event.target.value });
//   }
//   handleCheckInChange(event) {
//     this.setState({ CheckIn: event.target.value });
//   }
//   handleCheckOutChange(event) {
//     this.setState({ CheckOut: event.target.value });
//   }

//   handleWebsiteChange(event) {
//     this.setState({ Website: event.target.value });
//   }
//   handleFacilitiesChange(event) {
//     this.setState({ Facilities: event.target.value });
//   }
//   handleStatusChange(event) {
//     this.setState({ Status: event.target.value });
//   }
//   handleCostChange(event) {
//     this.setState({ Cost: event.target.value });
//   }

//   onDrop(event) {
//     this.setState({
//       selectedFile: event.target.files,
//     });
//   }
//   change = async (event) => {
//     this.setState({ SelectedCategory: event.target.value });
//   };

//   handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("HotelName", this.state.HotelName);
//     formData.append("Location", this.state.Location);
//     formData.append("Address", this.state.Address);
//     formData.append("Contactno", this.state.Contactno);
//     formData.append("Status", this.state.Status);
//     formData.append("Cost", this.state.Cost);
//     formData.append("Website", this.state.Website);
//     formData.append("Facilities", this.state.Facilities);
//     formData.append("Category", this.state.SelectedCategory);
//     formData.append("Latitude", this.state.lat);
//     formData.append("Longitude", this.state.lng);
//     for (var x = 0; x < this.state.selectedFile.length; x++) {
//       formData.append("file", this.state.selectedFile[x]);
//     }
//     console.log(this.state);
//     console.log(formData);
//     const data = this.state;
//     hotelService
//       .addHotel(formData)
//       .then((response) => {
//         alert(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   onMarkerDragEnd = (event) => {
//     this.setState({ lat: event.latLng.lat() });
//     this.setState({ lng: event.latLng.lng() });
//     // console.log(event.latLng.lat());
//     // console.log(event.latLng.lng());
//   };
//   // onMarkerDragEnd() {
//   //   console.log("xjz");
//   // }
//   render() {
//     return (
//       <div style={{ marginTop: "100px", marginLeft: "200px" }}>
//         <CssBaseline />
//         <h1 style={{ position: "relative", textAlign: "center", fontSize: 50 }}>
//           Add New Hotel
//         </h1>
//         <form
//           onSubmit={this.handleSubmit}
//           enctype="multipart/form-data"
//           style={{
//             marginBottom: "30px",
//             paddingLeft: "30px",
//             paddingRight: "300px",
//             borderColor: "black",
//             borderRadius: "30px",
//             borderStyle: "bold",
//           }}
//         >
//           <Grid container spacing={4}>
//             <Grid item xs={1}></Grid>
//             <Grid item xs={5}>
//               <h3>Select Hotel Category</h3>
//               <select
//                 onChange={this.change}
//                 value={this.state.SelectedCategory}
//               >
//                 {this.state.Categories.map((Category, index) => (
//                   <option key={Category._id} value={Category._id}>
//                     {" "}
//                     {Category.CategoryName}{" "}
//                   </option>
//                 ))}
//               </select>
//             </Grid>

//             <Grid item xs={1}></Grid>
//             <Grid item xs={5}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label>
//                     <h3>Hotel Name:</h3>
//                   </label>
//                 </div>
//                 <div class="col-sm">
//                   <TextField
//                     id="outlined-basic"
//                     variant="outlined"
//                     name="Hotel_Name"
//                     fullWidth
//                     value={this.state.HotelName}
//                     onChange={this.handleHotelNameChange}
//                   />
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={1}></Grid>

//             <Grid item xs={5}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label>
//                     <label>
//                       <h3>Location:</h3>
//                     </label>
//                     <TextField
//                       id="outlined-basic"
//                       variant="outlined"
//                       name="Location"
//                       fullWidth
//                       value={this.state.Location}
//                       onChange={this.handleLocationChange}
//                     />
//                   </label>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={1}></Grid>
//             <Grid item xs={5}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label>
//                     <h3> Contact Number:</h3>
//                   </label>
//                 </div>
//                 <div class="col-sm">
//                   <TextField
//                     id="outlined-basic"
//                     variant="outlined"
//                     fullWidth
//                     name="Contact_No"
//                     value={this.state.Contactno}
//                     onChange={this.handleContactnoChange}
//                   />
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={1}></Grid>

//             <Grid item xs={5}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label>
//                     <h3>Address: </h3>
//                   </label>
//                 </div>
//                 <div class="col-sm">
//                   <TextField
//                     id="outlined-basic"
//                     variant="outlined"
//                     fullWidth
//                     name="Address"
//                     value={this.state.Address}
//                     onChange={this.handleAddressChange}
//                   />
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={1}></Grid>

//             <Grid item xs={5}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label>
//                     <h3>Website:</h3>
//                   </label>
//                 </div>
//                 <div class="col-sm">
//                   <TextField
//                     id="outlined-basic"
//                     variant="outlined"
//                     name="Website"
//                     fullWidth
//                     value={this.state.Website}
//                     onChange={this.handleWebsiteChange}
//                   />
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={1}></Grid>

//             <Grid item xs={5}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label>
//                     <h3>Facilities to be Provided:</h3>
//                   </label>
//                 </div>
//                 <div class="col-sm">
//                   <TextField
//                     id="outlined-multiline-static"
//                     multiline
//                     fullWidth
//                     name="Facilities"
//                     rows={4}
//                     cols={3}
//                     // defaultValue="Default Value"
//                     variant="outlined"
//                     value={this.state.Facilities}
//                     onChange={this.handleFacilitiesChange}
//                   />
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={1}></Grid>
//             <Grid item xs={5}>
//               {/* //className={classes.formControl} */}
//               <FormControl variant="outlined" fullWidth>
//                 <InputLabel id="demo-simple-select-outlined-label">
//                   Availability Status
//                 </InputLabel>
//                 <Select
//                   labelId="demo-simple-select-outlined-label"
//                   id="demo-simple-select-outlined"
//                   value={this.state.Status}
//                   onChange={this.handleStatusChange}
//                   label="Age"
//                   fullWidth
//                 >
//                   <MenuItem value="">
//                     <em>Select</em>
//                   </MenuItem>
//                   <MenuItem value={"Yes"}>Yes</MenuItem>
//                   <MenuItem value={"No"}>No</MenuItem>
//                 </Select>
//               </FormControl>
//               {/* <TextField
//                     id="outlined-basic"
//                     variant="outlined"
//                     name="Status_status"
//                     fullWidth
//                     value={this.state.Status}
//                     onChange={this.handleStatusChange}
//                   /> */}
//             </Grid>
//             <Grid item xs={1}></Grid>

//             <Grid item xs={5}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label>
//                     <h3>Cost:</h3>
//                   </label>
//                 </div>
//                 <div class="col-sm">
//                   <TextField
//                     id="outlined-basic"
//                     variant="outlined"
//                     name="Overall_Rating"
//                     value={this.state.Ratings}
//                     onChange={this.handleCostChange}
//                   />
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={1}></Grid>

//             <Grid item xs={5}>
//               <div class="row">
//                 <div class="col-sm">
//                   <label>
//                     <h3> Images:</h3>
//                   </label>
//                 </div>
//                 <div class="col-sm">
//                   <input
//                     type="file"
//                     name="file"
//                     multiple
//                     onChange={this.onDrop}
//                   />
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={1}></Grid>
//           </Grid>
//           <button
//             variant="contained"
//             style={{
//               color: "blue",
//               position: "absolute",
//               left: "50%",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             {" "}
//             Add new Hotel{" "}
//           </button>
//         </form>
//         <Map onMarkerDrag={this.onMarkerDragEnd} />
//       </div>
//     );
//   }
// }
const { Formik } = formik;

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.string().required(),
  terms: yup.bool().required(),
});

export default function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "Mark",
        lastName: "Otto",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik101">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik102">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik103">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik104">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik105">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              onChange={handleChange}
              isInvalid={!!errors.file}
              feedback={errors.file}
              id="validationFormik107"
              feedbackTooltip
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<FormExample />);
