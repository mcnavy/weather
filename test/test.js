import {convertTemp,apiCall} from "../usedFunctions/functions";


const chai = require('chai');
const sinon = require('sinon');

const expect = chai.expect;
const fakeTrue = sinon.stub().returns(200)
const fakeFalse = sinon.stub().returns(404)


describe('ApiCallStatus',() =>{
    it('Check if returns correct status with proper cityName',(done)=>{
        let resp =  apiCall('Paris')
        done()

       return Promise.resolve(resp).to.eventually.have.status(fakeTrue);

    })
    it('Check if returns correct status with bad cityName',(done)=>{
        let resp = apiCall('asd')
        done()
        let status = resp.status;
        expect(status).to.equal(fakeFalse)
    })



});
describe('CheckTemp',() =>{
    it('Check if temprature convers in the right way',()=>{
        let temp = convertTemp(282.39)
        expect(temp).to.equal(9.4);

    })
});