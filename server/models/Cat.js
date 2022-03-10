const mongoose = require('mongoose');

//cat model - ref to DB
//cat schema - how info will be stored in the db
let CatModel = {};


const CatSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true, //only will store text, not the spaces
            unique: true, //no cats with same name
        },
        bedsOwned:{
            type: Number,
            min: 0,
            required: true,
        },
        createdDate:{
            type: Date,
            default: Date.now, //looks at the time on the system and store that date
        },
    }
);//end cat schema

//can also have static fns attached to Schemas
CatSchema.statics.findByName = (name, callback) => {
    const search = {
        name,
    };

    //findOne is built into the DB
    return CatModel.findOne(search, callback);
};

CatModel = mongoose.model('Cat', CatSchema);

module.exports.CatModel = CatModel;
module.exports.CatSchema = CatSchema;