module.exports = {

    read: (req,res,next) => {
        const db = req.app.get('db');
        db.get_inventory().then(products => {
            console.log(products);
            res.status(200).json(products);
        })
        
    },

    create: (req,res,next) => {
        const db = req.app.get('db');
        const {name,price,img} = req.body;
        db.create_product([name,price,img]).then(response => {
            res.status(200).json(response);
        })

    },
    update: (req,res,next) => {

    },
    delete: (req,res,next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product([id]).then( () => res.sendStatus(200) )
    },

};