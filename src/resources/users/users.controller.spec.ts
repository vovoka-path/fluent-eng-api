import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './entity/user.entity';
import { of } from 'rxjs';

describe('UsersController', () => {
  let controller: UsersController;
  // let service: UsersService;
  let service: DeepMocked<UsersService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of all users', async () => {
      service.axiosRef.mockResolvedValueOnce({
        data: {
          species: { name: `bulbasaur` },
        },
        headers: {},
        config: { url: '' },
        status: 200,
        statusText: '',
      });
      const result: AxiosResponse = [{ id: 0, email: 'string', password: 'string' }];
      jest.spyOn(service, 'findAll').mockImplementation((): Promise<UserEntity[]> => of(result));

      expect(await controller.findAll()).toBe(result);
    });
  });
});
