"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DatabaseService", {
    enumerable: true,
    get: function() {
        return DatabaseService;
    }
});
const _common = require("@nestjs/common");
const _client = require("@prisma/client");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let DatabaseService = class DatabaseService extends _client.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        this.$on('beforeExit', async ()=>{
            await app.close();
        });
    }
};
DatabaseService = _ts_decorate([
    (0, _common.Injectable)()
], DatabaseService);
