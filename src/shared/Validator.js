class Validator {

    validateOrder(inputData) {
      let errorMsg = "";
      if(!inputData.organizationName) {
        errorMsg +="Please enter name of organization.\n"
      }
      if(!inputData.organizationType) {
        errorMsg +="Please select type of organization.\n"
      }
      if(!inputData.addressLine1) {
        errorMsg +="Please enter address detail.\n"
      }
      if(!inputData.state) {
        errorMsg +="Please enter your state.\n"
      }
      if(!inputData.city) {
        errorMsg +="Please enter your city.\n"
      }
      if(!inputData.pincode) {
        errorMsg +="Please enter pincode.\n"
      }
      if(!inputData.email) {
        errorMsg +="Please enter your email.\n"
      }
      if(!inputData.phoneNumber) {
        errorMsg +="Please enter your contact number.\n"
      }

      if(errorMsg.length === 0){
        return true;
      } else {
        alert(errorMsg);
        return false;
      }
    }
  }
 
  export default Validator;