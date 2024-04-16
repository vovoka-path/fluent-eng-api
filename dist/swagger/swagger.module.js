"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Swagger", {
    enumerable: true,
    get: function() {
        return Swagger;
    }
});
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const _config = require("./config");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const endPoint = '';
let Swagger = class Swagger {
    create(app, configData) {
        const config = new _swagger.DocumentBuilder().setTitle(configData.title).setDescription(configData.description).setVersion(configData.version).setContact(configData.contact.name, configData.contact.email, configData.contact.url).setLicense(configData.license.name, configData.license.url).addTag(configData.tag).build();
        const document = _swagger.SwaggerModule.createDocument(app, config);
        _swagger.SwaggerModule.setup(endPoint, app, document);
    }
    static getInfo(swagerInfo, name) {
        let paramByName = swagerInfo.filter((param)=>param.name && param.name === name)[0];
        if (!paramByName) {
            paramByName = {
                name,
                type: 'String',
                description: 'WARNING! Description is not correct.',
                required: false
            };
        }
        return paramByName;
    }
    constructor(app){
        this.create(app, _config.configData);
    }
};
Swagger = _ts_decorate([
    (0, _common.Module)({}),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _common.INestApplication === "undefined" ? Object : _common.INestApplication
    ])
], Swagger);
