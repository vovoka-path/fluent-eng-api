"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _databaseservice = require("./database.service");
describe('DatabaseService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _databaseservice.DatabaseService
            ]
        }).compile();
        service = module.get(_databaseservice.DatabaseService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});
