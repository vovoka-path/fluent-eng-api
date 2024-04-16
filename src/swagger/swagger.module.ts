import { Module } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, ApiParamOptions } from '@nestjs/swagger';
import { ISwaggerInfo } from './types';
import { configData } from './config';

const endPoint = '';

@Module({})
export class Swagger {
  constructor(app: INestApplication) {
    this.create(app, configData);
  }

  private create(app: INestApplication, configData: any): void {
    const config = new DocumentBuilder()
      .setTitle(configData.title)
      .setDescription(configData.description)
      .setVersion(configData.version)
      .setContact(configData.contact.name, configData.contact.email, configData.contact.url)
      .setLicense(configData.license.name, configData.license.url)
      .addTag(configData.tag)
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup(endPoint, app, document);
  }

  static getInfo(swagerInfo: ISwaggerInfo[], name: string): ApiParamOptions {
    let paramByName = swagerInfo.filter(
      (param: ApiParamOptions) => param.name && param.name === name,
    )[0];

    if (!paramByName) {
      paramByName = {
        name,
        type: 'String',
        description: 'WARNING! Description is not correct.',
        required: false,
      };
    }

    return paramByName;
  }
}
