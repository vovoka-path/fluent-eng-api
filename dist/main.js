"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _swaggermodule = require("./swagger/swagger.module");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    new _swaggermodule.Swagger(app);
    await app.listen(3000);
}
bootstrap();
