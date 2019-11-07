import {convertTemp,apiCall} from "../testedFunctions/functionsToBeTested";

const mocha = require('mocha');
const chai = require('chai');


const expect = chai.expect;



describe('ApiCallStatus',() =>{
    it('Check if returns correct status',(done)=>{
        let resp = apiCall('Paris')
        done();
        let status = resp.status;
        expect(status).to.equal(200);

    })
});
describe('CheckTemp',() =>{
    it('Check if temprature convers in the right way',()=>{
        let temp = convertTemp(282.39)
        expect(temp).to.equal(9.4);

    })
});