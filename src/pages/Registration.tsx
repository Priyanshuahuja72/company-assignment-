import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles } from "@material-ui/core"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
const useStyle = makeStyles({
    formInput: {
        marginBottom: 40,
    },
    formButton: {
        width: "20%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    formSection: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        paddingTop: 20,
    }
})
const Registration:React.FC = () => {
    const classes = useStyle();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    //this is for navigation purpose;
    const navigate = useNavigate();

    const furtherData = () => {
        if (name == "" || phone == "" || mail == "") {
            //if anything form the input is empty then navigate to first with a alert message. 
            navigate('/');
            //this is an alert message.
            alert("You must enter proper details before accessing the page.");
        }
        else {
            //creating a data object over here 
            const data = {
                Name: name,
                PhoneNumber: phone,
                Email: mail,
            }
            // Now storing that data into the local storage 
            localStorage.setItem("data", JSON.stringify(data));
            //Navigation to the second page 
            navigate("/second");
        }
    }

    const handleChange = () => {
        // Calling the function
        furtherData();
    }
    return (
        <div className={classes.formSection}>
            <h1>Registration Form</h1>
            <div className="form-component">
                <FormGroup>
                    <FormControl className={classes.formInput}>
                        <InputLabel>Name</InputLabel>
                        <Input placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>
                    <FormControl className={classes.formInput}>
                        <InputLabel>Phone Number</InputLabel>
                        <Input placeholder='Enter Your Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </FormControl>
                    <FormControl className={classes.formInput}>
                        <InputLabel>Email</InputLabel>
                        <Input placeholder='Enter Your Email' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </FormControl>
                    <Button variant="contained" color='primary' className={classes.formButton} onClick={() => handleChange()}>Submit</Button>
                </FormGroup>
            </div>
        </div>
    )
}

export default Registration
