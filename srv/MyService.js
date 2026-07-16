const cds = require("@sap/cds");
const { SELECT } = require("@sap/cds/lib/ql/cds-ql");
const { employees } = cds.entities('anubhav.db.master');

module.exports = (cds) => {
    const {ReadEmployeeSrv} = cds.entities;
    cds.on('hello', (req,res)=>{
        return 'Welcome ' + req.data.name + ' to my world of capm service';
    });

    cds.on('READ','ReadEmployeeSrv', async (req,res)=>{
        var oRecord = {
      "ID": "dummy",
      "nameFirst": "AJ",
      "nameMiddle": "Richard",
      "nameLast": "Styles",
      "nameInitials": null,
      "sex": "M",
      "language": "E",
      "phoneNumber": null,
      "email": "aj.styles@itelo.info",
      "loginName": "FALLF",
      "Currency_code": "USD",
      "salaryAmount": 85962,
      "accountNumber": "8877665544",
      "bankId": "121000358",
      "bankName": "My Bank of India"
        }
    var aEmp=[];

    // const tx = cds.tx(req);
    // aEmp = await tx.run(SELECT.from(employees).where(
    //     'salaryAmount>=50000'
    // ));
    aEmp.push(oRecord);
    return aEmp;
    });
  
}