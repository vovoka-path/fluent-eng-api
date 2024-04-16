// import { User } from './entities/user.entity';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersService", {
    enumerable: true,
    get: function() {
        return UsersService;
    }
});
const _databaseservice = require("../../database/database.service");
const _common = require("@nestjs/common");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UsersService = class UsersService {
    create(createUserDto) {
        return this.databaseService.user.create({
            data: createUserDto
        });
    }
    findAll() {
        return this.databaseService.user.findMany();
    }
    async findOneById(id) {
        const user = await this.databaseService.user.findUnique({
            where: {
                id
            }
        });
        if (!user) {
            throw new _common.HttpException(`User with id = ${id} is not found!`, _common.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findOneByEmail(email) {
        const user = await this.databaseService.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            throw new _common.HttpException(`User with ${email} is not found!`, _common.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.databaseService.user.update({
                where: {
                    id
                },
                data: updateUserDto
            });
            return user;
        } catch (error) {
            throw new _common.HttpException(`User #${id} is not found!`, _common.HttpStatus.NOT_FOUND);
        }
    }
    async remove(id) {
        try {
            const user = await this.databaseService.user.delete({
                where: {
                    id
                }
            });
            return user;
        } catch (error) {
            throw new _common.HttpException(`User with id = ${id} is not found!`, _common.HttpStatus.NOT_FOUND);
        }
    }
    // db: DatabaseService;
    constructor(databaseService){
        _define_property(this, "databaseService", void 0);
        this.databaseService = databaseService;
    // this.db = databaseService;
    }
};
UsersService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _databaseservice.DatabaseService === "undefined" ? Object : _databaseservice.DatabaseService
    ])
], UsersService);
