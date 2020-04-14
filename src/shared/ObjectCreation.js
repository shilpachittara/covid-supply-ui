class ObjectCreation {
  orderObject(inputData, category) {
    let address = {
      addressLine1:'',
      addressLine2:'',
      state:'',
      city:'',
      pinCode:''}
    let contactDetail = {
      name:'',
      email:'',
      phoneNumber:''
    }  
    let order = {
      organizationName:'',
      organizationType:'',
      technicalFromBuyer:'',
      quantity:'',
      address:{},
      contactDetail:{},
      category: []
    }
    console.log(inputData)

    if(inputData.quantity){
      order.quantity=inputData.quantity
    }
    if(inputData.organizationName){
      order.organizationName=inputData.organizationName
    }
    if(inputData.organizationType){
      order.organizationType=inputData.organizationType
    }
    if(inputData.technicalFromBuyer){
      order.technicalFromBuyer=inputData.technicalFromBuyer
    }
    if(inputData.addressLine1 && inputData.state && inputData.city && inputData.pinCode){
      address.addressLine1 =inputData.addressLine1
      address.state =inputData.state
      address.city =inputData.city
      address.pinCode =inputData.pinCode
      if(inputData.addressLine2){
        address.addressLine2 =inputData.addressLine2
      }
      order.address=address
    }
    
    if(inputData.name && inputData.email && inputData.phoneNumber){
      contactDetail.name =inputData.name
      contactDetail.email =inputData.email
      contactDetail.phoneNumber =inputData.phoneNumber
      order.contactDetail=contactDetail
    }

    console.log("category", category)
    let categoryList = this.categoryObject(category)
    
    console.log("requestObject", order)
    return order;
  }

  categoryObject(inputData){
    let category = [{category:'',
      products: [
        {
          productId:'',
          quantity: ''
        }
      ]
    }]
    let categoryList =[]
    return categoryList
  }
}



/*
  "category": [
    {
      "category": "string",
      "products": [
        {
          "productId": "string",
          "quantity": 0
        }
      ]
    }
  ],
 
}
        */
export default ObjectCreation;