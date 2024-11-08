import { Test, TestingModule } from '@nestjs/testing';
import { MiembroController } from './miembro.controller';
import { MiembroService } from './miembro.service';

describe('MiembroController', () => {
  let controller: MiembroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiembroController],
      providers: [MiembroService],
    }).compile();

    controller = module.get<MiembroController>(MiembroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
