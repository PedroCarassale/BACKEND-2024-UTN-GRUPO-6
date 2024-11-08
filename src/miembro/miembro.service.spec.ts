import { Test, TestingModule } from '@nestjs/testing';
import { MiembroService } from './miembro.service';

describe('MiembroService', () => {
  let service: MiembroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiembroService],
    }).compile();

    service = module.get<MiembroService>(MiembroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
