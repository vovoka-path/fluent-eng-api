"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UsersController", {
    enumerable: true,
    get: function() {
        return UsersController;
    }
});
const _common = require("@nestjs/common");
const _usersservice = require("./users.service");
const _createuserdto = require("./dto/create-user.dto");
const _swagger = require("@nestjs/swagger");
const _userentity = require("./entity/user.entity");
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
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
const endpoint = 'users';
let UsersController = class UsersController {
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findOneByEmail(email) {
        return this.usersService.findOneByEmail(email);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOneById(id) {
        return this.usersService.findOneById(+id);
    }
    update(updateUserDto, id) {
        return this.usersService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.usersService.remove(+id);
    }
    constructor(usersService){
        _define_property(this, "usersService", void 0);
        this.usersService = usersService;
    }
} // -------------------
 // @ApiResponse({
 // status: 200,
 // schema: {
 //   additionalProperties: {
 //     name: 'john@mailcom',
 //     password: '123456',
 //   },
 // },
 // description: 'The found record',
 // type: Object.assign({
 //   email: 'john@mailcom',
 //   password: '123456',
 // }),
 // })
 // @ApiProperty({
 //   type: Object,
 //   description: JSON.stringify({
 //     email: 'john@mailcom',
 //     password: '123456',
 //   }),
 //   // minimum: 1,
 //   // default: 1,
 //   examples: {
 //     email: 'john@mailcom',
 //     password: '123456',
 //   },
 // })
 // @ApiProperty({
 //   example: {
 //     email: 'john@mailcom',
 //     password: '123456',
 //   },
 // })
 // @ApiBody({
 //   type: [CreateUserDto],
 // })
 // @ApiParam(Swagger.getInfo(swaggerInfo, 'create'))
;
_ts_decorate([
    (0, _common.Post)(),
    (0, _swagger.ApiOperation)({
        summary: 'Create a new user. Return user data with id.'
    }),
    (0, _swagger.ApiCreatedResponse)({
        type: _userentity.UserEntity,
        description: 'The user has been successfully created.'
    }),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _createuserdto.CreateUserDto === "undefined" ? Object : _createuserdto.CreateUserDto
    ])
], UsersController.prototype, "create", null);
_ts_decorate([
    (0, _common.Get)('search/'),
    (0, _swagger.ApiOperation)({
        summary: 'Get user by email.'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _userentity.UserEntity,
        description: 'Search result by email.'
    }),
    _ts_param(0, (0, _common.Query)('email')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ])
], UsersController.prototype, "findOneByEmail", null);
_ts_decorate([
    (0, _common.Get)(),
    (0, _swagger.ApiOperation)({
        summary: 'Get all users.'
    }),
    (0, _swagger.ApiOkResponse)({
        type: [
            _userentity.UserEntity
        ],
        description: 'All users have been successfully received.'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], UsersController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _swagger.ApiOperation)({
        summary: 'Get user by id.'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _userentity.UserEntity,
        description: 'User with specific "id" has been successfully received.'
    }),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ])
], UsersController.prototype, "findOneById", null);
_ts_decorate([
    (0, _common.Patch)(':id'),
    (0, _swagger.ApiOperation)({
        summary: 'Update user by id.'
    }),
    (0, _swagger.ApiBody)({
        type: _createuserdto.CreateUserDto
    }),
    (0, _swagger.ApiOkResponse)({
        type: _userentity.UserEntity,
        description: 'The user has been successfully updated.'
    }),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof Partial === "undefined" ? Object : Partial,
        String
    ])
], UsersController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _swagger.ApiOkResponse)({
        type: _userentity.UserEntity,
        description: 'The user has been successfully deleted.'
    }),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ])
], UsersController.prototype, "remove", null);
UsersController = _ts_decorate([
    (0, _common.Controller)(endpoint),
    (0, _swagger.ApiTags)(endpoint),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _usersservice.UsersService === "undefined" ? Object : _usersservice.UsersService
    ])
], UsersController);
