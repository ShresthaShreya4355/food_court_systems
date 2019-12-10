
exports.FindCustomer(req,res)
    Customer.find().then(function(customer_data){
        res.send(customer_data);
    }).catch(function(e){
        res.send(e);
    })

