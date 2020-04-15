class SubmitOrderService {

   /* async retrieveItems() {
        return Promise.resolve(this.items);
    }
    async getItem(itemLink) {
      for(var i = 0; i < this.items.length; i++) {
        if ( this.items[i].link === itemLink) {
          return Promise.resolve(this.items[i]);
        }
      }
      return null;
    }*/
    async createOrder(item) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(item)
    };
    fetch('http://localhost:8000/addOrderRequest', requestOptions)
        .then(response => 
            console.log(response.json))
        .then(data => console.log(data));
    }

    /*async deleteItem(itemId) {
      console.log("ItemService.deleteItem():");
      console.log("item ID:" + itemId);
    }
    async updateItem(item) {
      console.log("ItemService.updateItem():");
      console.log(item);
    }*/
  }
  export default SubmitOrderService;