const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  natureOfGoods: String,
  unitRate: String,
  quantity: String,
  vatRate: String,
  totalExclVAT: String,
  vatAmount: String,
  totalInclVAT: String,
  unit: String, // Add this field for Unit/Hour
  productDescription: String, // Add this field for Final Amount in Words
});

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  clientDetails: {
    clientName: String,
    clientAddress: String,
    clientDistrict: String,
    clientPostalCode: String,
    clientCountry: String,
    clientAddNo: String,
    clientVatNumber: String,
    clientCRN: String,
  },
  invoiceDetails: {
    invoiceDate: String,
    supplyDate: String,
    contractNo: String,
    invoicePeriod: String,
    projectRefNo: String,
  },
  products: [ProductSchema], // Updated ProductSchema
  totals: {
    totalExclVAT: String,
    totalVAT: String,
    totalInclVAT: String,
    balanceDue: String,
  },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
