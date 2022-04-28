const Joi = require('joi');
const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
    unique : true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30
  },
  domicile: {
    type: String,
    required: true,
    maxlength: 50
  },
  type: {
    type: String,
    required: type,
    maxlength: 50
  },
  status: {
    type: String,
    required: false,
    deafult: 'New',
    maxlength: 30
  },
  legal_name: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 512
  },
  legal_name_local: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 512
  },
  other_name: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 255
  },
  financial_year_end: {
    type: String,
    required: false,
    maxlength: 30
  },
  tax_id: {
    type: String,
    required: false,
    maxlength: 30
  },
  giin: {
    type: String,
    required: false,
    maxlength: 30
  },
  lei: {
    type: String,
    required: false,
    maxlength: 30
  },
  bic: {
    type: String,
    required: false,
    maxlength: 30
  },
  reg_no: {
    type: String,
    required: false,
    maxlength: 30
  },
  extern_id1: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
    maxlength: 30
  },
  extern_id2: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
    maxlength: 30
  },
  extern_id3: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
    maxlength: 30
  },
  extern_id4: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
    maxlength: 30
  },
  extern_id5: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
    maxlength: 30
  },
  extern_id6: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
    maxlength: 30
  },
  comment: {
    type: String,
    required: false,
    maxlength: 1024
  }
});

const Entity = mongoose.model('Entity', entitySchema);

function validateEntity(entity){
  const schema = Joi.object({
    first_name : Joi.string().min(2).max(255).required(),
    last_name : Joi.string().min(2).max(255).required()
  });

  return schema.validate(entity);
}

exports.Entity = Entity;
exports.validate = validateEntity;