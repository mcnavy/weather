import {convertTemp,apiCall,getErrorData,getCorrectData} from "../usedFunctions/functions";


const sinon = require('sinon');
const mocha = require('mocha');
import chai, { expect } from "chai";

import { JSDOM } from 'jsdom';
const { document } = (new JSDOM('')).window;
global.document = document;

describe('ApiCallStatus',() =>{
    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();

        // this.requests;
        this.xhr.onCreate = function(xhr) {
            this.request = xhr;
        }.bind(this);
    });

    afterEach(function() {
        this.xhr.restore();
    });

    it('Check if returns correct status with proper cityName',function (done){
        const data = {};

        const xhr = apiCall('Paris');


        expect(xhr.status).to.deep.equal(200);
        done();

    });





});
describe('CheckTemp',() =>{
    it('Check if temprature convers in the right way',()=>{
        let temp = convertTemp(282.39)
        expect(temp).to.equal(9.4);

    })
});