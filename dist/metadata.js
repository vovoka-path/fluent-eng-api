/* eslint-disable */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const _default = async ()=>{
    const t = {};
    return {
        "@nestjs/swagger": {
            "models": [
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./resources/users/dto/create-user.dto"))),
                    {
                        "CreateUserDto": {
                            email: {
                                required: true,
                                type: ()=>String
                            },
                            password: {
                                required: true,
                                type: ()=>String,
                                minimum: 6
                            }
                        }
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./resources/users/dto/update-user.dto"))),
                    {
                        "UpdateUserDto": {}
                    }
                ],
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./resources/users/entity/user.entity"))),
                    {
                        "UserEntity": {
                            id: {
                                required: true,
                                type: ()=>Number
                            },
                            email: {
                                required: true,
                                type: ()=>String
                            },
                            password: {
                                required: true,
                                type: ()=>String,
                                minimum: 6
                            }
                        }
                    }
                ]
            ],
            "controllers": [
                [
                    Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require("./resources/users/users.controller"))),
                    {
                        "UsersController": {
                            "create": {
                                type: Object
                            },
                            "findOneByEmail": {
                                type: Object
                            },
                            "findAll": {
                                type: [
                                    Object
                                ]
                            },
                            "findOneById": {
                                type: Object
                            },
                            "update": {
                                type: Object
                            },
                            "remove": {
                                type: Object
                            }
                        }
                    }
                ]
            ]
        }
    };
};
